"use client";
import { postReview } from "@/actions/reviewActions";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import LoadingIndicator from "./LoadingIndicator";
import { PropertyType } from "./Property";

export default function ReviewForm({ property }: { property: PropertyType }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState<number | null>(null);
  const [pending, setPending] = useState(false);

  async function handlePostReview(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData();
    formData.set("agent", property.agent.id);
    formData.set("property", property.id);
    formData.set("rating", rating.toString());
    formData.set("comment", comment);

    const { done } = await postReview(formData);
    if (done) {
      setComment("");
      setRating(1);
    }
    setPending(false);
  }

  return (
    <form onSubmit={handlePostReview} className="flex flex-col gap-3">
      <div className="flex items-center">
        <span className="mr-2 font-semibold">Rating:</span>
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="px-0.5 cursor-pointer"
            onClick={() => setRating(index)}
            onMouseOver={() => setTempRating(index)}
            onMouseLeave={() => setTempRating(null)}
          >
            <svg
              height={20}
              width={20}
              fill="#ccc"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ccc"
              className={` ${
                index > (tempRating || rating)
                  ? "fill-white stroke-[#ffd700]"
                  : "fill-[#ffd700] stroke-[#ffd700]"
              }`}
              strokeWidth={2}
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
          </div>
        ))}
      </div>

      <textarea
        name="comment"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
        placeholder="What do you think about this property?"
        className="p-2 sm:p-3 border rounded-md min-h-32 aspect-[4] resize-none"
      ></textarea>

      <input type="hidden" name="agent" value={property.agent.id} />
      <input type="hidden" name="rating" value={rating} />
      <input type="hidden" name="property" value={property.id} />
      <button
        disabled={pending}
        className="flex-center bg-accent-green-100 hover:bg-accent-green-200 px-4 p-2 rounded-md sm:w-32 font-semibold text-white duration-300 sm:self-end"
      >
        {pending ? <LoadingIndicator /> : "Post Review"}
      </button>
    </form>
  );
}
