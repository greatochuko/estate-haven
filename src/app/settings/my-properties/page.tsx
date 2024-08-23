import SettingsPagePropertyList from "@/components/SettingsPagePropertyList";
import UserNotAuthenticatedPage from "@/components/UserNotAuthenticatedPage";
import { getPropertiesByAgent } from "@/services/propertyServices";
import { getUserSession } from "@/services/userServices";
import React from "react";

export default async function MyPropertiesPage() {
  const user = await getUserSession();
  if (!user) return <UserNotAuthenticatedPage />;

  const agentProperties = await getPropertiesByAgent(user._id);

  return (
    <div>
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-2xl">My Properties</h1>
        <p className="text-zinc-500">
          Here, you can view and easily manage your property offers.
        </p>
      </div>
      <SettingsPagePropertyList properties={agentProperties} />
    </div>
  );
}
