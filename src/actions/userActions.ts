"use server";
import { User } from "@/db/models/User";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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

export async function updatePersonalInfo(formData: FormData) {
  const personalInfo = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    workEmail: formData.get("workEmail"),
    companyName: formData.get("companyName"),
    phoneNumber: formData.get("phoneNumber"),
    facebook: formData.get("facebook"),
    linkedIn: formData.get("linkedIn"),
    instagram: formData.get("instagram"),
  };
  revalidatePath("/", "layout");
}

export async function updatePassword(initialState: any, formData: FormData) {
  const currentPassword = formData.get("current-password");
  const newPassword = formData.get("new-password");
  revalidatePath("/", "layout");
  return crypto.randomUUID();
}
