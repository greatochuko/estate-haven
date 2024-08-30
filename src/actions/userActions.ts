"use server";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { UserType } from "@/components/AgentPropertyOffers";

export async function signup(
  firstname: string,
  lastname: string,
  email: string,
  password: string
) {
  const encryptedPassword = await bcrypt.hash(password as string, 10);
  const newUserData = {
    firstname,
    lastname,
    email,
    password: encryptedPassword,
  };

  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .insert(newUserData)
    .select();

  if (error && !data) return { done: null, error: "Email already in use" };

  const newUser: UserType = data[0];
  const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET!);
  cookies().set("token", token, {
    expires: Date.now() + 1000 * 1000,
    httpOnly: true,
  });
  revalidatePath("/", "layout");

  return { done: true, error: "" };
}

export async function login(email: string, password: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("email", email);

  if (!data?.length || error)
    return { done: false, error: "Invalid email and password combination" };

  const user: UserType = data[0];
  const passwordIsCorrect = await bcrypt.compare(password, user.password);
  if (!passwordIsCorrect)
    return { done: false, error: "Invalid email and password combination" };

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
  cookies().set("token", token, {
    expires: Date.now() + 1000 * 1000,
    httpOnly: true,
  });
  revalidatePath("/", "layout");
  return { done: true, error: "" };
}

export async function signout() {
  cookies().delete("token");
  revalidatePath("/", "layout");
}

// export async function updatePersonalInfo(userInfo: {
//   firstname: string;
//   lastname: string;
//   bio: string;
//   imageUrl: string;
//   companyName: string;
//   workEmail: string;
//   phoneNumber: string;
//   facebook: string;
//   linkedIn: string;
//   instagram: string;
//   twitter: string;
// }) {
//   try {
//     await connectDB();

//     const cookie = cookies().get("token");

//     const token = cookie?.value;
//     const jwtSecret = process.env.JWT_SECRET;
//     if (!token || !jwtSecret) throw new Error("invalid token or JWT secret");

//     const payload = jwt.verify(token, jwtSecret);
//     if (typeof payload === "string") throw new Error("Invalid payload");
//     const userId = payload.userId;
//     await User.findByIdAndUpdate(userId, userInfo);
//   } catch (error) {}
//   revalidatePath("/", "layout");
// }

// export async function updatePassword(
//   oldPassword: string,
//   newPassword: string
// ): Promise<{ done: boolean; error: string }> {
//   try {
//     await connectDB();

//     const cookie = cookies().get("token");

//     const token = cookie?.value;
//     const jwtSecret = process.env.JWT_SECRET;
//     if (!token || !jwtSecret) throw new Error("invalid token or JWT secret");

//     const payload = jwt.verify(token, jwtSecret);
//     if (typeof payload === "string") throw new Error("Invalid payload");
//     const userId = payload.userId;

//     const user = await User.findById(userId);
//     const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);
//     if (!passwordIsCorrect) throw new Error("Old password is incorrect");
//     const encryptedNewPassword = await bcrypt.hash(newPassword, 10);
//     user.password = encryptedNewPassword;
//     await user.save();
//     return { done: true, error: "" };
//   } catch (err) {
//     const errorMessage = (err as Error).message;
//     if (errorMessage === "Old password is incorrect") {
//       return { done: false, error: "Old password is incorrect" };
//     } else {
//       return { done: false, error: "Something went wrong" };
//     }
//   }
//   revalidatePath("/", "layout");
// }
