"use server";

import { getUserIdFromCookies } from "@/utils/getUserId";
import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";

export async function postReview(formData: FormData) {
  const { userId } = getUserIdFromCookies();
  if (!userId) {
    revalidatePath("/", "layout");
    return { done: true, error: "User is unauthenticated" };
  }

  const newReview = {
    user: userId,
    agent: formData.get("agent"),
    property: formData.get("property"),
    rating: formData.get("rating"),
    comment: formData.get("comment"),
  };

  const supabase = createClient();
  const { error } = await supabase.from("reviews").insert(newReview);
  if (error) return { done: false, error };

  revalidatePath("/", "layout");
  return { done: true, error: null };
}

export async function editReview(formData: FormData) {
  const { userId } = getUserIdFromCookies();
  if (!userId) {
    revalidatePath("/", "layout");
    return { done: true, error: "User is unauthenticated" };
  }
  const reviewId = formData.get("reviewId");

  const editedReview = {
    user: userId,
    agent: formData.get("agent"),
    property: formData.get("property"),
    rating: formData.get("rating"),
    comment: formData.get("comment"),
  };

  const supabase = createClient();
  const { error } = await supabase
    .from("reviews")
    .update(editedReview)
    .eq("id", reviewId);

  if (error) return { done: false, error };

  revalidatePath("/", "layout");
  return { done: true, error: null };
}
