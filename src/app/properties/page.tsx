import PropertiesPageMain from "@/components/PropertiesPageMain";
import SearchForm from "@/components/SearchForm";
import { getProperties } from "@/services/propertyServices";
import React from "react";

export type PropertySearchParams = {
  city: string;
  propertyTypes: string;
  category: string;
  minPrice: string;
  maxPrice: string;
  minBedroom: string;
  maxBedroom: string;
  minBathroom: string;
  maxBathroom: string;
  page: string;
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: PropertySearchParams;
}) {
  const properties = await getProperties();
  return (
    <div className="flex flex-col flex-1 gap-4 lg:gap-6">
      <SearchForm />
      <PropertiesPageMain properties={properties} searchParams={searchParams} />
    </div>
  );
}
