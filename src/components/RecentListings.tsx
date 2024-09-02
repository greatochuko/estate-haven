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
        className="block border-[3px] border-accent-green-100 hover:bg-accent-green-100 mx-auto mt-8 px-4 py-2 rounded-full w-fit font-bold text-accent-green-100 hover:text-white duration-300"
      >
        Show All
      </Link>
    </div>
  );
}
