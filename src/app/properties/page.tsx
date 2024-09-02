import LoadingScreen from "@/components/LoadingScreen";
import SearchFilter from "@/components/SearchFilter";
import SearchForm from "@/components/SearchForm";
import SearchResultsContainer from "@/components/SearchResultsContainer";
import React, { Suspense } from "react";

export type PropertySearchParams = {
  q: string;
  state: string;
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

export const revalidate = 60;

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: PropertySearchParams;
}) {
  return (
    <div className="flex flex-col flex-1 gap-4 lg:gap-6">
      <SearchForm />
      <div className="flex lg:flex-row flex-col flex-1 gap-8">
        <SearchFilter searchParams={searchParams} />
        <Suspense fallback={<LoadingScreen />} key={searchParams.q}>
          <SearchResultsContainer searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
