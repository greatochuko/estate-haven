import React from "react";

export default function PropertyCompletionStatus({
  basicInfoCompleted,
  locationCompleted,
  propertyDetailsCompleted,
  priceCompleted,
  photosCompleted,
}: {
  basicInfoCompleted: boolean;
  locationCompleted: boolean;
  propertyDetailsCompleted: boolean;
  priceCompleted: boolean;
  photosCompleted: boolean;
}) {
  const allList = [
    basicInfoCompleted,
    locationCompleted,
    propertyDetailsCompleted,
    priceCompleted,
    photosCompleted,
  ];

  const completedList = allList.filter((list) => list);

  const percentageCompleted = Math.floor(
    (completedList.length / allList.length) * 100
  );

  return (
    <div className="top-20 lg:sticky flex flex-col gap-2 lg:order-2 bg-white p-2 lg:w-64 h-fit">
      <h2 className="font-bold text-lg">{percentageCompleted}% Completed</h2>
      <div className="bg-zinc-100 rounded-full">
        <div
          className="bg-accent-green-100 rounded-full h-[6px] duration-300"
          style={{ width: percentageCompleted + "%" }}
        ></div>
      </div>
      <ul className="lg:flex flex-col gap-2 hidden py-2">
        <li className="flex items-center gap-2">
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
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#fff"
                className={
                  basicInfoCompleted
                    ? "stroke-accent-green-100"
                    : "stroke-zinc-400"
                }
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Basic info
        </li>
        <li className="flex items-center gap-2">
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
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#fff"
                className={
                  locationCompleted
                    ? "stroke-accent-green-100"
                    : "stroke-zinc-400"
                }
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Location
        </li>
        <li className="flex items-center gap-2">
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
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#fff"
                className={
                  propertyDetailsCompleted
                    ? "stroke-accent-green-100"
                    : "stroke-zinc-400"
                }
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Property details
        </li>
        <li className="flex items-center gap-2">
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
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#fff"
                className={
                  priceCompleted ? "stroke-accent-green-100" : "stroke-zinc-400"
                }
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Price
        </li>
        <li className="flex items-center gap-2">
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
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke="#fff"
                className={
                  photosCompleted
                    ? "stroke-accent-green-100"
                    : "stroke-zinc-400"
                }
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Photos
        </li>
      </ul>
    </div>
  );
}
