import PasswordAndSecurityForm from "@/components/PasswordAndSecurityForm";
import { getUserSession } from "@/services/userServices";
import { notFound } from "next/navigation";
import React from "react";

export default async function PasswordAndSecurityPage() {
  const user = await getUserSession();
  if (!user) notFound();
  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Password & Security</h1>
      <PasswordAndSecurityForm />
    </div>
  );
}
