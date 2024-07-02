import React from "react";
import Property from "./Property";

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
    thumbnail: "/property-1.jpg",
    price: 650000,
    location: "Miami FL",
    type: "Single Family",
    beds: 4,
    bath: 4,
    area: 3000,
    isRent: false,
  },
];

export default function RecentListings() {
  return (
    <div>
      <h3 className="mb-4 font-bold text-xl sm:text-2xl">
        Explore our latest properties
      </h3>
      <div className="gap-6 grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))]">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
}
