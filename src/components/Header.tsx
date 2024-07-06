"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import AuthModal from "./AuthModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Agents", href: "/agents" },
];

export default function Header() {
  const pathname = usePathname();
  const [loginModal, setLoginModal] = useState({ open: false, type: "" });

  return (
    <>
      <header className="flex justify-between items-center bg-white mx-auto px-2 p-3 w-[95%] sm:w-[90%] max-w-7xl font-bold">
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
          <button
            onClick={() => setLoginModal({ open: true, type: "login" })}
            className="px-2 py-1 text-accent-green-100 hover:text-accent-green-200"
          >
            Login
          </button>
          <button
            onClick={() => setLoginModal({ open: true, type: "login" })}
            className="bg-accent-green-100 hover:bg-accent-green-200 px-2 py-1 rounded-md text-white duration-300"
          >
            Sign Up
          </button>
        </div>
      </header>
      <AuthModal
        type={loginModal.type}
        open={loginModal.open}
        switchModal={(type: string) => setLoginModal({ open: true, type })}
        closeModal={() => setLoginModal({ open: false, type: "" })}
      />
    </>
  );
}
