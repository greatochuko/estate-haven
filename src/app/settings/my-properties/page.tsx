import SettingsPagePropertyList from "@/components/SettingsPagePropertyList";
import { getPropertiesByAgent } from "@/services/propertyServices";
import { getUserSession } from "@/services/userServices";
import { notFound } from "next/navigation";
import React from "react";

export default async function MyPropertiesPage() {
  const user = await getUserSession();
  const agentProperties = await getPropertiesByAgent(user.id);

  if (!user) notFound();

  return (
    <div>
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-2xl">My Properties</h1>
        <p className="text-zinc-500">
          Here, you can view and easily manage your property offers.
        </p>
      </div>
      <SettingsPagePropertyList properties={agentProperties}/>
    </div>
  );
}
