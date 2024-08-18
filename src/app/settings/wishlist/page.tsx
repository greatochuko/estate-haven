import { PropertyType } from "@/components/Property";
import UserWishlist from "@/components/UserWishlist";
import { getUserSession } from "@/services/userServices";
import React from "react";

export default async function WishlistPage() {
  const user = await getUserSession();
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-2xl">My Wishlist</h1>
        <p className="text-zinc-500">
          Here, you can view and easily manage your wishlist items.
        </p>
      </div>
      <UserWishlist properties={user.wishlist as PropertyType[]} />
    </div>
  );
}
