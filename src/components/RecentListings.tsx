import React, { useEffect, useState } from "react";
import Property from "./Property";
import Link from "next/link";

const properties = [
  {
    id: "1",
    thumbnail: "/property-1.jpg",
    price: 650000,
    location: "Miami FL",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
  {
    id: "2",
    thumbnail: "/property-2.jpg",
    price: 650000,
    location: "Austin TX",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
  {
    id: "3",
    thumbnail: "/property-3.jpg",
    price: 650000,
    location: "Miami FL",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
  {
    id: "4",
    thumbnail: "/property-4.jpg",
    price: 650000,
    location: "Austin TX",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
  {
    id: "5",
    thumbnail: "/property-2.jpg",
    price: 650000,
    location: "Austin TX",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
  {
    id: "6",
    thumbnail: "/property-1.jpg",
    price: 650000,
    location: "Miami FL",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
  {
    id: "7",
    thumbnail: "/property-4.jpg",
    price: 650000,
    location: "Austin TX",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
  {
    id: "8",
    thumbnail: "/property-2.jpg",
    price: 650000,
    location: "Austin TX",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
];

export default function RecentListings() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-xl sm:text-2xl">
        Explore our latest properties
      </h3>
      <div className="gap-6 grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))]">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      <Link
        href={"/properties"}
        className="block border-[3px] border-accent-green-100 hover:border-accent-green-200 hover:bg-accent-green-100 mx-auto mt-8 px-4 py-2 rounded-full w-fit font-bold text-accent-green-100 hover:text-white duration-300"
      >
        Show All
      </Link>
    </div>
  );
}
