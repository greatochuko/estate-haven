import SettingsPageReviewsList from "@/components/SettingsPageReviewsList";
import UserNotAuthenticatedPage from "@/components/UserNotAuthenticatedPage";
import {
  getAllReviewsAboutAgent,
  getAllReviewsByUser,
} from "@/services/reviewServices";
import { getUserSession } from "@/services/userServices";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const user = await getUserSession();
  if (!user) return <UserNotAuthenticatedPage />;

  const reviewsAboutAgent = await getAllReviewsAboutAgent(user.id);
  const reviewsByUser = await getAllReviewsByUser(user.id);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="font-bold text-2xl">Reviews</h1>
        <p className="text-zinc-500">
          Manage reviews about you and by you here.
        </p>
      </div>
      <SettingsPageReviewsList
        user={user}
        reviewsAboutAgent={reviewsAboutAgent}
        reviewsByUser={reviewsByUser}
      />
    </div>
  );
}
