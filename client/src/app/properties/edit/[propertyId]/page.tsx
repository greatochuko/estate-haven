import { getPropertyToEdit } from "@/services/propertyServices";
import React from "react";
import CreateNewListingPage from "../../new/page";
import { redirect } from "next/navigation";

export default async function EditPropertyPage({
  params: { propertyId },
}: {
  params: { propertyId: string };
}) {
  const property = await getPropertyToEdit(propertyId);
  if (!property) redirect("/properties/new");

  return <CreateNewListingPage property={property} />;
}
