import PasswordAndSecurityForm from "@/components/PasswordAndSecurityForm";
import UserNotAuthenticatedPage from "@/components/UserNotAuthenticatedPage";
import { getUserSession } from "@/services/userServices";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Password and Security",
};

export default async function PasswordAndSecurityPage() {
  const user = await getUserSession();
  if (!user) return <UserNotAuthenticatedPage />;
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
