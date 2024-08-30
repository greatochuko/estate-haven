import React, { useEffect, useState } from "react";
import Property, { PropertyType } from "./Property";
import Link from "next/link";
import { UserType } from "./AgentPropertyOffers";

export default function RecentListings({
  properties,
  user,
}: {
  properties: PropertyType[];
  user: UserType | null;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-xl sm:text-2xl">
        Explore our latest properties
      </h3>
      <div className="gap-6 grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))]">
        {properties.map((property) => (
          <Property property={property} key={property.id} user={user} />
        ))}
      </div>
      <Link
        href={"/properties"}
        className="block border-[3px] border-accent-green-100 hover:bg-accent-green-100 mx-auto mt-8 px-4 py-2 rounded-full w-fit font-bold text-accent-green-100 hover:text-white duration-300"
      >
        Show All
      </Link>
    </div>
  );
}
