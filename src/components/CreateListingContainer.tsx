"use client";
import React, { useState } from "react";
import PropertyCompletionStatus from "./PropertyCompletionStatus";
import CreateListingForm from "./CreateListingForm";

export default function CreateListingContainer({ userId }: { userId: string }) {
  const [propertyName, setPropertyName] = useState("");
  const [category, setCategory] = useState("rent");
  const [streetAddress, setStreetAddress] = useState("");
  const [area, setArea] = useState(0);
  const [beds, setBeds] = useState<number | string>("studio");
  const [bath, setBath] = useState<number | string>(1);
  const [parkingSpots, setParkingSpots] = useState(0);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState<
    { id: string; name: string; src: string }[]
  >([]);

  const basicInfoCompleted = !!propertyName.length;
  const locationCompleted = !!streetAddress.length;
  const propertyDetailsCompleted = !!area && area !== 0 && !!amenities.length;
  const priceCompleted = !!price && price !== 0;
  const photosCompleted = !!images.length;
  const canSubmit =
    basicInfoCompleted &&
    locationCompleted &&
    propertyDetailsCompleted &&
    priceCompleted &&
    photosCompleted;

  return (
    <div className="flex lg:flex-row flex-col gap-4">
      <PropertyCompletionStatus
        basicInfoCompleted={basicInfoCompleted}
        locationCompleted={locationCompleted}
        propertyDetailsCompleted={propertyDetailsCompleted}
        priceCompleted={priceCompleted}
        photosCompleted={photosCompleted}
      />
      <CreateListingForm
        userId={userId}
        propertyName={propertyName}
        setPropertyName={setPropertyName}
        area={area}
        setArea={setArea}
        price={price}
        setPrice={setPrice}
        streetAddress={streetAddress}
        setStreetAddress={setStreetAddress}
        category={category}
        setCategory={setCategory}
        bath={bath}
        setBath={setBath}
        beds={beds}
        setBeds={setBeds}
        amenities={amenities}
        setAmenities={setAmenities}
        parkingSpots={parkingSpots}
        setParkingSpots={setParkingSpots}
        petsAllowed={petsAllowed}
        setPetsAllowed={setPetsAllowed}
        images={images}
        setImages={setImages}
        canSubmit={canSubmit}
      />
    </div>
  );
}
