"use server";
import { User } from "@/db/models/User";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { AgentType } from "@/components/AgentPropertyOffers";

export async function signup(
  firstname: string,
  lastname: string,
  email: string,
  password: string
) {
  try {
    const encryptedPassword = await bcrypt.hash(password as string, 10);
    const newUserData = {
      firstname,
      lastname,
      email,
      password: encryptedPassword,
    };
    const newUser = await User.create(newUserData);
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET!);
    cookies().set("token", token, {
      expires: Date.now() + 1000 * 1000,
      httpOnly: true,
    });
    revalidatePath("/", "layout");
    return { done: true, error: "" };
  } catch (error) {
    const err = error as Error;
    if (err.message.includes("E11000") && err.message.includes("email")) {
      return { done: null, error: "Email already in use" };
    }
    return { done: false, error: "Something went wrong" };
  }
}

export async function login(email: string, password: string) {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid email and password combination");
    const passwordIsCorrect = await bcrypt.compare(
      password as string,
      user.password
    );

    if (!passwordIsCorrect)
      throw new Error("Invalid email and password combination");
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);
    cookies().set("token", token, {
      expires: Date.now() + 60 * 60 * 1000,
      httpOnly: true,
    });
    revalidatePath("/", "layout");
    return { done: true, error: null };
  } catch (error) {
    const err = error as Error;
    return { done: false, error: err.message };
  }
}

export async function signout() {
  cookies().delete("token");
  revalidatePath("/", "layout");
}

export async function updatePersonalInfo(userInfo: {
  firstname: string;
  lastname: string;
  bio: string;
  imageUrl: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  facebook: string;
  linkedIn: string;
  instagram: string;
  twitter: string;
}) {
  try {
    const cookie = cookies().get("token");

    const token = cookie?.value;
    const jwtSecret = process.env.JWT_SECRET;
    if (!token || !jwtSecret) throw new Error("invalid token or JWT secret");

    const payload = jwt.verify(token, jwtSecret);
    if (typeof payload === "string") throw new Error("Invalid payload");
    const userId = payload.userId;
    await User.findByIdAndUpdate(userId, userInfo);
  } catch (error) {}
  revalidatePath("/", "layout");
}

export async function updatePassword(initialState: any, formData: FormData) {
  const currentPassword = formData.get("current-password");
  const newPassword = formData.get("new-password");
  revalidatePath("/", "layout");
  return crypto.randomUUID();
}
