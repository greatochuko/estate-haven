import React from "react";
import { PropertyType } from "./Property";
import Location, { LocationType } from "./Location";

export const locations: LocationType[] = [
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
          <Location
            key={location.state}
            location={location}
            properties={properties}
          />
        ))}
      </div>
    </div>
  );
}
