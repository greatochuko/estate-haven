import { UserType } from "@/components/AgentPropertyOffers";
import PropertiesPageMain from "@/components/PropertiesPageMain";
import SearchForm from "@/components/SearchForm";
import { getProperties } from "@/services/propertyServices";
import { getUserSession } from "@/services/userServices";
import { getUserWishlist } from "@/services/wishlistServices";
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
  const user = await getUserSession();
  const properties = await getProperties();
  const wishlist = await getUserWishlist();

  return (
    <div className="flex flex-col flex-1 gap-4 lg:gap-6">
      <SearchForm />
      <PropertiesPageMain
        properties={properties}
        searchParams={searchParams}
        user={user}
        wishlist={wishlist}
      />
    </div>
  );
}
