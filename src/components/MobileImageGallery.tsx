"use client";
import React, { useState } from "react";
import ImageViewModal from "./ImageViewModal";
import Image from "next/image";
import { PropertyType } from "./Property";
import PropertyImage from "./PropertyImage";

export default function MobileImageGallery({
  property,
}: {
  property: PropertyType;
}) {
  const [modal, setModal] = useState({ open: false, index: 0 });

  function gotoSlide(index: "next" | "prev" | number) {
    if (index === "next") {
      if (modal.index >= property.images.length - 1) return;
      setModal((curr) => ({ ...curr, index: curr.index + 1 }));
    } else if (index === "prev") {
      if (modal.index <= 0) return;
      setModal((curr) => ({ ...curr, index: curr.index - 1 }));
    } else {
      setModal((curr) => ({ ...curr, index: index }));
    }
  }

  function openModal(index: number) {
    setModal({ open: true, index: index });
  }

  return (
    <>
      <div className="flex h-full snap-x snap-mandatory overflow-hidden sm:hidden overflow-x-auto aspect-video no-scrollbar rounded-md">
        {property.images.map((image, index) => (
          <div
            key={index}
            className="w-[92vw] sm:w-[90vw] flex-none snap-start relative"
            onClick={() => openModal(index)}
          >
            <Image
              src={image}
              alt={property.name}
              fill
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      <ImageViewModal
        currentIndex={modal.index}
        gotoSlide={gotoSlide}
        property={property}
        open={modal.open}
        closeModal={() => setModal((curr) => ({ ...curr, open: false }))}
      />
    </>
  );
}
