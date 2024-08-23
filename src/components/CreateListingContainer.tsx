"use client";
import React, { useState } from "react";
import PropertyCompletionStatus from "./PropertyCompletionStatus";
import CreateListingForm from "./CreateListingForm";
import { PropertyType } from "./Property";

export default function CreateListingContainer({
  userId,
  property,
}: {
  userId: string;
  property?: PropertyType;
}) {
  console.log(property);
  const [propertyName, setPropertyName] = useState(property?.name || "");
  const [category, setCategory] = useState(property?.category || "rent");
  const [streetAddress, setStreetAddress] = useState(
    property?.streetAddress || ""
  );
  const [area, setArea] = useState(property?.area || 0);
  const [beds, setBeds] = useState(property?.beds || 1);
  const [bath, setBath] = useState(property?.bath || 1);
  const [parkingSpots, setParkingSpots] = useState(property?.parkingSpots || 0);
  const [amenities, setAmenities] = useState<string[]>(
    property?.amenities || []
  );
  const [petsAllowed, setPetsAllowed] = useState(
    property?.petsAllowed || false
  );
  const [price, setPrice] = useState(property?.price || 0);
  const [imageList, setImageList] = useState<
    { id: string; name: string; src: string }[]
  >([]);
  const [images, setImages] = useState<string[]>(property?.images || []);

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
        property={property}
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
        imageList={imageList}
        setImageList={setImageList}
        images={images}
        setImages={setImages}
        canSubmit={canSubmit}
      />
    </div>
  );
}
