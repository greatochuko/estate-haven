"use server";
import { User } from "@/db/models/User";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";

export async function signup(initialState: any, formData: FormData) {
  let state = initialState;
  try {
    const plainPassword = formData.get("password");
    const encryptedPassword = await bcrypt.hash(plainPassword as string, 10);
    const newUserData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: encryptedPassword,
    };
    await User.create(newUserData);
    state = { done: crypto.randomUUID(), error: "" };
  } catch (error) {
    const err = error as Error;
    if (err.message.includes("E11000") && err.message.includes("email")) {
      state = { done: null, error: "Email already in use" };
    }
  } finally {
    revalidatePath("/", "layout");
    return state;
  }
}

export async function login(initialState: any, formData: FormData) {
  let state = initialState;
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const user = await User.findOne({ email });
    if (!user) throw new Error("User does not exist");
    const passwordIsCorrect = await bcrypt.compare(
      password as string,
      user.password
    );

    if (!passwordIsCorrect)
      throw new Error("Invalid email and password combination");
    state = { done: crypto.randomUUID(), error: null };
  } catch (error) {
    const err = error as Error;
    state = { done: null, error: err.message };
  } finally {
    revalidatePath("/", "layout");
    return state;
  }
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
