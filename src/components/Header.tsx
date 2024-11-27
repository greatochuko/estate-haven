"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import AuthModal from "./AuthModal";
import MobileNav from "./MobileNav";
import { UserType } from "./AgentPropertyOffers";
import Image from "next/image";
import UserDropdownMenu from "./UserDropdownMenu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Agents", href: "/agents" },
];

export default function Header({ user }: { user: UserType | null }) {
  const pathname = usePathname();
  const [authModal, setAuthModal] = useState({ open: false, type: "" });
  const [mobileNav, setMobileNav] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setdropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="top-0 z-30 sticky bg-white shadow-[#eee] shadow-md">
        <div className="flex justify-between items-center mx-auto py-3 p-2 w-[95%] sm:w-[90%] max-w-7xl">
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
          <Link href={"/"} className="font-bold">
            Estate Haven
          </Link>
          <ul className="sm:flex items-center gap-4 hidden font-semibold">
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
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-1 cursor-pointer group"
                onClick={() => setdropdown((curr) => !curr)}
              >
                <div className="relative bg-zinc-100 sm:mr-1 rounded-full w-10 h-10 overflow-hidden">
                  <Image
                    src={user.imageUrl}
                    alt={user.firstname + " " + user.lastname}
                    fill
                    sizes="128px"
                    className="object-cover"
                  ></Image>
                </div>
                <p className="sm:block hidden">
                  {user.firstname} {user.lastname}
                </p>
                <div className={`duration-300 ${dropdown ? "rotate-180" : ""}`}>
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
                      <g id="Arrow / Caret_Down_MD">
                        {" "}
                        <path
                          id="Vector"
                          d="M16 10L12 14L8 10"
                          stroke="#999"
                          className={"group-hover:stroke-black duration-300"}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <UserDropdownMenu
                user={user}
                dropdownIsOpen={dropdown}
                closeDropdown={() => setdropdown(false)}
              />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setAuthModal({ open: true, type: "login" })}
                className="px-2 py-1 font-semibold text-accent-green-100 hover:text-accent-green-200"
              >
                Login
              </button>
              <button
                onClick={() => setAuthModal({ open: true, type: "signup" })}
                className="bg-accent-green-100 hover:bg-accent-green-200 px-2 py-1 rounded-md font-semibold text-white duration-300"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </header>
      <MobileNav
        user={user}
        navLinks={navLinks}
        pathname={pathname}
        closeModal={() => setMobileNav(false)}
        mobileNavIsOpen={mobileNav}
        openAuthModal={(type: string) => setAuthModal({ open: true, type })}
      />

      {!user && (
        <AuthModal
          key={"not-authenticated"}
          type={authModal.type}
          open={authModal.open}
          switchModal={(type: string) => setAuthModal({ open: true, type })}
          closeModal={() => setAuthModal((curr) => ({ ...curr, open: false }))}
        />
      )}
    </>
  );
}
