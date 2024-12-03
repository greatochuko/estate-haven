"use client";
import React, { useState } from "react";
import ImageViewModal from "./ImageViewModal";
import Image from "next/image";
import { PropertyType } from "./Property";
import PropertyImage from "./PropertyImage";

export default function ImageGallery({ property }: { property: PropertyType }) {
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
      <div className="md:flex-row flex-col gap-4 hidden sm:flex">
        <div
          className={`relative ${
            property.images.length === 2 ? "flex-1" : "flex-[2]"
          } rounded-lg cursor-pointer overflow-hidden aspect-[1.5] group ${
            property.images.length > 1 ? "" : "aspect-[2]"
          }`}
          onClick={() => openModal(0)}
        >
          <PropertyImage
            propertyName={property.name}
            imageUrl={property.images[0]}
          />
          <div className="top-0 left-0 absolute flex-center bg-black/50 opacity-0 group-hover:opacity-100 w-full h-full duration-300">
            <svg
              height={35}
              width={35}
              className="group-hover:scale-100 duration-300 scale-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11ZM11 7C11.5523 7 12 7.44772 12 8V10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H12V14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14V12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H10V8C10 7.44772 10.4477 7 11 7Z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        {property.images.length > 1 ? (
          <div className="flex md:flex-col flex-1 gap-4">
            <div
              className="relative flex-1 rounded-lg cursor-pointer overflow-hidden aspect-[1.5] group"
              onClick={() => setModal({ open: true, index: 1 })}
            >
              <PropertyImage
                propertyName={property.name}
                imageUrl={property.images[1]}
              />
              <div className="top-0 left-0 absolute flex-center bg-black/50 opacity-0 group-hover:opacity-100 w-full h-full duration-300">
                <svg
                  height={35}
                  width={35}
                  className="group-hover:scale-100 duration-300 scale-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11ZM11 7C11.5523 7 12 7.44772 12 8V10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H12V14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14V12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H10V8C10 7.44772 10.4477 7 11 7Z"
                      fill="#fff"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            {property.images.length > 2 ? (
              <div
                className="relative flex-1 rounded-lg cursor-pointer overflow-hidden aspect-[1.5] group"
                onClick={() => setModal({ open: true, index: 2 })}
              >
                <PropertyImage
                  propertyName={property.name}
                  imageUrl={property.images[2]}
                />
                {property.images.length > 3 ? (
                  <div className="top-0 left-0 absolute flex-center bg-black/50 w-full h-full font-semibold text-white group-hover:underline">
                    `+${property.images.length - 3} More`
                  </div>
                ) : (
                  <div className="top-0 left-0 absolute flex-center bg-black/50 opacity-0 group-hover:opacity-100 w-full h-full duration-300">
                    <svg
                      height={35}
                      width={35}
                      className="group-hover:scale-100 duration-300 scale-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.8487 18.3729 14.551 17.3199 15.9056L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L15.9056 17.3199C14.551 18.3729 12.8487 19 11 19C6.58172 19 3 15.4183 3 11ZM11 7C11.5523 7 12 7.44772 12 8V10H14C14.5523 10 15 10.4477 15 11C15 11.5523 14.5523 12 14 12H12V14C12 14.5523 11.5523 15 11 15C10.4477 15 10 14.5523 10 14V12H8C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10H10V8C10 7.44772 10.4477 7 11 7Z"
                          fill="#fff"
                        ></path>
                      </g>
                    </svg>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ) : null}
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
