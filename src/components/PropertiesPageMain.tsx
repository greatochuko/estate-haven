"use client";
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import SearchResults from "./SearchResults";
import { PropertyType } from "./Property";
import { useSearchParams } from "next/navigation";

export default function PropertiesPageMain({
  properties,
}: {
  properties: PropertyType[];
}) {
  const [showFilter, setShowFilter] = useState(false);

  const searchParams = useSearchParams();
  const city = searchParams.get("city")?.split("-").join(" ");
  const propertyTypes = searchParams.get("propertyTypes")?.split("-");
  const listingType = searchParams.get("listingType");
  const minPrice = Number(searchParams.get("minPrice"));
  const maxPrice = Number(searchParams.get("maxPrice"));
  const minBedroom = Number(searchParams.get("minBedroom"));
  const maxBedroom = Number(searchParams.get("maxBedroom"));
  const minBathroom = Number(searchParams.get("minBathroom"));
  const maxBathroom = Number(searchParams.get("maxBathroom"));

  let filteredProperties = properties;

  if (city)
    filteredProperties = filteredProperties.filter(
      (property) => property.city.toLowerCase() === city.toLowerCase()
    );
  if (propertyTypes)
    filteredProperties = filteredProperties.filter((property) =>
      propertyTypes.some((p) => property.type.toLowerCase() === p.toLowerCase())
    );
  if (listingType === "rent")
    filteredProperties = filteredProperties.filter(
      (property) => property.category === "rent"
    );
  if (listingType === "sale")
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
      />
      <SearchResults
        properties={filteredProperties}
        showFilter={() => setShowFilter(true)}
      />
    </div>
  );
}
