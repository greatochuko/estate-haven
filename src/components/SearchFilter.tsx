import React, { useState } from "react";
import { locations } from "./PropertiesByLocationSection";
import { PropertyType } from "./Property";
import { useRouter } from "next/navigation";
import { PropertySearchParams } from "@/app/properties/page";

export default function SearchFilter({
  properties,
  showFilter,
  closeModal,
  searchParams,
}: {
  properties: PropertyType[];
  showFilter: boolean;
  closeModal: () => void;
  searchParams: PropertySearchParams;
}) {
  const [locationState, setLocationState] = useState(
    searchParams.state?.toLowerCase().split("-").join(" ") || "all"
  );
  const cities = locations.find(
    (location) => location.state.toLowerCase() === locationState.toLowerCase()
  )?.cities;

  const router = useRouter();
  const [city, setCity] = useState(
    searchParams.city?.toLowerCase().split("-").join(" ") || "all"
  );

  const [propertyTypes, setPropertyTypes] = useState<string[]>(
    searchParams.propertyTypes?.split("-") || [
      "house",
      "apartment",
      "duplex",
      "studio",
    ]
  );
  const [category, setCategory] = useState(searchParams.category || "all");
  const [minPrice, setMinPrice] = useState(searchParams.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.maxPrice || "");

  const maxBeds = Math.max(...properties.map((property) => property.beds));
  const [minBedroom, setMinBedroom] = useState(
    Number(searchParams.minBedroom) || 0
  );
  const [maxBedroom, setMaxBedroom] = useState(
    Number(searchParams.maxBedroom) || maxBeds
  );

  const maxBath = Math.max(...properties.map((property) => property.bath));
  const [minBathroom, setMinBathroom] = useState(
    Number(searchParams.minBathroom) || 0
  );
  const [maxBathroom, setMaxBathroom] = useState(
    Number(searchParams.maxBathroom) || maxBath
  );

  function toggleAddType(type: string) {
    if (propertyTypes.includes(type)) {
      setPropertyTypes((curr) => curr.filter((t) => t !== type));
    } else {
      setPropertyTypes((curr) => [...curr, type]);
    }
  }

  function resetFilters() {
    setCity("all");
    setPropertyTypes(["house", "apartment", "duplex", "studio"]);
    setCategory("all");
    setMinPrice("");
    setMaxPrice("");
    setMinBedroom(0);
    setMaxBedroom(maxBeds);
    setMinBathroom(0);
    setMaxBathroom(maxBath);
    router.push("/properties");
  }

  function applyFilters() {
    const newSearchParams = new URLSearchParams(searchParams);

    locationState !== "all"
      ? newSearchParams.set("state", locationState)
      : newSearchParams.delete("state");
    city !== "all"
      ? newSearchParams.set("city", city)
      : newSearchParams.delete("city");
    propertyTypes.length < 4
      ? newSearchParams.set("propertyTypes", propertyTypes.join("-"))
      : newSearchParams.delete("propertyTypes");
    category !== "all"
      ? newSearchParams.set("category", category)
      : newSearchParams.delete("category");
    minPrice && newSearchParams.set("minPrice", minPrice);
    maxPrice && newSearchParams.set("maxPrice", maxPrice);
    minBedroom && newSearchParams.set("minBedroom", minBedroom.toString());
    maxBedroom !== maxBeds &&
      newSearchParams.set("maxBedroom", maxBedroom.toString());
    minBathroom && newSearchParams.set("minBathroom", minBathroom.toString());
    maxBathroom !== maxBath &&
      newSearchParams.set("maxBathroom", maxBathroom.toString());

    router.push(`/properties?${newSearchParams.toString()}`);
    closeModal();
  }

  return (
    <div
      onClick={closeModal}
      className={`top-0 left-0 z-40 lg:z-20 lg:static fixed bg-black/50 lg:bg-transparent lg:w-fit w-full duration-300 lg:mt-2 ${
        showFilter ? "visible opacity-100" : "invisible opacity-0"
      } lg:visible lg:opacity-100`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`flex flex-col gap-6 bg-white p-6 h-dvh lg:p-0 w-[80%] max-w-80 lg:w-[16rem] lg:h-fit lg:overflow-auto overflow-y-scroll duration-300 ${
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
          <label htmlFor="state" className="font-semibold">
            State
          </label>
          <select
            name="state"
            id="state"
            className="p-2 border rounded-md"
            value={locationState}
            onChange={(e) => setLocationState(e.target.value)}
          >
            <option value="all">All</option>
            {locations.map((location) => (
              <option value={location.state.toLowerCase()} key={location.state}>
                {location.state}
              </option>
            ))}
          </select>
        </div>
        {cities && (
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
              {cities.map((city) => (
                <option value={city.toLowerCase()} key={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}
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
              onClick={() => setCategory("sale")}
              className={`${
                category === "sale"
                  ? "bg-accent-green-100 text-white"
                  : "bg-white text-accent-green-100"
              } border border-accent-green-100 px-2 p-1 rounded-md font-semibold duration-100`}
            >
              Sale
            </button>
            <button
              onClick={() => setCategory("rent")}
              className={`${
                category === "rent"
                  ? "bg-accent-green-100 text-white"
                  : "bg-white text-accent-green-100"
              } border border-accent-green-100 px-2 p-1 rounded-md font-semibold duration-100`}
            >
              Rent
            </button>
            <button
              onClick={() => setCategory("all")}
              className={`${
                category === "all"
                  ? "bg-accent-green-100 text-white"
                  : "bg-white text-accent-green-100"
              } border border-accent-green-100 px-2 p-1 rounded-md font-semibold duration-100`}
            >
              All
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col flex-1 gap-1">
              <label htmlFor="min-price" className="font-semibold">
                Min {category === "rent" ? "Rent" : "Price"}
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
                Max {category === "rent" ? "Rent" : "Price"}
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
          className="bg-accent-green-100 hover:bg-accent-green-200 p-2 rounded-md font-bold text-white duration-300"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
