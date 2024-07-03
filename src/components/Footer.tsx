import Link from "next/link";
import React from "react";
import { locations } from "./PropertiesByLocationSection";

const socialLinks = [
  { name: "Facebook", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "GitHub", url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-100 mt-10 py-16 font-semibold text-sm text-zinc-600 sm:text-base">
      <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 mx-auto px-4 w-[95%] sm:w-[90%] max-w-7xl">
        <div className="flex flex-col gap-2 w-48">
          <h3 className="font-bold text-xl text-zinc-900">Estate Haven</h3>
          <p>1234 Example Road Suite 567 Lagos, NG 100001 Nigeria</p>
          <p>greatochuko123@gmail.com</p>
        </div>
        <div className="flex flex-col justify-self-end sm:justify-self-auto gap-2 w-32 sm:w-48">
          <h3 className="font-bold text-xl text-zinc-900">Company</h3>
          <ul className="flex flex-col">
            <li>
              <Link
                href={"/about"}
                className="block p-1 hover:text-accent-green-100"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/properties"}
                className="block p-1 hover:text-accent-green-100"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href={"/agents"}
                className="block p-1 hover:text-accent-green-100"
              >
                Agents
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="block p-1 hover:text-accent-green-100"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-48">
          <h3 className="font-bold text-xl text-zinc-900">Cities</h3>
          <ul className="flex flex-col">
            {locations.slice(0, 4).map((location) => (
              <li key={location.id}>
                <Link
                  href={`/properties/?city=${location.city}`}
                  className="block p-1 hover:text-accent-green-100"
                >
                  {location.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-self-end sm:justify-self-auto gap-2 w-32 sm:w-48">
          <h3 className="font-bold text-xl text-zinc-900">Social</h3>
          <ul className="flex flex-col">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.name}>
                <Link
                  href={socialLink.url}
                  className="block p-1 hover:text-accent-green-100"
                >
                  {socialLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
