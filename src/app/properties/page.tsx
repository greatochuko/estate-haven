import PropertiesPageContainer from "@/components/PropertiesPageContainer";
import SearchForm from "@/components/SearchForm";
import { searchProperties } from "@/services/propertyServices";
import { getUserSession } from "@/services/userServices";
import { getUserWishlist } from "@/services/wishlistServices";
import React from "react";

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
  const user = await getUserSession();
  const properties = await searchProperties(searchParams.q);
  const wishlist = await getUserWishlist();

  return (
    <div className="flex flex-col flex-1 gap-4 lg:gap-6">
      <SearchForm />
      <PropertiesPageContainer
        properties={properties}
        searchParams={searchParams}
        user={user}
        wishlist={wishlist}
      />
    </div>
  );
}
