import { PropertyType } from "@/components/Property";
import UserNotAuthenticatedPage from "@/components/UserNotAuthenticatedPage";
import UserWishlist from "@/components/UserWishlist";
import { getUserSession } from "@/services/userServices";
import { getUserWishlist } from "@/services/wishlistServices";
import { Metadata } from "next";
import React from "react";

export type WishlistType = {
  id: string;
  user: string;
  property: PropertyType;
  dateCreated: string;
};

export const metadata: Metadata = {
  title: "Wishlist",
};

export default async function WishlistPage() {
  const user = await getUserSession();
  if (!user) return <UserNotAuthenticatedPage />;

  const wishlist = await getUserWishlist();

  const wishlistProperties = wishlist.map((wl) => wl.property);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-2xl">My Wishlist</h1>
        <p className="text-zinc-500">
          Here, you can view and easily manage your wishlist items.
        </p>
      </div>
      <UserWishlist properties={wishlistProperties as PropertyType[]} />
    </div>
  );
}
