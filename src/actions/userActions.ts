"use server";
import { revalidatePath } from "next/cache";

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
  revalidatePath("/settings", "layout");
}

export async function updatePassword(initialState: any, formData: FormData) {
  const currentPassword = formData.get("current-password");
  const newPassword = formData.get("new-password");
  console.log(currentPassword, newPassword);
  revalidatePath("/settings", "layout");
  return crypto.randomUUID();
}
