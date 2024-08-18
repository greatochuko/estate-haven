import PersonalInfoForm from "@/components/PersonalInfoForm";
import { getUserSession } from "@/services/userServices";
import { notFound } from "next/navigation";
import React from "react";

export default async function PersonalInfoSettingsPage() {
  const user = await getUserSession();
  if (!user) notFound();
  return (
    <div>
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-2xl">Personal Info</h1>
        <p className="text-zinc-500">
          Update your personal information to keep your account accurate and
          up-to-date.
        </p>
      </div>
      <PersonalInfoForm user={user} />
    </div>
  );
}
