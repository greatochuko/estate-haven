import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import ModalContainer from "./ModalContainer";
import { postReview, editReview } from "@/actions/reviewActions";
import { PropertyType } from "./Property";
import { ReviewType } from "./Review";
import { deleteReview } from "@/services/reviewServices";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";

export default function ReviewModal({
  property,
  closeModal,
  open,
  review,
  type,
}: {
  property: PropertyType;
  closeModal: () => void;
  open: boolean;
  review: ReviewType | null;
  type: "" | "new" | "edit" | "delete";
}) {
  const router = useRouter();

  const [pending, setPending] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [tempRating, setTempRating] = useState<number | null>(null);

  const reviewId = review?.id;
  const reviewRating = review?.rating;
  const reviewComment = review?.comment;

  useEffect(() => {
    if (!reviewId || !reviewComment || !reviewRating) return;
    setComment(reviewComment);
    setRating(reviewRating);
  }, [reviewId, reviewComment, reviewRating]);

  async function handleDeleteReview() {
    setPending(true);
    const { done } = await deleteReview(review!.id);
    if (done) {
      router.refresh();
      closeModal();
    }
    setPending(false);
  }

  async function handlePostReview(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const eventTarget = e.target as HTMLFormElement;
    const formData = new FormData(eventTarget);
    const { done } = await postReview(formData);
    if (done) {
      setComment("");
      closeModal();
    }
    setPending(false);
  }

  async function handleEditReview(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const eventTarget = e.target as HTMLFormElement;
    const formData = new FormData(eventTarget);
    const { done } = await editReview(formData);
    if (done) {
      setComment("");
      closeModal();
    }
    setPending(false);
  }

  return (
    <ModalContainer closeModal={closeModal} open={open}>
      {type === "new" ? (
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handlePostReview}
          className="flex flex-col gap-3 bg-white p-4 rounded-md w-[95%] max-w-lg"
        >
          <h2 className="font-bold text-xl sm:text-2xl">Add New Review</h2>
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
            placeholder="What do you think about this review?"
            className="p-2 sm:p-3 border rounded-md min-h-32 aspect-[4] resize-none"
          ></textarea>

          <input type="hidden" name="agent" value={property.agent.id} />
          <input type="hidden" name="rating" value={rating} />
          <input type="hidden" name="property" value={review?.property.id} />
          <button
            disabled={pending}
            className="flex-center bg-accent-green-100 hover:bg-accent-green-200 px-4 p-2 rounded-md sm:w-32 font-semibold text-white duration-300 sm:self-end"
          >
            {pending ? <LoadingIndicator /> : "Post Review"}
          </button>
        </form>
      ) : type === "edit" ? (
        <form
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleEditReview}
          className="flex flex-col gap-3 bg-white p-4 rounded-md w-[95%] max-w-lg"
        >
          <h2 className="font-bold text-xl sm:text-2xl">Add New Review</h2>
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
            placeholder="What do you think about this review?"
            className="p-2 sm:p-3 border rounded-md min-h-32 aspect-[4] resize-none"
          ></textarea>

          <input
            type="hidden"
            name="agent"
            value={review?.property.agent as string}
          />
          <input type="hidden" name="rating" value={rating} />
          <input type="hidden" name="property" value={review?.property.id} />
          <input type="hidden" name="reviewId" value={review?.id} />

          <button
            disabled={pending}
            className="flex-center bg-accent-green-100 hover:bg-accent-green-200 px-4 p-2 rounded-md sm:w-32 font-semibold text-white duration-300 sm:self-end"
          >
            {pending ? <LoadingIndicator /> : "Edit Review"}
          </button>
        </form>
      ) : type === "delete" ? (
        <div
          className="flex flex-col bg-white rounded-md w-[90%] max-w-sm overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-2 p-4">
            <div className="bg-red-100 p-2 rounded-full h-fit">
              <svg
                fill="#ef4444"
                height={20}
                width={20}
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 329.562 329.562"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M326.174,272.923l-139.5-241.568c-4.516-7.821-12.861-12.638-21.893-12.638c-9.031,0-17.377,4.816-21.893,12.638 L3.388,272.923c-4.518,7.821-4.518,17.46-0.002,25.282c4.516,7.822,12.862,12.641,21.895,12.641h279 c9.032,0,17.379-4.818,21.895-12.641C330.691,290.383,330.691,280.744,326.174,272.923z M25.281,285.565l139.5-241.568 l139.5,241.568H25.281z"></path>{" "}
                    <path d="M147.281,131.031l7.25,83c0.423,4.886,4.301,8.913,9.355,9.355c5.661,0.495,10.651-3.694,11.145-9.355l7.25-83 c0.078-0.97,0.088-2.057,0-3.057c-0.844-9.666-9.363-16.816-19.028-15.973C153.588,112.846,146.437,121.367,147.281,131.031z"></path>{" "}
                    <circle cx="164.781" cy="243.031" r="14.5"></circle>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-lg">Delete review</h2>
              <p>
                Are you sure you want to delete review with id &ldquo;
                {review?.id}&rdquo;?
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-2 bg-[#eee] p-2">
            <button
              className="border-zinc-200 bg-white hover:bg-zinc-100 px-4 p-2 border rounded-md font-bold text-zinc-700 duration-200"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteReview}
              className="flex-center bg-red-500 hover:bg-red-600 px-4 p-2 rounded-md w-24 font-bold text-white duration-200"
            >
              {pending ? <LoadingIndicator /> : "Confirm"}
            </button>
          </div>
        </div>
      ) : null}
    </ModalContainer>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="flex-center bg-accent-green-100 hover:bg-accent-green-200 px-4 p-2 rounded-md sm:w-32 font-semibold text-white duration-300 sm:self-end"
    >
      {pending ? <LoadingIndicator /> : children}
    </button>
  );
}
