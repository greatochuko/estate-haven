"use client";
import React, { useState } from "react";
import heroImage from "../../public/hero-image.png";
import Image from "next/image";
import Link from "next/link";
import { locations } from "./PropertiesByLocationSection";
import { useRouter } from "next/navigation";
import { UserType } from "./AgentPropertyOffers";

export default function Hero({ user }: { user: UserType | null }) {
  const router = useRouter();

  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("all");
  const [type, setType] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const searchParams = new URLSearchParams();

    category && category !== "all"
      ? searchParams.set("category", category)
      : searchParams.delete("category");
    location && location !== "all"
      ? searchParams.set("state", location)
      : searchParams.delete("state");
    type && type !== "all"
      ? searchParams.set("type", type)
      : searchParams.delete("type");
    minPrice
      ? searchParams.set("minPrice", minPrice)
      : searchParams.delete("minPrice");
    maxPrice
      ? searchParams.set("maxPrice", maxPrice)
      : searchParams.delete("maxPrice");

    const url = searchParams.toString()
      ? `/properties?${searchParams.toString()}`
      : `/properties`;

    router.push(url);
  }
  return (
    <div className="relative mb-10">
      <div className="relative flex bg-zinc-100 rounded-xl w-full min-h-80 max-h-[30rem] overflow-hidden aspect-[1.2] sm:aspect-[1.5] lg:aspect-video">
        <div className="top-0 left-o absolute bg-white/50 sm:bg-transparent w-full h-full">
          <div className="flex flex-col justify-center gap-2 p-6 md:p-10 sm:w-[60%] h-full">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Find a modern property that suits you
            </h2>
            <p className="font-semibold text-sm sm:text-zinc-500 md:text-base lg:text-lg">
              Our platform offers the best opportunity to find the best real
              estate possible. We make this process easy and comfortable
            </p>
            {user && (
              <Link
                href={"/properties/new"}
                className="bg-accent-green-100 px-4 p-2 rounded-md w-fit font-bold text-sm text-white sm:text-base"
              >
                Add Listing
              </Link>
            )}
          </div>
        </div>
        <Image
          src={heroImage}
          alt="Hero image"
          className="ml-auto w-[50%] object-cover"
        ></Image>
      </div>
      <form
        onSubmit={handleSearch}
        className="bottom-0 left-[50%] absolute flex justify-between items-center gap-4 bg-white shadow-[0_0_5px] shadow-zinc-200 mx-auto p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl w-[90%] max-w-5xl text-zinc-600 -translate-x-[50%] translate-y-[50%]"
      >
        <div className="sm:flex flex-col flex-1 gap-2 hidden">
          <label className="font-semibold" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              if (e.target.value === "all") {
                setMinPrice("");
                setMaxPrice("");
              }
            }}
            className="border-2 p-2 rounded-md focus-visible:ring ring-accent-green-100"
          >
            <option value="all">All</option>
            <option value="rent">For rent</option>
            <option value="sale">For sale</option>
          </select>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <label className="font-semibold" htmlFor="location">
            Location
          </label>
          <select
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-2 p-2 rounded-md focus-visible:ring ring-accent-green-100"
          >
            <option value="all">All</option>
            {locations.map((location) => (
              <option key={location.state} value={location.state.toLowerCase()}>
                {location.state}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:flex flex-col flex-1 gap-2 hidden">
          <label className="font-semibold" htmlFor="property-type">
            Property Type
          </label>
          <select
            name="property-type"
            id="property-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border-2 p-2 rounded-md focus-visible:ring ring-accent-green-100"
          >
            <option value="all">All</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="duplex">Duplex</option>
            <option value="town house">Town house</option>
          </select>
        </div>

        <div className="lg:flex flex-col flex-1 gap-2 hidden">
          <label className="font-semibold">Price Range</label>
          <div className="flex items-center gap-2">
            <input
              disabled={category === "all"}
              title={category === "all" ? "Please select a category" : ""}
              type="number"
              name="minPrice"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="0"
              className="border-2 p-2 rounded-md focus-visible:ring ring-accent-green-100 w-28"
            />
            -
            <input
              disabled={category === "all"}
              title={category === "all" ? "Please select a category" : ""}
              placeholder="any"
              type="number"
              name="maxPrice"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border-2 p-2 rounded-md focus-visible:ring ring-accent-green-100 w-28"
            />
          </div>
        </div>

        <button className="bg-accent-green-100 hover:bg-accent-green-200 p-2 sm:p-4 rounded-full duration-300">
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
