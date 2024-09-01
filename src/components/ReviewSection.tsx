import React from "react";
import Review, { ReviewType } from "./Review";
import { getUserSession } from "@/services/userServices";
import ReviewForm from "./ReviewForm";
import { PropertyType } from "./Property";

export default async function ReviewSection({
  reviews,
  property,
}: {
  reviews: ReviewType[];
  property: PropertyType;
}) {
  const user = await getUserSession();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap justify-between items-center gap-4 pb-4 border-b">
        <div className="flex items-center gap-2">
          <span>
            <svg
              height={22}
              width={22}
              fill="#ffd700"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffd700"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M30.859 12.545c-0.168-0.506-0.637-0.864-1.189-0.864h-9.535l-2.946-9.067c-0.208-0.459-0.662-0.772-1.188-0.772s-0.981 0.313-1.185 0.764l-0.003 0.008-2.946 9.067h-9.534c-0.69 0-1.25 0.56-1.25 1.25 0 0.414 0.202 0.782 0.512 1.009l0.004 0.002 7.713 5.603-2.946 9.068c-0.039 0.116-0.061 0.249-0.061 0.387 0 0.69 0.56 1.25 1.25 1.25 0.276 0 0.531-0.089 0.738-0.241l-0.004 0.002 7.714-5.605 7.713 5.605c0.203 0.149 0.458 0.238 0.734 0.238 0.691 0 1.251-0.56 1.251-1.251 0-0.138-0.022-0.271-0.064-0.395l0.003 0.009-2.947-9.066 7.715-5.604c0.314-0.231 0.515-0.598 0.515-1.013 0-0.137-0.022-0.27-0.063-0.393l0.003 0.009z"></path>
              </g>
            </svg>
          </span>
          <h2 className="font-bold text-xl sm:text-2xl">
            {reviews.length > 0
              ? (
                  reviews.reduce((acc, curr) => acc + curr.rating, 0) /
                  reviews.length
                ).toFixed(1)
              : 0}{" "}
            ({reviews.length} Review{reviews.length > 1 ? "s" : ""})
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort-reviews">Sort by:</label>
          <select
            name="sort-reviews"
            id="sort-reviews"
            className="p-2 border rounded-md font-semibold"
          >
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="high-rating">High Rating</option>
            <option value="low-rating">Low Rating</option>
          </select>
        </div>
      </div>

      {reviews.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </ul>
      ) : (
        <p className="flex-center text-zinc-500">
          There are currently no reviews for this property
        </p>
      )}

      <hr className="border-[#eee]" />

      {user ? <ReviewForm property={property} /> : null}
    </div>
  );
}
