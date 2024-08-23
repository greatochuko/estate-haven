import CreateNewListingPage from "@/app/create-new-listing/page";
import { getProperty } from "@/services/propertyServices";
import React from "react";

export default async function EditPropertyPage({
  params: { propertyId },
}: {
  params: { propertyId: string };
}) {
  const property = await getProperty(propertyId);

  return <CreateNewListingPage property={property} />;
}
