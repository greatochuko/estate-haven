import { WishlistType } from "@/app/settings/wishlist/page";
import { getUserIdFromCookies } from "@/utils/getUserId";
import { createClient } from "@/utils/supabase/client";
import { revalidatePath } from "next/cache";

export async function getUserWishlist(): Promise<WishlistType[]> {
  const { userId } = getUserIdFromCookies();
  if (!userId) {
    revalidatePath("/", "layout");
    return [];
  }

  const supabase = createClient();
  const { data: wishlist, error } = await supabase
    .from("wishlist")
    .select("*, property (*)")
    .eq("user", userId);
  if (error) return [];

  return wishlist;
}
