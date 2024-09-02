"use client";
import React, { useState } from "react";
import Property, { PropertyType } from "./Property";
import { WishlistType } from "@/app/settings/wishlist/page";
import PropertiesGrid from "./PropertiesGrid";

export type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  bio: string;
  imageUrl: string;
  companyName: string;
  phoneNumber: string;
  workEmail: string;
  facebook: string;
  linkedIn: string;
  instagram: string;
  wishlist: PropertyType[];
};

export default function AgentPropertyOffers({
  properties,
  user,
  wishlist,
}: {
  properties: PropertyType[];
  user: UserType | null;
  wishlist: WishlistType[];
}) {
  const [propertyType, setPropertyType] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  let filteredProperties = properties;

  // Filter Properties by type
  if (propertyType === "rent")
    filteredProperties = filteredProperties.filter(
      (property) => property.category === "rent"
    );
  if (propertyType === "sale")
    filteredProperties = filteredProperties.filter(
      (property) => property.category === "sale"
    );

  // Sort Properties
  if (sortBy === "popular")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort((a, b) => a.views - b.views);
  if (sortBy === "oldest")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
      );
  if (sortBy === "newest")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      );
  if (sortBy === "least-expensive")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) => new Date(a.price).getTime() - new Date(b.price).getTime()
      );
  if (sortBy === "most-expensive")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) => new Date(b.price).getTime() - new Date(a.price).getTime()
      );

  return (
    <div className="flex flex-col flex-[3] gap-4">
      <h2 className="font-bold text-3xl text-center text-zinc-800">
        Property Offers
      </h2>
      <div className="flex sm:flex-row flex-col flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPropertyType("all")}
            className={` p-2 px-3 rounded-md duration-300 ${
              propertyType === "all"
                ? "text-white bg-accent-green-100 hover:bg-accent-green-200 font-bold"
                : "bg-[#f6f6f6] hover:bg-accent-green-100 hover:text-white text-zinc-500 font-semibold"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setPropertyType("rent")}
            className={` p-2 px-3 rounded-md duration-300 ${
              propertyType === "rent"
                ? "text-white bg-accent-green-100 hover:bg-accent-green-200 font-bold"
                : "bg-[#f6f6f6] hover:bg-accent-green-100 hover:text-white text-zinc-500 font-semibold"
            }`}
          >
            For rent
          </button>
          <button
            onClick={() => setPropertyType("sale")}
            className={` p-2 px-3 rounded-md duration-300 ${
              propertyType === "sale"
                ? "text-white bg-accent-green-100 hover:bg-accent-green-200 font-bold"
                : "bg-[#f6f6f6] hover:bg-accent-green-100 hover:text-white text-zinc-500 font-semibold"
            }`}
          >
            For sale
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort-by">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            name="sort-by"
            id="sort-by"
            className="border-2 p-1 sm:p-2 rounded-lg focus-visible:ring ring-accent-green-100"
          >
            <option value="popular">Popular</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="most-expensive">Most Expensive</option>
            <option value="least-expensive">Least Expensive</option>
          </select>
        </div>
      </div>
      <PropertiesGrid
        properties={filteredProperties}
        user={user}
        wishlist={wishlist}
      />
    </div>
  );
}
