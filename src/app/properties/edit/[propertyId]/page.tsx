import { getProperty } from "@/services/propertyServices";
import React from "react";
import CreateNewListingPage from "../../new/page";

export default async function EditPropertyPage({
  params: { propertyId },
}: {
  params: { propertyId: string };
}) {
  const property = await getProperty(propertyId);

  return <CreateNewListingPage property={property} />;
}
