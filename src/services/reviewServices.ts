import { ReviewType } from "@/components/Review";
import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";

export async function getReviews(agentId: string): Promise<ReviewType[]> {
  const supabase = createClient();
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("*, user(*), agent(*), property(*)");

  return reviews || [];
}

export async function getAllReviewsAboutAgent(agentId: string) {
  const supabase = createClient();
  const { data: reviews } = await supabase
    .from("reviews")
    .select("*, user(*), agent(*), property(*)")
    .eq("agent", agentId);

  return reviews || [];
}

export async function getAllReviewsByUser(userId: string) {
  const supabase = createClient();
  const { data: reviews } = await supabase
    .from("reviews")
    .select("*, user(*), agent(*), property(*)")
    .eq("user", userId);

  return reviews || [];
}

export async function deleteReview(reviewId: string) {
  const supabase = createClient();
  const { error } = await supabase.from("reviews").delete().eq("id", reviewId);

  if (error) return { done: false, error };

  return { done: true, error: null };
}
