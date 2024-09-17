import React from "react";
import Image from "next/image";
import Rating from "./Rating";
import Link from "next/link";
import { UserType } from "./AgentPropertyOffers";
import { PropertyType } from "./Property";

export type ReviewType = {
  id: string;
  user: UserType;
  agent: UserType;
  property: PropertyType;
  rating: number;
  dateCreated: string;
  comment: string;
};

export default function Review({
  review,
  showFor = false,
  showUser = true,
  openEditReviewModal,
  openDeleteReviewModal,
}: {
  review: ReviewType;
  showFor?: boolean;
  showUser?: boolean;
  openEditReviewModal: () => void;
  openDeleteReviewModal: () => void;
}) {
  return (
    <li
      key={review.id}
      className="flex flex-col gap-4 border-[#eee] pb-4 border-b"
    >
      {showUser ? (
        <div className="flex items-center gap-4">
          <div className="relative rounded-full w-12 h-12 overflow-hidden">
            <Image
              src={review.user.imageUrl}
              alt={review.user.firstname + " " + review.user.lastname}
              fill
              sizes="96px"
              className="object-cover"
            ></Image>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-bold">
              {review.user.firstname} {review.user.lastname}
            </h3>
            <Rating rating={review.rating} />
          </div>
        </div>
      ) : null}
      {showFor ? (
        <div className="flex flex-col gap-2">
          <p className="text-zinc-700">
            For:{" "}
            <Link
              href={`/properties/${review.property.id}`}
              className="font-bold hover:text-accent-green-100 duration-300"
            >
              {review.property.name}
            </Link>
          </p>
          {!showUser ? <Rating rating={review.rating} /> : null}
        </div>
      ) : null}
      <p className="text-zinc-600">{review.comment}</p>
      <div className="flex gap-4">
        <button
          onClick={openEditReviewModal}
          className="flex items-center gap-1 font-semibold text-zinc-500 hover:text-accent-green-100 duration-300 group"
        >
          <svg
            height={18}
            width={18}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <g id="Complete">
                <g id="edit">
                  <g>
                    <path
                      d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                      fill="none"
                      stroke="#000000"
                      className="group-hover:stroke-accent-green-100 duration-300 stroke-zinc-500"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    <polygon
                      fill="none"
                      points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                      stroke="#000000"
                      className="group-hover:stroke-accent-green-100 duration-300 stroke-zinc-500"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Edit
        </button>
        <button
          onClick={openDeleteReviewModal}
          className="flex items-center gap-1 font-semibold text-zinc-500 hover:text-red-500 duration-300 group"
        >
          <svg
            height={20}
            width={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M10 12V17"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-zinc-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14 12V17"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-zinc-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 7H20"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-zinc-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-zinc-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-zinc-500"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Delete
        </button>
      </div>
    </li>
  );
}
