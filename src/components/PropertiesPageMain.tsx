"use client";
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import SearchResults from "./SearchResults";
import { PropertyType } from "./Property";
import { PropertySearchParams } from "@/app/properties/page";
import { AgentType } from "./AgentPropertyOffers";

export default function PropertiesPageMain({
  properties,
  searchParams,
  user,
}: {
  properties: PropertyType[];
  searchParams: PropertySearchParams;
  user: AgentType | null;
}) {
  const [showFilter, setShowFilter] = useState(false);

  const city = searchParams.city?.split("-").join(" ");
  const propertyTypes = searchParams.propertyTypes?.split("-");
  const category = searchParams.category;
  const minPrice = Number(searchParams.minPrice);
  const maxPrice = Number(searchParams.maxPrice);
  const minBedroom = Number(searchParams.minBedroom);
  const maxBedroom = Number(searchParams.maxBedroom);
  const minBathroom = Number(searchParams.minBathroom);
  const maxBathroom = Number(searchParams.maxBathroom);

  let filteredProperties = properties;

  if (city)
    filteredProperties = filteredProperties.filter(
      (property) => property.city.toLowerCase() === city.toLowerCase()
    );
  if (propertyTypes)
    filteredProperties = filteredProperties.filter((property) =>
      propertyTypes.some((p) => property.type.toLowerCase() === p.toLowerCase())
    );
  if (category === "rent")
    filteredProperties = filteredProperties.filter(
      (property) => property.category === "rent"
    );
  if (category === "sale")
    filteredProperties = filteredProperties.filter(
      (property) => property.category === "sale"
    );
  if (minPrice)
    filteredProperties = filteredProperties.filter(
      (property) => property.price >= minPrice
    );
  if (maxPrice)
    filteredProperties = filteredProperties.filter(
      (property) => property.price <= maxPrice
    );
  if (minBedroom)
    filteredProperties = filteredProperties.filter(
      (property) => property.beds >= minBedroom
    );
  if (maxBedroom)
    filteredProperties = filteredProperties.filter(
      (property) => property.beds <= maxBedroom
    );
  if (minBathroom)
    filteredProperties = filteredProperties.filter(
      (property) => property.beds >= minBathroom
    );
  if (maxBathroom)
    filteredProperties = filteredProperties.filter(
      (property) => property.beds <= maxBathroom
    );

  return (
    <div className="flex lg:flex-row flex-col flex-1 gap-8">
      <SearchFilter
        properties={properties}
        closeModal={() => setShowFilter(false)}
        showFilter={showFilter}
        searchParams={searchParams}
      />
      <SearchResults
        properties={filteredProperties}
        showFilter={() => setShowFilter(true)}
        searchParams={searchParams}
        user={user}
      />
    </div>
  );
}
