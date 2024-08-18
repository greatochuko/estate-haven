import PasswordAndSecurityForm from "@/components/PasswordAndSecurityForm";
import { getUserSession } from "@/services/userServices";
import { notFound } from "next/navigation";
import React from "react";

export default async function PasswordAndSecurityPage() {
  const user = await getUserSession();
  if (!user) notFound();
  return (
    <div>
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-2xl">Password & Security</h1>
        <p className="text-zinc-500">
          Update your password settings to keep your account secure.
        </p>
      </div>
      <PasswordAndSecurityForm />
    </div>
  );
}
