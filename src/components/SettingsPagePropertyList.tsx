"use client";
import React, { useEffect, useRef, useState } from "react";
import { PropertyType } from "./Property";
import Image from "next/image";
import Link from "next/link";

export default function SettingsPagePropertyList({
  properties,
}: {
  properties: PropertyType[];
}) {
  const [filter, setFilter] = useState("all");
  const [propertyType, setPropertyType] = useState("sale");
  const [sortBy, setSortBy] = useState("popular");
  const [dropdownId, setDropdownId] = useState("");

  useEffect(() => {
    function closeDropdown(e: MouseEvent) {
      const dropdowns = document.querySelectorAll(".dropdown");
      let isClickOutside = true;
      for (let index = 0; index < dropdowns.length; index++) {
        const dropdown = dropdowns[index];
        if (dropdown.contains(e.target as Node)) {
          isClickOutside = false;
          break;
        }
      }

      if (isClickOutside) {
        setDropdownId("");
      }
    }

    document.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  let filteredProperties = properties;

  // Filter Properties by published status
  if (filter === "published")
    filteredProperties = filteredProperties.filter(
      (property) => property.isPublished
    );
  if (filter === "draft")
    filteredProperties = filteredProperties.filter(
      (property) => !property.isPublished
    );

  // Filter Properties by property type
  if (propertyType === "rent")
    filteredProperties = filteredProperties.filter(
      (property) => property.isRent
    );
  if (propertyType === "sale")
    filteredProperties = filteredProperties.filter(
      (property) => !property.isRent
    );

  // Sort Properties
  if (sortBy === "popular")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort((a, b) => a.views - b.views);
  if (sortBy === "oldest")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
      );
  if (sortBy === "newest")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      );
  if (sortBy === "least-expensive")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) => new Date(a.price).getTime() - new Date(b.price).getTime()
      );
  if (sortBy === "most-expensive")
    filteredProperties = filteredProperties
      .map((_) => _)
      .sort(
        (a, b) => new Date(b.price).getTime() - new Date(a.price).getTime()
      );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex min-[424px]:flex-row flex-col flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2 group">
          <button
            onClick={() => setFilter("all")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              filter === "all"
                ? "bg-white shadow-[0_1px_6px_1px_#e0e0e0] text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-[0_1px_6px_1px_#e0e0e0] text-zinc-500"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("published")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              filter === "published"
                ? "bg-white shadow-[0_1px_6px_1px_#e0e0e0] text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-[0_1px_6px_1px_#e0e0e0] text-zinc-500"
            }`}
          >
            Published
          </button>
          <button
            onClick={() => setFilter("draft")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              filter === "draft"
                ? "bg-white shadow-[0_1px_6px_1px_#e0e0e0] text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-[0_1px_6px_1px_#e0e0e0] text-zinc-500"
            }`}
          >
            Draft
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPropertyType("rent")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              propertyType === "rent"
                ? "bg-white shadow-[0_1px_6px_1px_#e0e0e0] text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-[0_1px_6px_1px_#e0e0e0] text-zinc-500"
            }`}
          >
            For rent
          </button>
          <button
            onClick={() => setPropertyType("sale")}
            className={` p-2 rounded-md font-semibold duration-300 ${
              propertyType === "sale"
                ? "bg-white shadow-[0_1px_6px_1px_#e0e0e0] text-accent-green-100 "
                : "bg-[#f6f6f6] hover:shadow-[0_1px_6px_1px_#e0e0e0] text-zinc-500"
            }`}
          >
            For sale
          </button>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sort-by">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            name="sort-by"
            id="sort-by"
            className="border-2 p-1 sm:p-2 rounded-lg focus-visible:ring ring-accent-green-100"
          >
            <option value="popular">Popular</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="most-expensive">Most Expensive</option>
            <option value="least-expensive">Least Expensive</option>
          </select>
        </div>
      </div>
      <ul className="flex flex-col gap-6">
        {filteredProperties.map((property) => (
          <li
            key={property.id}
            className="flex sm:flex-row flex-col shadow-[0_0_5px_1px] shadow-zinc-200 rounded-lg aspect-[5]"
          >
            <div className="relative sm:flex-1 rounded-t-lg sm:rounded-[.5rem_0_0_.5rem] h-48 sm:h-full overflow-hidden">
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                sizes="512px"
                className="object-cover"
              ></Image>
              <p
                className={`top-2 left-2 absolute text-sm p-1 px-2 rounded-md text-white ${
                  property.isRent ? "bg-blue-500" : "bg-accent-green-100"
                }`}
              >
                {property.isRent ? "Rent" : "Sale"}
              </p>
            </div>
            <div className="relative flex flex-col flex-[1.5] gap-4 p-3 sm:p-6">
              <div className="flex flex-col justify-between gap-1">
                <Link
                  href={`/properties/${property.id}`}
                  className="font-semibold text-lg hover:text-accent-green-100 duration-300"
                >
                  {property.name}
                </Link>
                <p className="text-zinc-600">
                  {property.location.city} {property.location.state}
                </p>
                <p className="font-bold text-lg">
                  ₦{property.price.toLocaleString()}
                  {property.isRent ? "/Mo" : null}
                </p>
              </div>
              <hr className="border-zinc-100 mt-auto" />
              <div className="flex gap-4">
                <p className="flex items-center gap-1">
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
                  {property.beds}
                </p>
                <p className="flex items-center gap-1">
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
                  {property.bath}
                </p>
                <p className="flex items-center gap-1">
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
                  {property.area}
                </p>
              </div>
              <div className="top-2 right-2 absolute flex flex-col items-end gap-2 dropdown">
                <button
                  className="shadow-[0_2px_6px_0px] shadow-zinc-200 hover:shadow-[0_2px_6px_3px] hover:shadow-zinc-200 p-2 rounded-full duration-300 group"
                  onClick={() => {
                    if (dropdownId === property.id) {
                      setDropdownId("");
                    } else {
                      setDropdownId(property.id);
                    }
                  }}
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
                        d="M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z"
                        fill="#000000"
                        className="group-hover:fill-accent-green-100 duration-300 fill-zinc-700"
                      ></path>
                      <path
                        d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                        fill="#000000"
                        className="group-hover:fill-accent-green-100 duration-300 fill-zinc-700"
                      ></path>
                      <path
                        d="M12 22.5C13.3807 22.5 14.5 21.3807 14.5 20C14.5 18.6193 13.3807 17.5 12 17.5C10.6193 17.5 9.5 18.6193 9.5 20C9.5 21.3807 10.6193 22.5 12 22.5Z"
                        fill="#000000"
                        className="group-hover:fill-accent-green-100 duration-300 fill-zinc-700"
                      ></path>
                    </g>
                  </svg>
                </button>
                <div
                  className={`flex flex-col bg-white shadow-[0_0_6px_1px] shadow-zinc-200 p-1 rounded-md w-36${
                    dropdownId === property.id
                      ? "visible opacity-100 duration-300"
                      : "invisible opacity-0"
                  }`}
                >
                  <Link
                    href={`/edit/${property.id}`}
                    className="flex items-center gap-2 p-2 font-semibold text-sm sm:text-base hover:text-blue-500 duration-300 group"
                  >
                    <svg
                      height={20}
                      width={20}
                      className="w-[14px] sm:w-[18px] h-[14px] sm:h-[18px]"
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
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                          stroke="#000000"
                          className="group-hover:stroke-blue-500 duration-300 stroke-zinc-700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 22786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                          stroke="#000000"
                          className="group-hover:stroke-blue-500 duration-300 stroke-zinc-700"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    Edit
                  </Link>
                  <button className="flex items-center gap-2 p-2 font-semibold text-left text-sm sm:text-base hover:text-red-500 duration-300 group">
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
                          className="group-hover:stroke-red-500 duration-300 stroke-zinc-700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M14 12V17"
                          stroke="#000000"
                          className="group-hover:stroke-red-500 duration-300 stroke-zinc-700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M4 7H20"
                          stroke="#000000"
                          className="group-hover:stroke-red-500 duration-300 stroke-zinc-700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                          stroke="#000000"
                          className="group-hover:stroke-red-500 duration-300 stroke-zinc-700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                          stroke="#000000"
                          className="group-hover:stroke-red-500 duration-300 stroke-zinc-700"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
