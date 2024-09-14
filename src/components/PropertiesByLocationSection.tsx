import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PropertyType } from "./Property";

// export const locations2 = [
//   {
//     id: "1",
//     city: "Lagos",
//     state: "Lagos",
//     numOfListings: 150,
//     imageUrl: "/lagos.jpg",
//   },
//   {
//     id: "2",
//     city: "Abuja",
//     state: "FCT",
//     numOfListings: 120,
//     imageUrl: "/abuja.jpg",
//   },
//   {
//     id: "3",
//     city: "Port Harcourt",
//     state: "Rivers",
//     numOfListings: 85,
//     imageUrl: "/port-harcourt.jpg",
//   },
//   {
//     id: "4",
//     city: "Kano",
//     state: "Kano",
//     numOfListings: 60,
//     imageUrl: "/kano.jpg",
//   },
//   {
//     id: "5",
//     city: "Ibadan",
//     state: "Oyo",
//     numOfListings: 70,
//     imageUrl: "/ibadan.jpg",
//   },
//   {
//     id: "6",
//     city: "Enugu",
//     state: "Enugu",
//     numOfListings: 55,
//     imageUrl: "/enugu.jpg",
//   },
//   {
//     id: "7",
//     city: "Benin City",
//     state: "Edo",
//     numOfListings: 45,
//     imageUrl: "/benin.jpg",
//   },
//   {
//     id: "8",
//     city: "Kaduna",
//     state: "Kaduna",
//     numOfListings: 50,
//     imageUrl: "/kaduna.jpg",
//   },
// ];

export const locations = [
  {
    id: "lagos",
    state: "Lagos",
    cities: ["Lekki", "Ikeja", "Victoria Island", "Ikoyi", "Surulere"],
    imageUrl: "/lagos.jpg",
  },
  {
    id: "abuja",
    state: "FCT",
    cities: ["Garki", "Wuse", "Maitama", "Asokoro", "Gwarimpa"],
    imageUrl: "/abuja.jpg",
  },
  {
    id: "anambra",
    state: "Anambra",
    cities: ["Onitsha", "Awka", "Nnewi", "Ekwulobia", "Ihiala"],
    imageUrl: "/anambra.jpg",
  },
  {
    id: "rivers",
    state: "Rivers",
    cities: ["Port Harcourt", "Bonny", "Eleme", "Omoku", "Oyigbo"],
    imageUrl: "/rivers.jpg",
  },
  {
    id: "ogun",
    state: "Ogun",
    cities: ["Abeokuta", "Ota", "Ijebu-Ode", "Sagamu", "Ilaro"],
    imageUrl: "/ogun.jpg",
  },
  {
    id: "enugu",
    state: "Enugu",
    cities: ["Enugu", "Nsukka", "Agbani", "Oji River", "Udi"],
    imageUrl: "/enugu.jpg",
  },
  {
    id: "oyo",
    state: "Oyo",
    cities: ["Ibadan", "Oyo", "Ogbomoso", "Iseyin", "Saki"],
    imageUrl: "/oyo.jpg",
  },
  {
    id: "kano",
    state: "Kano",
    cities: ["Kano", "Wudil", "Bichi", "Rano", "Gwarzo"],
    imageUrl: "/kano.jpg",
  },
  {
    id: "kaduna",
    state: "Kaduna",
    cities: ["Kaduna", "Zaria", "Kafanchan", "Saminaka", "Birnin Gwari"],
    imageUrl: "/kaduna.jpg",
  },
  {
    id: "delta",
    state: "Delta",
    cities: ["Asaba", "Warri", "Sapele", "Ughelli", "Agbor"],
    imageUrl: "/delta.jpg",
  },
];

export default function PropertiesByLocationSection({
  properties,
}: {
  properties: PropertyType[];
}) {
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
      <div className="gap-x-4 gap-y-8 sm:gap-x-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2">
        {locations.map((location) => (
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
                {
                  properties.filter(
                    (property) => property.state === location.state
                  ).length
                }{" "}
                listings
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
