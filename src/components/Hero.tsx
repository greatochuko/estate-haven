import React from "react";
import heroImage from "../../public/hero-image.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative mb-10">
      <div className="relative flex bg-zinc-100 rounded-xl w-full max-h-[30rem] overflow-hidden aspect-[1.5] sm:aspect-video">
        <div className="top-0 left-o absolute w-full h-full">
          <div className="flex flex-col justify-center gap-2 p-10 sm:w-[50%] h-full">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Find a modern property that suits you
            </h2>
            <p className="font-semibold text-sm text-zinc-500 md:text-base lg:text-lg">
              Our platform offers the best opportunity to find the best real
              estate possible. We can make this process easy and comfortable
            </p>
            <button className="bg-accent-green-100 px-4 p-2 rounded-lg w-fit font-bold text-sm text-white sm:text-base">
              Add Listing
            </button>
          </div>
        </div>
        <Image
          src={heroImage}
          alt="Hero image"
          className="ml-auto w-[50%] object-cover"
        ></Image>
      </div>
      <form className="bottom-0 left-[50%] absolute flex justify-between items-center gap-4 bg-white shadow-[0_0_5px] shadow-zinc-200 mx-auto p-8 rounded-2xl w-[90%] max-w-4xl -translate-x-[50%] translate-y-[50%]">
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter your city name"
            className="border-[3px] p-2 rounded-md focus-visible:ring ring-accent-green-100"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="property-type">
            Property Type
          </label>
          <select
            name="property-type"
            id="property-type"
            className="border-[3px] p-2 rounded-md focus-visible:ring ring-accent-green-100"
          >
            <option value="apartment">Apartment</option>
            <option value="bumgalow">Bungalow</option>
            <option value="duplex">Duplex</option>
            <option value="town house">Town house</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              name="from-price"
              id="from-price"
              placeholder="0"
              className="border-[3px] p-2 rounded-md w-28 focus-visible:ring ring-accent-green-100"
            />
            -
            <input
              placeholder="any"
              type="number"
              name="to-price"
              id="to-price"
              className="border-[3px] p-2 rounded-md w-28 focus-visible:ring ring-accent-green-100"
            />
          </div>
        </div>
        <button className="bg-accent-green-100 hover:bg-accent-green-200 p-4 rounded-full duration-300">
          <svg
            width={30}
            height={30}
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
                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </form>
    </div>
  );
}
