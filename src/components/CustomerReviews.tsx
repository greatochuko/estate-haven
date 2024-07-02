"use client";
import React, { useEffect, useState } from "react";
import Review from "./Review";

const reviews = [
  {
    id: "1",
    user: { firstname: "John", lastname: "Doe", imageUrl: "/profile-pic.jpg" },
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est corrupti mollitia accusamus voluptatum dolorum ea expedita rerum quisquam? Soluta, facere distinctio placeat rem iusto non quibusdam iste. Quidem, et?",
  },
  {
    id: "2",
    user: { firstname: "John", lastname: "Doe", imageUrl: "/profile-pic.jpg" },
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est corrupti mollitia accusamus voluptatum dolorum ea expedita rerum quisquam? Soluta, facere distinctio placeat rem iusto non quibusdam iste. Quidem, et?",
  },
  {
    id: "3",
    user: { firstname: "John", lastname: "Doe", imageUrl: "/profile-pic.jpg" },
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est corrupti mollitia accusamus voluptatum dolorum ea expedita rerum quisquam? Soluta, facere distinctio placeat rem iusto non quibusdam iste. Quidem, et?",
  },
  {
    id: "4",
    user: { firstname: "John", lastname: "Doe", imageUrl: "/profile-pic.jpg" },
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est corrupti mollitia accusamus voluptatum dolorum ea expedita rerum quisquam? Soluta, facere distinctio placeat rem iusto non quibusdam iste. Quidem, et?",
  },
  {
    id: "5",
    user: { firstname: "John", lastname: "Doe", imageUrl: "/profile-pic.jpg" },
    rating: 4,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est corrupti mollitia accusamus voluptatum dolorum ea expedita rerum quisquam? Soluta, facere distinctio placeat rem iusto non quibusdam iste. Quidem, et?",
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
    if (-currentIndex >= reviews.length - reviewPerView) return;
    setcurrentIndex((curr) => curr - 1);
  }

  function handlePrev() {
    if (currentIndex >= 0) return;
    setcurrentIndex((curr) => curr + 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-center text-xl sm:text-2xl">
        Our Happy Customers
      </h3>
      <p className="text-center">What our customers say about Estate Haven</p>
      <div className="overflow-hidden">
        <div
          className="flex gap-4 duration-300"
          style={{
            transform: `translateX(calc(${(
              (currentIndex * 100) /
              reviewPerView
            ).toFixed(1)}% + ${padding}rem)`,
          }}
        >
          {reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <button
          onClick={handlePrev}
          className="hover:border-zinc-300 bg-zinc-100 hover:bg-zinc-200 p-2 border rounded-full width-10 duration-300 aspect-square"
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
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="hover:border-zinc-300 bg-zinc-100 hover:bg-zinc-200 p-2 border rounded-full width-10 duration-300 aspect-square"
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
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
