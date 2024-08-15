"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import AuthModal from "./AuthModal";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Agents", href: "/agents" },
];

export default function Header() {
  const pathname = usePathname();
  const [loginModal, setLoginModal] = useState({ open: false, type: "" });
  const [mobileNav, setMobileNav] = useState(true);

  return (
    <>
      <header className="top-0 z-30 sticky bg-white shadow-[#eee] shadow-md font-bold">
        <div className="flex justify-between items-center mx-auto px-2 p-3 w-[95%] sm:w-[90%] max-w-7xl">
          <button
            className="sm:hidden bg-red-00"
            onClick={() => setMobileNav(true)}
          >
            <svg
              height={30}
              width={30}
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
          </button>
          <Link href={"/"}>Estate Haven</Link>
          <ul className="sm:flex items-center gap-4 hidden">
            {navLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link
                  href={navLink.href}
                  className={`p-2 hover:text-accent-green-200 duration-300 ${
                    pathname === navLink.href ? "text-accent-green-100" : ""
                  }`}
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLoginModal({ open: true, type: "login" })}
              className="px-2 py-1 text-accent-green-100 hover:text-accent-green-200"
            >
              Login
            </button>
            <button
              onClick={() => setLoginModal({ open: true, type: "signup" })}
              className="bg-accent-green-100 hover:bg-accent-green-200 px-2 py-1 rounded-md text-white duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <MobileNav
        navLinks={navLinks}
        pathname={pathname}
        closeModal={() => setMobileNav(false)}
        mobileNavIsOpen={mobileNav}
      />
      <AuthModal
        type={loginModal.type}
        open={loginModal.open}
        switchModal={(type: string) => setLoginModal({ open: true, type })}
        closeModal={() => setLoginModal((curr) => ({ ...curr, open: false }))}
      />
    </>
  );
}
