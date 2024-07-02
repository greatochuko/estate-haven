import Image from "next/image";
import React from "react";
import Rating from "./Rating";

type ReviewType = {
  id: string;
  user: {
    firstname: string;
    lastname: string;
    imageUrl: string;
  };
  rating: number;
  comment: string;
};

export default function Review({ review }: { review: ReviewType }) {
  return (
    <div className="flex flex-col flex-[0_0_100%] sm:flex-[0_0_calc(100%/2_-_.5rem)] lg:flex-[0_0_calc(100%/3_-_.67rem)] items-center gap-2 p-6 border rounded-xl text-center">
      <div className="relative rounded-full w-20 overflow-hidden aspect-square">
        <Image
          src={review.user.imageUrl}
          alt={review.user.firstname + " " + review.user.lastname}
          fill
          sizes=""
          className="object-cover"
        ></Image>
      </div>
      <h4 className="font-bold sm:text-lg">
        {review.user.firstname + " " + review.user.lastname}
      </h4>
      <Rating rating={review.rating} />
      <p className="text-zinc-600">{review.comment}</p>
    </div>
  );
}
