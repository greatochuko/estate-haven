import {
  createListing,
  editAsDraft,
  editListing,
  saveAsDraft,
} from "@/actions/propertyActions";
import Image from "next/image";
import React from "react";
import { useFormStatus } from "react-dom";
import { PropertyType } from "./Property";
import { uploadImage } from "@/utils/imageUploader";
import LoadingIndicator from "./LoadingIndicator";

const amenitiesList = [
  "WiFi",
  "Air Conditioning",
  "Balcony",
  "Garage",
  "Gym",
  "Free Parking",
  "Pool",
  "Bar",
  "TV",
  "Dishwasher",
  "Security Cameras",
];

export default function CreateListingForm({
  property,
  propertyName,
  setPropertyName,
  category,
  setCategory,
  price,
  setPrice,
  area,
  setArea,
  streetAddress,
  setStreetAddress,
  bath,
  setBath,
  beds,
  setBeds,
  amenities,
  setAmenities,
  parkingSpots,
  setParkingSpots,
  petsAllowed,
  setPetsAllowed,
  imageList,
  setImageList,
  images,
  setImages,
  canSubmit,
}: {
  property: PropertyType | null;
  propertyName: string;
  setPropertyName: React.Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  area: number;
  setArea: React.Dispatch<React.SetStateAction<number>>;
  streetAddress: string;
  setStreetAddress: React.Dispatch<React.SetStateAction<string>>;
  category: "rent" | "sale";
  setCategory: React.Dispatch<React.SetStateAction<"rent" | "sale">>;
  bath: number;
  setBath: React.Dispatch<React.SetStateAction<number>>;
  beds: number;
  setBeds: React.Dispatch<React.SetStateAction<number>>;
  amenities: string[];
  setAmenities: React.Dispatch<React.SetStateAction<string[]>>;
  parkingSpots: number;
  setParkingSpots: React.Dispatch<React.SetStateAction<number>>;
  petsAllowed: boolean;
  setPetsAllowed: React.Dispatch<React.SetStateAction<boolean>>;
  imageList: { id: string; name: string; src: string }[];
  setImageList: React.Dispatch<
    React.SetStateAction<{ id: string; name: string; src: string }[]>
  >;
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  canSubmit: boolean;
}) {
  function toggleAmenity(type: string) {
    if (amenities.includes(type)) {
      setAmenities((curr) => curr.filter((t) => t !== type));
    } else {
      setAmenities((curr) => [...curr, type]);
    }
  }

  async function addImages(files: FileList | null) {
    if (!files) return;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setImageList((curr) => [
        ...curr,
        { id: crypto.randomUUID(), name: file.name, src: "" },
      ]);
    }
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const { url } = await uploadImage(file);
      setImageList((curr) =>
        curr.map((img) =>
          img.name === file.name ? { ...img, src: url as string } : img
        )
      );
      setImages((curr) => [...curr, url as string]);
    }
  }

  return (
    <form
      action={!!property ? editListing : createListing}
      className="flex flex-col flex-1 gap-8"
    >
      <div className="flex flex-col gap-4 shadow-[0_2px_10px_2px] shadow-zinc-100 p-4 sm:p-6 rounded-md">
        <h2 className="flex items-center gap-2 font-bold text-2xl">
          <svg
            height={24}
            width={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                stroke="#000000"
                className="stroke-accent-green-200"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 11h1v5.5m0 0h1.5m-1.5 0h-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9.5-4v-.5h.5V8h-.5Z"
              ></path>
            </g>
          </svg>
          Basic Info
        </h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-bold">
            Name <span className="text-accent-green-100">*</span>
          </label>
          <input
            type="text"
            value={propertyName}
            onChange={(e) => {
              if (e.target.value.length <= 50) {
                setPropertyName(e.target.value);
              }
            }}
            placeholder="Enter a name for your property"
            className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100"
            id="name"
            name="name"
          />
          <p className="text-sm text-zinc-400">
            {50 - propertyName.length} characters left
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="category" className="font-bold">
              Category <span className="text-accent-green-100">*</span>
            </label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value as "rent" | "sale")}
              className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100"
            >
              <option value="rent">For rent</option>
              <option value="sale">For sale</option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="propertyType" className="font-bold">
              Property type <span className="text-accent-green-100">*</span>
            </label>
            <select
              name="propertyType"
              id="propertyType"
              className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100"
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <label htmlFor="yearBuilt" className="font-bold">
            Year built <span className="text-accent-green-100">*</span>
          </label>
          <input
            type="number"
            name="yearBuilt"
            defaultValue={1999}
            id="yearBuilt"
            className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100 w-fit"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 shadow-[0_2px_10px_2px] shadow-zinc-100 p-4 sm:p-6 rounded-md">
        <h2 className="flex items-center gap-2 font-bold text-2xl">
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
                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                stroke="#000000"
                className="stroke-accent-green-200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#000000"
                className="stroke-accent-green-200"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Location
        </h2>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="state" className="font-bold">
              State <span className="text-accent-green-100">*</span>
            </label>
            <select
              name="state"
              id="state"
              className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100"
            >
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="edo">Edo</option>
              <option value="enugu">Enugu</option>
              <option value="kano">Kano</option>
            </select>
          </div>
          <div className="flex flex-col flex-1 gap-1">
            <label htmlFor="city" className="font-bold">
              City <span className="text-accent-green-100">*</span>
            </label>
            <select
              name="city"
              id="city"
              className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100"
            >
              <option value="lagos">Lagos</option>
              <option value="kano">Kano</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="street-address" className="font-bold">
            Street address <span className="text-accent-green-100">*</span>
          </label>
          <input
            type="text"
            value={streetAddress}
            name="streetAddress"
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder="Where's your property located?"
            className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100"
            id="street-address"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 shadow-[0_2px_10px_2px] shadow-zinc-100 p-4 sm:p-6 rounded-md">
        <h2 className="flex items-center gap-2 font-bold text-2xl">
          <svg
            height={24}
            width={24}
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
                className="stroke-accent-green-100"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 22786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                stroke="#000000"
                className="stroke-accent-green-100"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Property details
        </h2>
        <div className="flex flex-col gap-2">
          <label className="font-bold" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            defaultValue={property?.description}
            className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100 min-h-28 sm:min-h-36 resize-none"
            placeholder="Write about your property"
          ></textarea>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="area" className="font-bold">
              Total Area (sqft)
            </label>
            <input
              type="number"
              name="area"
              id="area"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100 max-w-40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Bedrooms</h3>
            <ul className="flex border-zinc-300 border rounded-md w-fit">
              {[1, 2, 3, 4, 5].map((bed) => (
                <li
                  key={bed}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setBeds(bed);
                    }
                  }}
                  onClick={() => setBeds(bed)}
                  className={`border-zinc-300 hover:bg-zinc-100 focus-visible:z-10 px-4 p-2 border-r focus-visible:ring ring-accent-green-100 cursor-pointer duration-200 ${
                    beds === bed ? "bg-zinc-200" : ""
                  }`}
                >
                  {bed}
                </li>
              ))}
            </ul>
            <input type="hidden" name="beds" value={beds} id="bedrooms" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Bathrooms</h3>
            <ul className="flex border-zinc-300 border rounded-md w-fit">
              {[1, 2, 3, 4].map((b) => (
                <li
                  tabIndex={0}
                  key={b}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setBath(b);
                    }
                  }}
                  onClick={() => setBath(b)}
                  className={`border-zinc-300 hover:bg-zinc-100 focus-visible:z-10 focus-visible:ring ring-accent-green-100 p-2 px-4 border-r cursor-pointer duration-200 ${
                    bath === b ? "bg-zinc-200" : ""
                  }`}
                >
                  {b}
                </li>
              ))}
            </ul>
            <input type="hidden" name="bath" value={bath} id="bathrooms" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Parking spots</h3>
            <ul className="flex border-zinc-300 border rounded-md w-fit">
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <li
                  tabIndex={0}
                  key={num}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setParkingSpots(num);
                    }
                  }}
                  onClick={() => setParkingSpots(num)}
                  className={`border-zinc-300 hover:bg-zinc-100 focus-visible:z-10 p-2 px-4 focus-visible:ring ring-accent-green-100 border-r cursor-pointer duration-200 ${
                    parkingSpots === num ? "bg-zinc-200" : ""
                  }`}
                >
                  {num}
                </li>
              ))}
            </ul>
            <input
              type="hidden"
              name="parkingSpots"
              value={parkingSpots}
              id="parkingSpots"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold">Amenities</h3>
            <ul className="gap-2 grid grid-cols-2 sm:grid-cols-3">
              {amenitiesList.map((am) => (
                <li key={am}>
                  <input
                    type="checkbox"
                    name="house"
                    id={am}
                    className="hidden"
                    checked={amenities.includes(am)}
                    onChange={() => toggleAmenity(am)}
                  />
                  <label
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        toggleAmenity(am);
                      }
                    }}
                    htmlFor={am}
                    className="flex items-center gap-2 group"
                  >
                    <span
                      className={`flex-center border-accent-green-100 group-focus-visible:ring ring-offset-1 ring-accent-green-100 ${
                        amenities.includes(am)
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
                    {am}
                  </label>
                </li>
              ))}
              <li>
                <input
                  type="checkbox"
                  name="house"
                  id="pets-allowed"
                  className="hidden"
                  checked={petsAllowed}
                  onChange={() => setPetsAllowed((curr) => !curr)}
                />
                <label
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setPetsAllowed((curr) => !curr);
                    }
                  }}
                  htmlFor="pets-allowed"
                  className="flex items-center gap-2 group"
                >
                  <span
                    className={`flex-center border-accent-green-100 group-focus-visible:ring ring-offset-1 ring-accent-green-100 ${
                      petsAllowed ? "bg-accent-green-100" : "bg-white"
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
                  Pets Allowed
                </label>
              </li>
            </ul>
            <input type="hidden" name="amenities" value={amenities} />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 shadow-[0_2px_10px_2px] shadow-zinc-100 p-4 sm:p-6 rounded-md">
        <h2 className="flex items-center gap-2 font-bold text-2xl">
          <svg
            height={24}
            width={24}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="fill-accent-green-100"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M917.52 369.86L594.24 98.59l-98.62 117.52-181.15-67.54-124.33 290.24h-80.28V914h804.57V438.81h-54.78l57.87-68.95zM603.24 201.62l211.25 177.23-50.33 59.96H404.21l199.03-237.19z m-248.99 39.84l91.47 34.1-136.98 163.25h-39.01l84.52-197.35z m487.04 599.39H183.01v-328.9H841.3v328.9z"
                className="fill-accent-green-100"
                fill="#0F1F3C"
              ></path>
              <path
                d="M621.68 640.96h146.29v73.14H621.68z"
                fill="#0F1F3C"
                className="fill-accent-green-100"
              ></path>
            </g>
          </svg>
          Price<span className="text-accent-green-100">*</span>
        </h2>
        <div className="flex items-center gap-4">
          <p className="font-bold text-lg">₦</p>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100 w-full sm:w-fit"
          />
          <select
            name="frequency"
            className="border-zinc-300 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100"
          >
            {category === "rent" ? (
              <>
                <option value="per month">Per month</option>
                <option value="per year">Per year</option>
              </>
            ) : (
              <option value="per-month">Outright</option>
            )}
          </select>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 shadow-[0_2px_10px_2px] shadow-zinc-100 p-4 sm:p-6 rounded-md">
        <h2 className="flex items-center gap-2 font-bold text-2xl">
          <svg
            height={24}
            width={24}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="fill-accent-green-100"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M917.52 369.86L594.24 98.59l-98.62 117.52-181.15-67.54-124.33 290.24h-80.28V914h804.57V438.81h-54.78l57.87-68.95zM603.24 201.62l211.25 177.23-50.33 59.96H404.21l199.03-237.19z m-248.99 39.84l91.47 34.1-136.98 163.25h-39.01l84.52-197.35z m487.04 599.39H183.01v-328.9H841.3v328.9z"
                className="fill-accent-green-100"
                fill="#0F1F3C"
              ></path>
              <path
                d="M621.68 640.96h146.29v73.14H621.68z"
                fill="#0F1F3C"
                className="fill-accent-green-100"
              ></path>
            </g>
          </svg>
          Photos<span className="text-accent-green-100">*</span>
        </h2>
        <p className="bg-amber-100 px-4 p-2 rounded-md w-fit text-amber-500">
          Note: Put the main picture first
        </p>
        <label
          tabIndex={0}
          htmlFor="imageInput"
          className="flex-center border-zinc-300 border border-dashed rounded-md min-h-40 cursor-pointer group group"
        >
          <p className="group-hover:bg-accent-green-200 group-focus-visible:ring flex items-center gap-2 bg-accent-green-100 px-6 p-2 rounded-md ring-accent-green-100 ring-offset-2 font-bold text-white duration-300">
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
                  d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Upload Photos
          </p>
          <div className="gap-2 grid grid-cols-2"></div>
        </label>
        <input
          type="file"
          accept="image/*"
          hidden
          name="imageInput"
          id="imageInput"
          onChange={(e) => addImages(e.target.files)}
          multiple
        />
        <input type="hidden" name="images" value={images} />
        <ul className="gap-2 grid grid-cols-2 lg:grid-cols-3">
          {imageList.map((image) => (
            <li
              key={image.id}
              className="relative flex flex-col bg-zinc-100 p-1 sm:p-2 border rounded-md"
            >
              <div
                className={`relative rounded-sm ${
                  image.src ? "" : "animate-pulse bg-zinc-300"
                } overflow-hidden aspect-[1.5]`}
              >
                {image.src ? (
                  <Image
                    src={image.src}
                    alt={image.name}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  ></Image>
                ) : null}
              </div>
              <p className="text-nowrap overflow-ellipsis overflow-hidden">
                {image.name}
              </p>
              <button
                onClick={() => {
                  setImageList((curr) =>
                    curr.filter((img) => img.id !== image.id)
                  );
                  setImages((curr) => curr.filter((img) => img !== image.src));
                }}
                className="top-2 sm:top-4 right-2 sm:right-4 absolute bg-white sm:opacity-70 hover:opacity-100 focus-visible:opacity-100 p-0.5 sm:p-1 rounded-full focus-visible:ring ring-accent-green-100 ring-offset-1 duration-300"
              >
                <svg
                  height={24}
                  width={24}
                  className="w-5 sm:w-6 h-5 sm:h-6"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g id="Close">
                        <rect
                          id="Rectangle"
                          fillRule="nonzero"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <line
                          x1="16.9999"
                          y1="7"
                          x2="7.00001"
                          y2="16.9999"
                          id="Path"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></line>
                        <line
                          x1="7.00006"
                          y1="7"
                          x2="17"
                          y2="16.9999"
                          id="Path"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></line>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between gap-4">
        <SaveAsDraftButton isEdit={!!property} canSubmit={canSubmit} />
        {!!property ? (
          <EditButton canSubmit={canSubmit} />
        ) : (
          <SubmitButton canSubmit={canSubmit} />
        )}
      </div>

      {!!property ? (
        <input type="hidden" value={property.id} name="propertyId" />
      ) : null}
      <input type="hidden" value={String(petsAllowed)} name="petsAllowed" />
    </form>
  );
}

function SaveAsDraftButton({
  isEdit,
  canSubmit,
}: {
  isEdit: boolean;
  canSubmit: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      tabIndex={0}
      disabled={pending || !canSubmit}
      formAction={isEdit ? editAsDraft : saveAsDraft}
      className="flex-1 flex-center border-zinc-300 bg-white hover:bg-zinc-100 px-4 sm:px-6 p-2 sm:p-3 border rounded-md focus-visible:ring ring-accent-green-100 sm:max-w-40 font-bold duration-300"
    >
      {pending ? <LoadingIndicator /> : "Save as draft"}
    </button>
  );
}

function SubmitButton({ canSubmit }: { canSubmit: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending || !canSubmit}
      type="submit"
      className="flex-1 flex-center bg-accent-green-100 hover:bg-accent-green-200 px-4 sm:px-6 p-2 sm:p-3 rounded-md sm:max-w-40 font-bold text-white duration-300 disabled:cursor-not-allowed"
    >
      {pending ? <LoadingIndicator color="white" /> : "Publish"}
    </button>
  );
}

function EditButton({ canSubmit }: { canSubmit: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending || !canSubmit}
      type="submit"
      className="flex-1 flex-center bg-accent-green-100 hover:bg-accent-green-200 px-4 sm:px-6 p-2 sm:p-3 rounded-md sm:max-w-40 font-bold text-white duration-300 disabled:cursor-not-allowed"
    >
      {pending ? <LoadingIndicator color="white" /> : "Edit"}
    </button>
  );
}
