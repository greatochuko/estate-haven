import React from "react";
import { locations } from "./PropertiesByLocationSection";
import Link from "next/link";
import Image from "next/image";
import { PropertyType } from "./Property";

export type LocationType = {
  id: string;
  state: string;
  cities: string[];
  imageUrl: string;
};

export default function Location({
  location,
  properties,
}: {
  location: LocationType;
  properties: PropertyType[];
}) {
  const numOfListings = properties.filter(
    (property) => property.state.toLowerCase() === location.state.toLowerCase()
  ).length;

  return (
    <Link
      href={`/properties?state=${location.state
        .split(" ")
        .join("-")
        .toLowerCase()}`}
      className="flex items-center gap-2 group"
      key={location.id}
    >
      <div className="relative rounded-lg w-[4.5rem] sm:w-20 overflow-hidden aspect-square">
        <Image
          src={location.imageUrl}
          alt={location.state}
          fill
          sizes="164px"
          className="object-cover"
        ></Image>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="group-hover:text-accent-green-100 font-bold sm:text-lg duration-300">
          {location.state}
        </h3>
        <p className="text-sm text-zinc-500 sm:text-base">
          {numOfListings} listing{numOfListings > 1 ? "s" : ""}
        </p>
      </div>
    </Link>
  );
}
