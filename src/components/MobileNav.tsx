import { getUserSession } from "@/services/userServices";
import Link from "next/link";
import React from "react";
import { AgentType } from "./AgentPropertyOffers";
import ModalContainer from "./ModalContainer";

export default function MobileNav({
  user,
  navLinks,
  pathname,
  closeModal,
  mobileNavIsOpen,
  openAuthModal,
}: {
  user: AgentType | null;
  navLinks: {
    name: string;
    href: string;
  }[];
  pathname: string;
  closeModal: () => void;
  mobileNavIsOpen: boolean;
  openAuthModal: (type: string) => void;
}) {
  return (
    <ModalContainer
      closeModal={closeModal}
      open={mobileNavIsOpen}
      flexCenter={false}
    >
      <div
        className={`flex flex-col gap-4 sm:hidden bg-white w-[80%] max-w-80 h-dvh duration-200 p-8 ${
          mobileNavIsOpen ? "translate-x-0" : "-translate-x-[100%]"
        }`}
      >
        <h2 className="font-bold text-xl">Estate Haven</h2>
        <p className="font-semibold text-sm text-zinc-400">
          Welcome to our next-generation real estate platform, your ultimate
          destination for the latest property listings and market insights!
        </p>
        <ul className="flex flex-col gap-4">
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <Link
                href={navLink.href}
                className={`hover:text-accent-green-200 duration-300 w-full block py-1 ${
                  pathname === navLink.href
                    ? "text-accent-green-100 font-semibold"
                    : ""
                }`}
              >
                {navLink.name}
              </Link>
            </li>
          ))}
          {user ? (
            <li key="settings">
              <Link
                href="/settings"
                className={`hover:text-accent-green-200 duration-300 w-full block py-2 ${
                  pathname.includes("/settings")
                    ? "text-accent-green-100 font-semibold"
                    : ""
                }`}
              >
                Settings
              </Link>
            </li>
          ) : (
            <>
              <button
                className={`font-semibold bg-accent-green-100 duration-300 w-fit rounded-md px-4 text-white block py-2`}
                onClick={() => openAuthModal("login")}
              >
                Login
              </button>
              <button
                className={`font-semibold bg-accent-green-100 duration-300 w-fit rounded-md px-4 text-white block py-2`}
                onClick={() => openAuthModal("sign-up")}
              >
                Sign Up
              </button>
            </>
          )}
        </ul>

        <p className="mt-auto font-semibold text-sm text-zinc-500">
          &copy; 2024 Estate Haven
        </p>
      </div>
    </ModalContainer>
  );
}
