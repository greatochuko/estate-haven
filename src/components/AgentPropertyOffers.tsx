"use client";
import React, { useState } from "react";
import Property, { PropertyType } from "./Property";

export type AgentType = {
  _id: string;
  firstname: string;
  lastname: string;
  bio: string;
  imageUrl: string;
  companyName: string;
  phoneNumber: string;
  workEmail: string;
  facebook: string;
  twitter: string;
  linkedIn: string;
  instagram: string;
  wishlist?: PropertyType[];
};

export default function AgentPropertyOffers({
  properties,
  user,
}: {
  properties: PropertyType[];
  user: AgentType | null;
}) {
  const [propertyType, setPropertyType] = useState("sale");
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
      <div className="flex min-[400px]:flex-row flex-col justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPropertyType("rent")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              propertyType === "rent"
                ? "bg-white shadow-md text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-md text-zinc-500"
            }`}
          >
            For rent
          </button>
          <button
            onClick={() => setPropertyType("sale")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              propertyType === "sale"
                ? "bg-white shadow-md text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-md text-zinc-500"
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
      <div className="gap-6 grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] mb-4">
        {filteredProperties.map((property) => (
          <Property property={property} key={property._id} user={user} />
        ))}
      </div>
    </div>
  );
}
