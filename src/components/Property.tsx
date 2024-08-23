"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AgentType } from "./AgentPropertyOffers";

export type PropertyType = {
  _id: string;
  name: string;
  streetAddress: string;
  yearBuilt: string;
  parkingSpots: number;
  description: string;
  images: string[];
  price: number;
  city: string;
  state: string;
  type: string;
  agent: AgentType;
  views: number;
  beds: number;
  bath: number;
  area: number;
  amenities: string[];
  category: "rent" | "sale";
  petsAllowed: boolean;
  dateCreated: string;
  isPublished: boolean;
};

export default function Property({ property }: { property: PropertyType }) {
  function handleLike() {}

  return (
    <div className="flex flex-col gap-2 shadow-lg p-2 rounded-xl duration-300 overflow-hidden">
      <div className="relative rounded-lg overflow-hidden aspect-[1.5] group">
        <button className="top-[50%] left-2 z-10 absolute bg-white/40 hover:bg-white/70 backdrop-blur-sm p-2 sm:p-3 rounded-full -translate-x-[150%] -translate-y-[50%] [@media(pointer:_coarse)]:translate-x-0 group-hover:translate-x-0 duration-300">
          <svg
            height={20}
            width={20}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </button>
        <Image
          src={property.images[0]}
          alt="property image"
          fill
          sizes="600px"
          className="object-cover"
        ></Image>
        <button className="top-[50%] right-2 absolute bg-white/40 hover:bg-white/70 backdrop-blur-sm p-2 sm:p-3 rounded-full -translate-y-[50%] translate-x-[150%] [@media(pointer:_coarse)]:translate-x-0 group-hover:translate-x-0 duration-300">
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </button>
        <button
          className="top-2 right-2 absolute flex-center bg-white p-1 rounded-full"
          onClick={handleLike}
        >
          <svg
            height={24}
            width={24}
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#3b9152"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <Link
        href={`/properties/${property._id}`}
        className="flex flex-col group"
      >
        <div className="flex justify-between items-center">
          <h4 className="group-hover:text-accent-green-200 font-bold duration-300">
            {property.name}
          </h4>
        </div>
        <p className="font-semibold text-zinc-500">
          {property.city}, {property.state}
        </p>
        <p className="font-semibold text-zinc-500">{property.type}</p>
        <h5 className="mt-1 font-bold sm:text-lg">
          ₦{property.price.toLocaleString()}
          {property.category === "rent" ? "/Mo" : ""}
        </h5>
        <div className="flex justify-between items-center mt-2 px-2 p-2 pt-3 border-t">
          <p className="flex items-center gap-2 font-semibold">
            <span className="flex-center p-1 border rounded-full w-8 h-8">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6C2 5.44772 1.55228 5 1 5C0.447715 5 0 5.44772 0 6V18C0 18.5523 0.447715 19 1 19C1.55228 19 2 18.5523 2 18V16H22V18C22 18.5523 22.4477 19 23 19C23.5523 19 24 18.5523 24 18V10C24 7.79086 22.2091 6 20 6H13C11.8954 6 11 6.89543 11 8V14H2V6ZM22 10V14H13V8H20C21.1046 8 22 8.89543 22 10Z"
                    fill="#3b9152"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 13C8.433 13 10 11.433 10 9.5C10 7.567 8.433 6 6.5 6C4.567 6 3 7.567 3 9.5C3 11.433 4.567 13 6.5 13ZM6.5 11.0799C5.62742 11.0799 4.92006 10.3726 4.92006 9.5C4.92006 8.62742 5.62742 7.92006 6.5 7.92006C7.37258 7.92006 8.07994 8.62742 8.07994 9.5C8.07994 10.3726 7.37258 11.0799 6.5 11.0799Z"
                    fill="#3b9152"
                  ></path>
                </g>
              </svg>
            </span>
            {property.beds}
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <span className="flex-center p-1 border rounded-full w-8 h-8">
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
                    d="M3 13.0827C3 13.0059 3 12.9675 3.00211 12.9351C3.0347 12.4339 3.43395 12.0347 3.93511 12.0021C3.96752 12 4.00591 12 4.08268 12H19.9173C19.9941 12 20.0325 12 20.0649 12.0021C20.5661 12.0347 20.9653 12.4339 20.9979 12.9351C21 12.9675 21 13.0059 21 13.0827C21 13.4784 21 13.6762 20.9859 13.8977C20.7773 17.1854 17.983 20.0867 14.7053 20.4186C14.4845 20.441 14.3558 20.4458 14.0982 20.4555C13.364 20.4831 12.6493 20.5 12 20.5C11.3507 20.5 10.636 20.4831 9.90183 20.4555C9.64425 20.4458 9.51545 20.441 9.29467 20.4186C6.01705 20.0867 3.22272 17.1854 3.01406 13.8977C3 13.6762 3 13.4784 3 13.0827Z"
                    stroke="#298edb"
                    strokeWidth="1.5"
                  ></path>
                  <path
                    d="M6 20L5 22"
                    stroke="#298edb"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M18 20L19 22"
                    stroke="#298edb"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M2 12H22"
                    stroke="#298edb"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM7.59973 3.49934L8.29609 3.22079L8.29609 3.22079L7.59973 3.49934ZM7.97885 4.44713L8.30713 5.12147L7.97885 4.44713ZM6.36212 6.19232L7.05701 6.47451L6.36212 6.19232ZM10.577 4.37783L10.2824 5.06753L10.577 4.37783ZM6.34559 8.74156L5.6478 9.01651C5.72221 9.20535 5.86997 9.35596 6.05735 9.43396C6.24473 9.51197 6.45572 9.51069 6.64215 9.43044L6.34559 8.74156ZM12.3063 6.17548L12.6029 6.86436C12.975 6.70417 13.1526 6.27744 13.0041 5.90053L12.3063 6.17548ZM3.75 13V4.38516H2.25V13H3.75ZM5.38516 2.75C6.05379 2.75 6.65506 3.15708 6.90338 3.77788L8.29609 3.22079C7.81998 2.0305 6.66715 1.25 5.38516 1.25V2.75ZM3.75 4.38516C3.75 3.48209 4.48209 2.75 5.38516 2.75V1.25C3.65366 1.25 2.25 2.65366 2.25 4.38516H3.75ZM6.90338 3.77788L7.2825 4.72568L8.67521 4.16859L8.29609 3.22079L6.90338 3.77788ZM7.04337 8.46661C6.80167 7.85321 6.78638 7.14092 7.05701 6.47451L5.66723 5.91014C5.24692 6.94515 5.26959 8.05665 5.6478 9.01651L7.04337 8.46661ZM12.0098 5.4866L6.04903 8.05268L6.64215 9.43044L12.6029 6.86436L12.0098 5.4866ZM10.2824 5.06753C10.9039 5.33307 11.367 5.83741 11.6086 6.45043L13.0041 5.90053C12.6258 4.94029 11.887 4.12189 10.8717 3.68813L10.2824 5.06753ZM7.05701 6.47451C7.31118 5.8486 7.76827 5.3838 8.30713 5.12147L7.65058 3.77279C6.78337 4.19496 6.06253 4.93671 5.66723 5.91014L7.05701 6.47451ZM8.30713 5.12147C8.91452 4.82579 9.62506 4.78672 10.2824 5.06753L10.8717 3.68813C9.79386 3.22768 8.62874 3.29661 7.65058 3.77279L8.30713 5.12147Z"
                    fill="#298edb"
                  ></path>
                </g>
              </svg>
            </span>
            {property.bath}
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <span className="flex-center p-1 border rounded-full w-8 h-8">
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9928 6.6967L17.1747 3.51472L20.3567 6.6967L19.2961 7.75736L17.9247 6.38604L17.9247 17.614L19.2961 16.2426L20.3567 17.3033L17.1747 20.4853L13.9928 17.3033L15.0534 16.2426L16.4247 17.614V6.38604L15.0534 7.75736L13.9928 6.6967Z"
                    fill="#d92708"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 4.5L4.5 3.75H12L12.75 4.5V19.5L12 20.25H4.5L3.75 19.5V4.5ZM5.25 5.25V18.75H11.25V17.25H8.25V15.75H11.25V14.25H8.25V12.75H11.25V11.25H7.5V9.75H11.25V8.25H8.25V6.75H11.25V5.25H5.25Z"
                    fill="#d92708"
                  ></path>
                </g>
              </svg>
            </span>
            {property.area.toLocaleString()}sqft
          </p>
        </div>
      </Link>
    </div>
  );
}
