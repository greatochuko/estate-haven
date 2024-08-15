import Link from "next/link";
import React from "react";
import ModalContainer from "./ModalContainer";

export default function MobileNav({
  navLinks,
  pathname,
  closeModal,
  mobileNavIsOpen,
}: {
  navLinks: {
    name: string;
    href: string;
  }[];
  pathname: string;
  closeModal: () => void;
  mobileNavIsOpen: boolean;
}) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50 duration-300 z-40 ${
        mobileNavIsOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeModal}
    >
      <ul
        className={`flex flex-col gap-4 sm:hidden bg-white w-[80%] max-w-80 h-dvh duration-200 p-8 ${
          mobileNavIsOpen ? "translate-x-0" : "-translate-x-[100%]"
        }`}
      >
        <h2 className="font-bold text-xl">Estate Haven</h2>
        <p className="font-semibold text-sm text-zinc-400">
          Welcome to our next-generation real estate platform, your ultimate
          destination for the latest property listings and market insights!
        </p>
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
        <p className="mt-auto font-semibold text-sm text-zinc-500">
          &copy; 2024 Estate Haven
        </p>
      </ul>
    </div>
  );
}
