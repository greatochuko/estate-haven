import Image from "next/image";
import React from "react";

const locations = [
  {
    id: "1",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
  {
    id: "2",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
  {
    id: "3",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
  {
    id: "4",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
  {
    id: "5",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
  {
    id: "6",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
  {
    id: "7",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
  {
    id: "8",
    city: "Benin",
    state: "Edo",
    numOfListings: 20,
    imageUrl: "/property-1.jpg",
  },
];

export default function PropertiesByLocationSection() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl text-center">
        Find properties by location
      </h2>
      <p className="mx-auto max-w-[40rem] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        soluta autem ullam nostrum consequatur labore, incidunt sit animi minus
        in a commodi porro ipsam.
      </p>
      <div className="gap-x-4 gap-y-8 sm:gap-x-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
        {locations.map((location) => (
          <div className="flex items-center gap-2" key={location.id}>
            <div className="relative rounded-lg w-[4.5rem] sm:w-20 overflow-hidden aspect-square">
              <Image
                src={location.imageUrl}
                alt={location.city}
                fill
                sizes=""
                className="object-cover"
              ></Image>
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <h3 className="font-bold sm:text-lg">{location.city}</h3>
              <p className="text-sm text-zinc-500 sm:text-base">
                {location.numOfListings} listings
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
