"use server";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { UserType } from "@/components/AgentPropertyOffers";
import { getUserIdFromCookies } from "@/utils/getUserId";

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

  const { data: signupData } = await supabase
    .from("profiles")
    .select()
    .eq("email", email);
  if (signupData && signupData[0])
    return { done: null, error: "Email already in use" };

  const { data, error } = await supabase
    .from("profiles")
    .insert(newUserData)
    .select();

  if (error || !data) return { done: null, error: "Something went wrong" };

  const newUser: UserType = data[0];
  const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET!);
  cookies().set("token", token, {
    expires: Date.now() + 24 * 60 * 60 * 1000,
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
    expires: Date.now() + 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  revalidatePath("/", "layout");
  return { done: true, error: "" };
}

export async function loginWithDemoUser() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("email", "johndoe@gmail.com");

  if (!data?.length || error)
    return { done: false, error: "Invalid email and password combination" };

  const user: UserType = data[0];
  const passwordIsCorrect = await bcrypt.compare("12345678", user.password);
  if (!passwordIsCorrect)
    return { done: false, error: "Invalid email and password combination" };

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);
  cookies().set("token", token, {
    expires: Date.now() + 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  revalidatePath("/", "layout");
  return { done: true, error: "" };
}

export async function signout() {
  cookies().delete("token");
  revalidatePath("/", "layout");
}

export async function updatePassword(
  oldPassword: string,
  newPassword: string
): Promise<{ done: boolean; error: string }> {
  try {
    const { userId, error: cookiesError } = getUserIdFromCookies();
    if (cookiesError) throw cookiesError;

    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", userId);
    if (error) throw error;

    const user = data[0];
    const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!passwordIsCorrect) throw new Error("Old password is incorrect");

    const encryptedNewPassword = await bcrypt.hash(newPassword, 10);
    await supabase
      .from("profiles")
      .update({ password: encryptedNewPassword })
      .eq("id", userId);
    return { done: true, error: "" };
  } catch (err) {
    const errorMessage = (err as Error).message;
    if (errorMessage === "Old password is incorrect") {
      return { done: false, error: "Old password is incorrect" };
    } else {
      return { done: false, error: "Something went wrong" };
    }
  } finally {
    revalidatePath("/", "layout");
  }
}
