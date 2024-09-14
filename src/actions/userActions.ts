"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { getUserIdFromCookies } from "@/utils/getUserId";

export async function updatePersonalInfo(formData: FormData) {
  const firstname = formData.get("first-name");
  const lastname = formData.get("last-name");
  const bio = formData.get("bio");
  const imageUrl = formData.get("imageUrl");
  const companyName = formData.get("companyName");
  const workEmail = formData.get("workEmail");
  const phoneNumber = formData.get("phoneNumber");
  const facebook = formData.get("facebook");
  const linkedIn = formData.get("linkedIn");
  const instagram = formData.get("instagram");

  try {
    const { userId, error: cookiesError } = getUserIdFromCookies();
    if (cookiesError) throw cookiesError;

    // update user
    const supabase = createClient();
    const { error } = await supabase
      .from("profiles")
      .update({
        firstname,
        lastname,
        bio,
        imageUrl,
        companyName,
        workEmail,
        phoneNumber,
        facebook,
        linkedIn,
        instagram,
      })
      .eq("id", userId);
    if (error) throw error;
  } catch (error) {}
  revalidatePath("/", "layout");
}

export async function deleteAccount() {
  try {
    const { userId, error: cookiesError } = getUserIdFromCookies();
    if (cookiesError) throw cookiesError;

    const supabase = createClient();
    const {} = await supabase.from("profiles").delete().eq("id", userId);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  } finally {
    revalidatePath("/", "layout");
  }
}
