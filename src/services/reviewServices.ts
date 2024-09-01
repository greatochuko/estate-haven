import { ReviewType } from "@/components/Review";
import { createClient } from "@/utils/supabase/server";

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
