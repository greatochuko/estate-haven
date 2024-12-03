import React from "react";
import Property, { PropertyType } from "./Property";
import Link from "next/link";
import { UserType } from "./AgentPropertyOffers";
import { getUserWishlist } from "@/services/wishlistServices";
import PropertiesGrid from "./PropertiesGrid";

export default async function RecentListings({
  properties,
  user,
}: {
  properties: PropertyType[];
  user: UserType | null;
}) {
  const wishlist = await getUserWishlist();
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-xl sm:text-2xl">
        Explore our latest properties
      </h3>
      <PropertiesGrid properties={properties} user={user} wishlist={wishlist} />
      <Link
        href={"/properties"}
        className="border-[2px] border-accent-green-100 text-accent-green-100 font-semibold hover:bg-accent-green-100 hover:text-white text-sm duration-200 rounded-full px-4 py-2 w-fit mx-auto"
      >
        Show All
      </Link>
    </div>
  );
}
