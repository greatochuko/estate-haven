"use client";
import React, { useState } from "react";
import Review, { ReviewType } from "./Review";
import { UserType } from "./AgentPropertyOffers";
import ReviewModal from "./ReviewModal";
import { PropertyType } from "./Property";

export default function SettingsPageReviewsList({
  user,
  reviewsAboutAgent,
  reviewsByUser,
}: {
  user: UserType | null;
  reviewsAboutAgent: ReviewType[];
  reviewsByUser: ReviewType[];
}) {
  const [filter, setFilter] = useState("reviews-about-you");
  const [sortBy, setSortBy] = useState("newest");
  const [reviewModal, setReviewModal] = useState<{
    open: boolean;
    type: "" | "new" | "edit" | "delete";
    review: ReviewType | null;property:PropertyType|null
  }>({ open: false, type: "", review: null ,property:null});

  let filteredReviews = reviewsAboutAgent;

  // Filter reviews
  if (filter === "reviews-by-you") filteredReviews = reviewsByUser;

  if (sortBy === "oldest")
    filteredReviews = filteredReviews
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
      );

  if (sortBy === "newest")
    filteredReviews = filteredReviews
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      );

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 group">
          <button
            onClick={() => setFilter("reviews-about-you")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              filter === "reviews-about-you"
                ? "bg-white shadow-[0_1px_6px_1px_#e0e0e0] text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-[0_1px_6px_1px_#e0e0e0] text-zinc-500"
            }`}
          >
            Reviews about you
          </button>
          <button
            onClick={() => setFilter("reviews-by-you")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              filter === "reviews-by-you"
                ? "bg-white shadow-[0_1px_6px_1px_#e0e0e0] text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-[0_1px_6px_1px_#e0e0e0] text-zinc-500"
            }`}
          >
            Reviews by you
          </button>
        </div>
        <hr className="border-zinc-100" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center gap-4">
            <h2 className="font-bold text-xl">
              {filteredReviews.length} Review
              {filteredReviews.length === 1 ? "" : "s"}
            </h2>
            <div className="flex items-center gap-2">
              <label htmlFor="sort-by">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                name="sort-by"
                id="sort-by"
                className="border-2 p-1 sm:p-2 rounded-lg focus-visible:ring ring-accent-green-100"
              >
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          <hr className="border-zinc-100" />
          <ul className="flex flex-col gap-4">
            {filteredReviews.map((review) => (
              <Review
                user={user}
                review={review}
                key={review.id}
                showFor
                showUser={filter === "reviews-by-you" ? false : true}
                openEditReviewModal={() =>
                  setReviewModal({
                    open: true,
                    type: "edit",
                    review: review,
                    property:null
                  })
                }
                openDeleteReviewModal={() => {
                  setReviewModal({
                    open: true,
                    type: "delete",
                    review: review,
                    property:null
                  });
                }}
              />
            ))}
          </ul>
        </div>
      </div>
      <ReviewModal
        property={reviewModal.property!}
        open={reviewModal.open}
        review={reviewModal.review}
        type={reviewModal.type}
        closeModal={() =>
          setReviewModal({
            open: false,
            type: "",
            review: null,
            property:null
          })
        }
      />
    </>
  );
}
