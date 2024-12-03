"use client";
import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const testimonials = [
  {
    id: "1",
    user: {
      firstname: "Chidi",
      lastname: "Okeke",
      imageUrl: "/profile-pic.jpg",
    },
    rating: 5,
    comment:
      "The process of buying my first home was smooth and stress-free, thanks to their professional team!",
  },
  {
    id: "2",
    user: {
      firstname: "Amina",
      lastname: "Bello",
      imageUrl: "/profile-pic-2.jpg",
    },
    rating: 4,
    comment:
      "Excellent service! They helped me find the perfect apartment in a great neighborhood.",
  },
  {
    id: "3",
    user: {
      firstname: "Emeka",
      lastname: "Ibe",
      imageUrl: "/profile-pic-3.jpg",
    },
    rating: 5,
    comment:
      "Very knowledgeable agents who guided me through the entire selling process effortlessly.",
  },
  {
    id: "4",
    user: {
      firstname: "Funmi",
      lastname: "Adeyemi",
      imageUrl: "/profile-pic-4.jpg",
    },
    rating: 4,
    comment:
      "They were incredibly helpful in finding a rental property that met all my needs.",
  },
  {
    id: "5",
    user: {
      firstname: "Tunde",
      lastname: "Olawale",
      imageUrl: "/profile-pic-5.jpg",
    },
    rating: 5,
    comment:
      "Fantastic experience! Their team was professional and found the ideal property for my investment.",
  },
];

export default function CustomerReviews() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const reviewPerView = windowWidth > 1024 ? 3 : windowWidth > 640 ? 2 : 1;
  const padding = (currentIndex * 1) / reviewPerView;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function changeScreenWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", changeScreenWidth);

    return () => window.removeEventListener("resize", changeScreenWidth);
  }, []);

  function handleNext() {
    if (-currentIndex >= testimonials.length - reviewPerView) return;
    setcurrentIndex((curr) => curr - 1);
  }

  function handlePrev() {
    if (currentIndex >= 0) return;
    setcurrentIndex((curr) => curr + 1);
  }

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-2xl text-center">Our Happy Customers</h3>
      <p className="mx-auto max-w-[40rem] text-center mb-1 text-sm text-zinc-500">
        What our customers say about Estate Haven
      </p>
      <div className="overflow-hidden">
        <div
          className="flex gap-4 duration-200"
          style={{
            transform: `translateX(calc(${(
              (currentIndex * 100) /
              reviewPerView
            ).toFixed(1)}% + ${padding}rem)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <button
          onClick={handlePrev}
          className="hover:border-zinc-300 group hover:bg-zinc-100 p-2 border rounded-full width-10 duration-200 aspect-square"
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
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.2071 6.29289C15.5976 6.68342 15.5976 7.31658 15.2071 7.70711L10.9142 12L15.2071 16.2929C15.5976 16.6834 15.5976 17.3166 15.2071 17.7071C14.8166 18.0976 14.1834 18.0976 13.7929 17.7071L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929L13.7929 6.29289C14.1834 5.90237 14.8166 5.90237 15.2071 6.29289Z"
                fill="#000000"
                className="fill-zinc-600 group-hover:fill-zinc-800 duration-200"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="hover:border-zinc-300 group hover:bg-zinc-100 p-2 border rounded-full width-10 duration-200 aspect-square"
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
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
                fill="#000000"
                className="fill-zinc-600 group-hover:fill-zinc-800 duration-200"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
