import CreateListingContainer from "@/components/CreateListingContainer";
import { PropertyType } from "@/components/Property";

import UserNotAuthenticatedPage from "@/components/UserNotAuthenticatedPage";
import { getUserSession } from "@/services/userServices";
import React from "react";

export default async function CreateNewListingPage({
  property,
}: {
  property?: PropertyType;
}) {
  const user = await getUserSession();

  if (!user) return <UserNotAuthenticatedPage />;

  return (
    <div>
      <h1 className="mb-4 font-bold text-3xl">Create New Listing</h1>
      <CreateListingContainer userId={user._id} property={property} />
    </div>
  );
}
