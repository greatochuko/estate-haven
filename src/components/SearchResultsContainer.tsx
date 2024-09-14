import React from "react";
import SearchResults from "./SearchResults";
import { PropertySearchParams } from "@/app/properties/page";
import { getUserSession } from "@/services/userServices";
import { searchProperties } from "@/services/propertyServices";
import { getUserWishlist } from "@/services/wishlistServices";

export default async function SearchResultsContainer({
  searchParams,
}: {
  searchParams: PropertySearchParams;
}) {
  const user = await getUserSession();
  const properties = await searchProperties(searchParams);
  const wishlist = await getUserWishlist();

  return (
    <SearchResults
      properties={properties}
      searchParams={searchParams}
      user={user}
      wishlist={wishlist}
    />
  );
}
