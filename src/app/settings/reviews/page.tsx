import SettingsPageReviewsList from "@/components/SettingsPageReviewsList";
import UserNotAuthenticatedPage from "@/components/UserNotAuthenticatedPage";
import {
  getAllReviewsAboutAgent,
  getAllReviewsByUser,
} from "@/services/reviewServices";
import { getUserSession } from "@/services/userServices";
import React from "react";

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
        reviewsAboutAgent={reviewsAboutAgent}
        reviewsByUser={reviewsByUser}
      />
    </div>
  );
}
