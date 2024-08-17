import PersonalInfoForm from "@/components/PersonalInfoForm";
import { getUserSession } from "@/services/userServices";
import { notFound } from "next/navigation";
import React from "react";

export default async function PersonalInfoSettingsPage() {
  const user = await getUserSession();
  if (!user) notFound();
  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Personal Info</h1>
      <PersonalInfoForm user={user} />
    </div>
  );
}
