import PropertiesPageMain from "@/components/PropertiesPageMain";
import SearchForm from "@/components/SearchForm";
import React from "react";

export const properties = [
  {
    id: "1",
    name: "Luxury Apartment in Lagos",
    thumbnail: "/property-1.jpg",
    price: 50000000,
    location: {
      city: "Lagos",
      state: "Lagos",
    },
    type: "Apartment",
    beds: 3,
    bath: 2,
    area: 150,
    isRent: false,
  },
  {
    id: "2",
    name: "Spacious House in Abuja",
    thumbnail: "/property-2.jpg",
    price: 150000,
    location: {
      city: "Abuja",
      state: "FCT",
    },
    type: "House",
    beds: 4,
    bath: 3,
    area: 300,
    isRent: true,
  },
  {
    id: "3",
    name: "Elegant Duplex in Port Harcourt",
    thumbnail: "/property-3.jpg",
    price: 35000000,
    location: {
      city: "Port Harcourt",
      state: "Rivers",
    },
    type: "Duplex",
    beds: 5,
    bath: 4,
    area: 400,
    isRent: false,
  },
  {
    id: "4",
    name: "Modern Apartment in Kano",
    thumbnail: "/property-4.jpg",
    price: 100000,
    location: {
      city: "Kano",
      state: "Kano",
    },
    type: "Apartment",
    beds: 2,
    bath: 1,
    area: 120,
    isRent: true,
  },
  {
    id: "5",
    name: "Family House in Ibadan",
    thumbnail: "/property-5.jpg",
    price: 45000000,
    location: {
      city: "Ibadan",
      state: "Oyo",
    },
    type: "House",
    beds: 4,
    bath: 3,
    area: 350,
    isRent: false,
  },
  {
    id: "6",
    name: "Cozy Studio in Enugu",
    thumbnail: "/property-6.jpg",
    price: 80000,
    location: {
      city: "Enugu",
      state: "Enugu",
    },
    type: "Studio",
    beds: 1,
    bath: 1,
    area: 80,
    isRent: true,
  },
  {
    id: "7",
    name: "Charming Bungalow in Benin City",
    thumbnail: "/property-7.jpg",
    price: 25000000,
    location: {
      city: "Benin City",
      state: "Edo",
    },
    type: "House",
    beds: 3,
    bath: 2,
    area: 200,
    isRent: false,
  },
  {
    id: "8",
    name: "Affordable Apartment in Kaduna",
    thumbnail: "/property-8.jpg",
    price: 200000,
    location: {
      city: "Kaduna",
      state: "Kaduna",
    },
    type: "Apartment",
    beds: 2,
    bath: 2,
    area: 150,
    isRent: true,
  },
];

export default function PropertiesPage() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <SearchForm />
      <PropertiesPageMain properties={properties} />
    </div>
  );
}
