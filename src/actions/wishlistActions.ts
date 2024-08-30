"use server";

import { getUserIdFromCookies } from "@/utils/getUserId";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addToWishlist(propertyId: string) {
  let state;
  const { userId } = getUserIdFromCookies();
  if (!userId) {
    state = { success: false, error: "User is unauthenticated" };
  }
  const supabase = createClient();
  const { error } = await supabase
    .from("wishlist")
    .insert({ user: userId, property: propertyId });

  if (!error) {
    state = { success: true, error: null };
  } else {
    state = { success: false, error: "Something went wrong" };
  }

  revalidatePath("/", "layout");
  return state;
}

export async function removeFromWishlist(propertyId: string) {
  let state;
  const { userId } = getUserIdFromCookies();
  if (!userId) {
    state = { success: false, error: "User is unauthenticated" };
  }
  const supabase = createClient();
  const { error } = await supabase.from("wishlist").delete().eq("user", userId);

  if (!error) {
    state = { success: true, error: null };
  } else {
    state = { success: false, error: "Something went wrong" };
  }

  revalidatePath("/", "layout");
  return state;
}
