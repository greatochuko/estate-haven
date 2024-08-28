import Image from "next/image";
import React from "react";
import Rating from "./Rating";

type TestimonialType = {
  id: string;
  user: {
    firstname: string;
    lastname: string;
    imageUrl: string;
  };
  rating: number;
  comment: string;
};

export default function Testimonial({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  return (
    <div className="flex flex-col flex-[0_0_100%] sm:flex-[0_0_calc(100%/2_-_.5rem)] lg:flex-[0_0_calc(100%/3_-_.67rem)] items-center gap-2 border-2 p-6 rounded-xl text-center">
      <div className="relative bg-zinc-100 rounded-full w-20 overflow-hidden aspect-square">
        <Image
          src={testimonial.user.imageUrl}
          alt={testimonial.user.firstname + " " + testimonial.user.lastname}
          fill
          sizes="80px"
          className="object-cover"
        ></Image>
      </div>
      <h4 className="font-bold sm:text-lg">
        {testimonial.user.firstname + " " + testimonial.user.lastname}
      </h4>
      <Rating rating={testimonial.rating} />
      <p className="text-zinc-600">{testimonial.comment}</p>
    </div>
  );
}
