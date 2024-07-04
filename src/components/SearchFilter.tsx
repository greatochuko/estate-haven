import React, { useState } from "react";
import { locations } from "./PropertiesByLocationSection";
import { PropertyType } from "./Property";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchFilter({
  properties,
  showFilter,
  closeModal,
}: {
  properties: PropertyType[];
  showFilter: boolean;
  closeModal: () => void;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [city, setCity] = useState(
    searchParams.get("city")?.toLowerCase() || "all"
  );
  const [propertyTypes, setPropertyTypes] = useState<string[]>(
    searchParams.get("propertyTypes")?.split("-") || [
      "house",
      "apartment",
      "duplex",
      "studio",
    ]
  );
  const [listingType, setListingType] = useState(
    searchParams.get("listingType") || ""
  );
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  const maxBeds = Math.max(...properties.map((property) => property.beds));
  const [minBedroom, setMinBedroom] = useState(
    Number(searchParams.get("minBedroom")) || 0
  );
  const [maxBedroom, setMaxBedroom] = useState(
    Number(searchParams.get("maxBedroom")) || maxBeds
  );

  const maxBath = Math.max(...properties.map((property) => property.bath));
  const [minBathroom, setMinBathroom] = useState(
    Number(searchParams.get("minBathroom")) || 0
  );
  const [maxBathroom, setMaxBathroom] = useState(
    Number(searchParams.get("maxBathroom")) || maxBath
  );

  function toggleAddType(type: string) {
    if (propertyTypes.includes(type)) {
      setPropertyTypes((curr) => curr.filter((t) => t !== type));
    } else {
      setPropertyTypes((curr) => [...curr, type]);
    }
  }

  function toggleListingType(type: string) {
    if (listingType === type) {
      setListingType("");
    } else {
      setListingType(type);
    }
  }

  function resetFilters() {
    setCity("all");
    setPropertyTypes(["house", "apartment", "duplex", "studio"]);
    setListingType("");
    setMinPrice("");
    setMaxPrice("");
    setMinBedroom(0);
    setMaxBedroom(maxBeds);
    setMinBathroom(0);
    setMaxBathroom(maxBath);
    applyFilters();
  }

  function applyFilters() {
    const newSearchParams = new URLSearchParams(searchParams);

    city !== "all" && newSearchParams.set("city", city);
    propertyTypes.length !== 4 &&
      newSearchParams.set("propertyTypes", propertyTypes.join("-"));
    listingType && newSearchParams.set("listingType", listingType);
    minPrice && newSearchParams.set("minPrice", minPrice);
    maxPrice && newSearchParams.set("maxPrice", maxPrice);
    minBedroom && newSearchParams.set("minBedroom", minBedroom.toString());
    maxBedroom !== maxBeds &&
      newSearchParams.set("maxBedroom", maxBedroom.toString());
    minBathroom && newSearchParams.set("minBathroom", minBathroom.toString());
    maxBathroom !== maxBath &&
      newSearchParams.set("maxBathroom", maxBathroom.toString());

    router.push(`/properties?${newSearchParams.toString()}`);
  }

  return (
    <div
      onClick={closeModal}
      className={`top-0 left-0 z-20 lg:static fixed bg-black/50 lg:bg-transparent lg:w-fit w-full duration-300 mt-2 ${
        showFilter ? "visible opacity-100" : "invisible opacity-0"
      } lg:visible lg:opacity-100`}
    >
      <div
        className={`flex flex-col gap-6 bg-white p-6 lg:p-0 w-80 lg:w-[16rem] h-full lg:h-fit lg:overflow-auto overflow-y-scroll duration-300 ${
          showFilter ? "" : "-translate-x-[120%]"
        } lg:translate-x-0 `}
      >
        <div className="flex justify-between border-zinc-100 pb-1 border-b-2">
          <h3 className="font-bold">Filters</h3>
          <button
            onClick={resetFilters}
            className="font-semibold text-zinc-500 hover:text-red-500 duration-300"
          >
            Reset Filters
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="font-semibold">
            City
          </label>
          <select
            name="city"
            id="city"
            className="p-2 border rounded-md"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="all">All</option>
            {locations.map((location) => (
              <option value={location.city.toLowerCase()} key={location.id}>
                {location.city}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">Property Type</h4>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="house"
              id="house"
              className="hidden"
              checked={propertyTypes.includes("house")}
              onChange={() => toggleAddType("house")}
            />
            <label htmlFor="house" className="flex items-center gap-2">
              <span
                className={`flex-center border-accent-green-100 ${
                  propertyTypes.includes("house")
                    ? "bg-accent-green-100"
                    : "bg-white"
                } border rounded-[4px] w-4 h-4`}
              >
                <svg
                  height={16}
                  width={16}
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
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
              House
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="apartment"
              id="apartment"
              className="hidden"
              checked={propertyTypes.includes("apartment")}
              onChange={() => toggleAddType("apartment")}
            />
            <label htmlFor="apartment" className="flex items-center gap-2">
              <span
                className={`flex-center border-accent-green-100 ${
                  propertyTypes.includes("apartment")
                    ? "bg-accent-green-100"
                    : "bg-white"
                } border rounded-[4px] w-4 h-4`}
              >
                <svg
                  height={16}
                  width={16}
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
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
              Apartment
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="duplex"
              id="duplex"
              className="hidden"
              checked={propertyTypes.includes("duplex")}
              onChange={() => toggleAddType("duplex")}
            />
            <label htmlFor="duplex" className="flex items-center gap-2">
              <span
                className={`flex-center border-accent-green-100 ${
                  propertyTypes.includes("duplex")
                    ? "bg-accent-green-100"
                    : "bg-white"
                } border rounded-[4px] w-4 h-4`}
              >
                <svg
                  height={16}
                  width={16}
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
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
              Duplex
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="studio"
              id="studio"
              className="hidden"
              checked={propertyTypes.includes("studio")}
              onChange={() => toggleAddType("studio")}
            />
            <label htmlFor="studio" className="flex items-center gap-2">
              <span
                className={`flex-center border-accent-green-100 ${
                  propertyTypes.includes("studio")
                    ? "bg-accent-green-100"
                    : "bg-white"
                } border rounded-[4px] w-4 h-4`}
              >
                <svg
                  height={16}
                  width={16}
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
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#fff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
              Studio
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="font-semibold">For</p>
            <button
              onClick={() => toggleListingType("sale")}
              className={`${
                listingType === "sale"
                  ? "bg-accent-green-100 text-white"
                  : "bg-white text-accent-green-100"
              } border border-accent-green-100 px-2 p-1 rounded-md font-semibold duration-100`}
            >
              Sale
            </button>
            <button
              onClick={() => toggleListingType("rent")}
              className={`${
                listingType === "rent"
                  ? "bg-accent-green-100 text-white"
                  : "bg-white text-accent-green-100"
              } border border-accent-green-100 px-2 p-1 rounded-md font-semibold duration-100`}
            >
              Rent
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <label htmlFor="min-price" className="font-semibold">
                Min Price
              </label>
              <div className="relative">
                <span className="top-[50%] left-2 absolute -translate-y-[50%]">
                  ₦
                </span>
                <input
                  type="text"
                  name="min-price"
                  id="min-price"
                  value={minPrice ? Number(minPrice).toLocaleString() : ""}
                  onChange={(e) => {
                    const oldValue = e.target.value.split(",").join("");
                    if (isNaN(Number(oldValue))) return;
                    setMinPrice(e.target.value.split(",").join(""));
                  }}
                  placeholder="Any"
                  className="p-2 pl-5 border rounded-md w-full"
                />
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <label htmlFor="max-price" className="font-semibold">
                Max Price
              </label>
              <div className="relative">
                <span className="top-[50%] left-2 absolute -translate-y-[50%]">
                  ₦
                </span>
                <input
                  type="text"
                  name="max-price"
                  id="max-price"
                  value={maxPrice ? Number(maxPrice).toLocaleString() : ""}
                  onChange={(e) => {
                    const oldValue = e.target.value.split(",").join("");
                    if (isNaN(Number(oldValue))) return;
                    setMaxPrice(e.target.value.split(",").join(""));
                  }}
                  placeholder="Any"
                  className="p-2 pl-5 border rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="font-semibold">Bedroom</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <label htmlFor="min-bedroom" className="font-semibold">
                Min
              </label>
              <select
                name="min-bedroom"
                id="min-bedroom"
                className="p-2 border rounded-md"
                value={minBedroom}
                onChange={(e) => setMinBedroom(Number(e.target.value))}
              >
                {Array.from({ length: maxBeds + 1 }).map((_, i) => (
                  <option value={i} key={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <label htmlFor="max-bedroom" className="font-semibold">
                Max
              </label>
              <select
                name="max-bedroom"
                id="max-bedroom"
                className="p-2 border rounded-md"
                value={maxBedroom}
                onChange={(e) => setMaxBedroom(Number(e.target.value))}
              >
                {Array.from({ length: maxBeds + 1 }).map((_, i) =>
                  i >= minBedroom ? (
                    <option value={i} key={i}>
                      {i}
                    </option>
                  ) : null
                )}
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="mt-4 font-semibold">Bathroom</p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <label htmlFor="min-bathroom" className="font-semibold">
                Min
              </label>
              <select
                name="min-bathroom"
                id="min-bathroom"
                className="p-2 border rounded-md"
                value={minBathroom}
                onChange={(e) => setMinBathroom(Number(e.target.value))}
              >
                {Array.from({ length: maxBath + 1 }).map((_, i) => (
                  <option value={i} key={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <label htmlFor="max-bathroom" className="font-semibold">
                Max
              </label>
              <select
                name="max-bathroom"
                id="max-bathroom"
                className="p-2 border rounded-md"
                value={maxBathroom}
                onChange={(e) => setMaxBathroom(Number(e.target.value))}
              >
                {Array.from({ length: maxBath + 1 }).map((_, i) =>
                  i >= minBathroom ? (
                    <option value={i} key={i}>
                      {i}
                    </option>
                  ) : null
                )}
              </select>
            </div>
          </div>
        </div>
        <button
          onClick={applyFilters}
          className="flex-1 bg-accent-green-100 hover:bg-accent-green-200 p-2 rounded-md font-bold text-white duration-300"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
