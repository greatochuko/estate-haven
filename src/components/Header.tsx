"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Agents", href: "/agents" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center mx-auto p-2 w-[95%] sm:w-[90%] max-w-7xl font-bold">
      <h1>Estate Haven</h1>
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
        <Link
          href={"/login"}
          className="px-2 py-1 text-accent-green-100 hover:text-accent-green-200"
        >
          Login
        </Link>
        <Link
          href={"/signup"}
          className="bg-accent-green-100 hover:bg-accent-green-200 px-2 py-1 rounded-md text-white duration-300"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
