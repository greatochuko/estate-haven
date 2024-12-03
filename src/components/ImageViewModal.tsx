import React, { useEffect, useRef, useState } from "react";
import ModalContainer from "./ModalContainer";
import Image from "next/image";
import { PropertyType } from "./Property";

export default function ImageViewModal({
  currentIndex,
  gotoSlide,
  open,
  closeModal,
  property,
}: {
  open: boolean;
  closeModal: () => void;
  property: PropertyType;
  currentIndex: number;
  gotoSlide: (index: "next" | "prev" | number) => void;
}) {
  const [zoom, setZoom] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function toggleFullscreen() {
      if (fullscreen) {
        modalRef.current?.requestFullscreen();
        return;
      } else if (document.fullscreenElement === modalRef.current) {
        document.exitFullscreen();
      }
    }
    toggleFullscreen();
  }, [fullscreen]);

  function closeImageView() {
    if (document.fullscreenElement === modalRef.current)
      document.exitFullscreen();
    closeModal();
  }

  return (
    <ModalContainer
      open={open}
      closeModal={closeModal}
      background={"#000"}
      elementRef={modalRef}
    >
      <div
        className="flex flex-col gap-4 p-4 pt-2 w-full h-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h4 className="text-zinc-300">
            {currentIndex + 1}/{property.images.length}
          </h4>
          <div className="flex gap-4">
            <button
              onClick={() => setFullscreen((curr) => !curr)}
              className="p-1 group"
            >
              {fullscreen ? (
                <svg
                  height={20}
                  width={20}
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
                      d="M7 9C8.10457 9 9 8.10457 9 7V3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V7H3C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H7Z"
                      fill="#fff"
                      className="group-hover:fill-white duration-300 fill-zinc-300"
                    ></path>
                    <path
                      d="M17 9C15.8954 9 15 8.10457 15 7V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H17Z"
                      fill="#fff"
                      className="group-hover:fill-white duration-300 fill-zinc-300"
                    ></path>
                    <path
                      d="M17 15C15.8954 15 15 15.8954 15 17V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H17Z"
                      fill="#fff"
                      className="group-hover:fill-white duration-300 fill-zinc-300"
                    ></path>
                    <path
                      d="M9 17C9 15.8954 8.10457 15 7 15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H7V21C7 21.5523 7.44772 22 8 22C8.55228 22 9 21.5523 9 21V17Z"
                      fill="#fff"
                      className="group-hover:fill-white duration-300 fill-zinc-300"
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg
                  height={20}
                  width={20}
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
                      d="M9.00002 3.99998H4.00004L4 9M20 8.99999V4L15 3.99997M15 20H20L20 15M4 15L4 20L9.00002 20"
                      stroke="#fff"
                      className="group-hover:stroke-white duration-300 stroke-zinc-300"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              )}
            </button>
            <button
              onClick={() => setZoom((curr) => !curr)}
              className="p-1 group"
            >
              {zoom ? (
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#fff"
                      className="group-hover:fill-white duration-300 fill-zinc-400"
                      fillRule="evenodd"
                      d="M9 4a5 5 0 100 10A5 5 0 009 4zM2 9a7 7 0 1112.6 4.2.999.999 0 01.107.093l3 3a1 1 0 01-1.414 1.414l-3-3a.999.999 0 01-.093-.107A7 7 0 012 9zm10.5 0a1 1 0 00-1-1h-5a1 1 0 100 2h5a1 1 0 001-1z"
                    ></path>
                  </g>
                </svg>
              ) : (
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#fff"
                      className="group-hover:fill-white duration-300 fill-zinc-400"
                      fillRule="evenodd"
                      d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2zM8 6.5a1 1 0 112 0V8h1.5a1 1 0 110 2H10v1.5a1 1 0 11-2 0V10H6.5a1 1 0 010-2H8V6.5z"
                    ></path>
                  </g>
                </svg>
              )}
            </button>
            <button onClick={closeImageView} className="p-1 group">
              <svg
                height={24}
                width={24}
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="Close">
                      <rect
                        id="Rectangle"
                        fillRule="nonzero"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <line
                        x1="16.9999"
                        y1="7"
                        x2="7.00001"
                        y2="16.9999"
                        id="Path"
                        stroke="#fff"
                        className="group-hover:stroke-white duration-300 stroke-zinc-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></line>
                      <line
                        x1="7.00006"
                        y1="7"
                        x2="17"
                        y2="16.9999"
                        id="Path"
                        stroke="#fff"
                        className="group-hover:stroke-white duration-300 stroke-zinc-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></line>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative flex flex-1 items-center gap-4 duration-300">
          <button
            className={`py-3 px-1 group bg-black/50 absolute z-10 left-0 sm:static ${
              zoom ? "absolute top-[50%] -translate-y-[50%] left-0 z-20" : ""
            }`}
            onClick={() => gotoSlide("prev")}
          >
            <svg
              height={28}
              width={28}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
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
                  d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
                  fill="#aaa"
                  className="group-hover:fill-white duration-300"
                ></path>
              </g>
            </svg>
          </button>

          <div className={`flex-1 h-full overflow-hidden`}>
            <div
              className="flex h-full duration-300"
              style={{ transform: `translateX(${-currentIndex * 100}%)` }}
            >
              {property.images.map((image, i) => (
                <div key={i} className="relative flex-[1_0_100%] h-full">
                  <Image
                    src={image}
                    alt={property.name}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  ></Image>
                </div>
              ))}
            </div>
          </div>

          <button
            className={`py-3 px-1 group bg-black/50 absolute right-0 sm:static ${
              zoom ? "absolute top-[50%] -translate-y-[50%] right-0 z-20" : ""
            }`}
            onClick={() => gotoSlide("next")}
          >
            <svg
              height={28}
              width={28}
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
                  d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
                  fill="#aaa"
                  className="group-hover:fill-white duration-300"
                ></path>
              </g>
            </svg>
          </button>
        </div>

        <div className={`flex justify-center gap-4 ${zoom ? "hidden" : ""}`}>
          {property.images.map((image, i) => (
            <div
              className={`relative border-[3px] ${
                currentIndex === i ? "border-accent-green-100" : "border-white"
              } rounded-lg w-24 overflow-hidden aspect-[1.1] duration-300 cursor-pointer `}
              key={i}
              onClick={() => gotoSlide(i)}
            >
              <Image
                src={image}
                alt={property.name}
                fill
                sizes="180px"
                className="object-cover"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </ModalContainer>
  );
}
