"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SettingsLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="flex justify-center items-center md:hidden py-3 p-2 border rounded-md font-semibold"
        onClick={() => setIsOpen((curr) => !curr)}
      >
        <svg
          height={24}
          width={24}
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
            {" "}
            <g id="Menu / Hamburger_MD">
              {" "}
              <path
                id="Vector"
                d="M5 17H19M5 12H19M5 7H19"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        Menu
      </button>
      <ul
        className={`overflow-hidden duration-300 md:h-full ${
          isOpen ? "h-72" : "h-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <li className="border-zinc-100 border-b font-semibold hover:text-accent-green-100 duration-300">
          <Link
            href={"/settings"}
            className={`flex items-center border-l gap-2 p-2 py-3 group  ${
              pathname === "/settings"
                ? "text-accent-green-100  border-accent-green-100"
                : "border-transparent"
            }`}
          >
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
                <g id="Iconly/Curved/Profile">
                  <g id="Profile">
                    <path
                      id="Stroke 1"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z"
                      stroke="#222"
                      className={`group-hover:stroke-accent-green-100 ${
                        pathname === "/settings"
                          ? "stroke-accent-green-100"
                          : "stroke-zinc-700"
                      } duration-300 `}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      id="Stroke 3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z"
                      stroke="#222"
                      className={`group-hover:stroke-accent-green-100 ${
                        pathname === "/settings"
                          ? "stroke-accent-green-100"
                          : "stroke-zinc-700"
                      } duration-300 `}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Personal Info
          </Link>
        </li>
        <li className="border-zinc-100 border-b font-semibold hover:text-accent-green-100 duration-300">
          <Link
            href={"/settings/password-and-security"}
            className={`flex items-center border-l gap-2 p-2 py-3 group ${
              pathname.includes("password-and-security")
                ? "text-accent-green-100  border-accent-green-100"
                : "border-transparent"
            }`}
          >
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
                  d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182"
                  stroke="#222"
                  className={`group-hover:stroke-accent-green-100 ${
                    pathname.includes("password-and-security")
                      ? "stroke-accent-green-100"
                      : "stroke-zinc-700"
                  } duration-300 `}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 16.6181V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16.6181C10.6931 16.3434 10.5 15.9442 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 15.9442 13.3069 16.3434 13 16.6181Z"
                  fill="#222"
                  className={`group-hover:fill-accent-green-100 ${
                    pathname.includes("password-and-security")
                      ? "fill-accent-green-100"
                      : "fill-zinc-700"
                  } duration-300 `}
                ></path>
              </g>
            </svg>
            Password and Security
          </Link>
        </li>
        <li className="border-zinc-100 border-b font-semibold hover:text-accent-green-100 duration-300">
          <Link
            href={"/settings/my-properties"}
            className={`flex items-center border-l gap-2 p-2 py-3 group ${
              pathname.includes("my-properties")
                ? "text-accent-green-100  border-accent-green-100"
                : "border-transparent"
            }`}
          >
            <svg
              height={22}
              width={22}
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
                <g id="Navigation / House_01">
                  <path
                    id="Vector"
                    d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                    stroke="#333"
                    className={`group-hover:stroke-accent-green-100 ${
                      pathname.includes("my-properties")
                        ? "stroke-accent-green-100"
                        : "stroke-zinc-700"
                    } duration-300 `}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
            My Properties
          </Link>
        </li>
        <li className="border-zinc-100 border-b font-semibold hover:text-accent-green-100 duration-300">
          <Link
            href={"/settings/wishlist"}
            className={`flex items-center border-l gap-2 p-2 py-3 group ${
              pathname.includes("wishlist")
                ? "text-accent-green-100  border-accent-green-100"
                : "border-transparent"
            }`}
          >
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                  stroke="#111"
                  className={`group-hover:stroke-accent-green-100 ${
                    pathname.includes("wishlist")
                      ? "stroke-accent-green-100"
                      : "stroke-zinc-700"
                  } duration-300 `}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Wishlist
          </Link>
        </li>
        <li className="border-zinc-100 border-b font-semibold hover:text-accent-green-100 duration-300">
          <Link
            href={"/settings/reviews"}
            className={`flex items-center border-l gap-2 p-2 py-3 group ${
              pathname.includes("reviews")
                ? "text-accent-green-100  border-accent-green-100"
                : "border-transparent"
            }`}
          >
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
                  d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                  stroke="#111"
                  className={`group-hover:stroke-accent-green-100 ${
                    pathname.includes("reviews")
                      ? "stroke-accent-green-100"
                      : "stroke-zinc-700"
                  } duration-300 `}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Reviews
          </Link>
        </li>
        <li className="font-semibold hover:text-red-500 duration-300">
          <Link
            href={"/settings/reviews"}
            className={`flex items-center gap-2 p-2 py-3 group `}
          >
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
                {" "}
                <path
                  d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5"
                  stroke="#000000"
                  className="group-hover:stroke-red-500 duration-300 stroke-zinc-700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Sign Out
          </Link>
        </li>
      </ul>
    </>
  );
}
