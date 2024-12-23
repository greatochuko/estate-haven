"use client";
import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [pending, setPending] = useState(false);

  function handleSearchProperties(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const newSearchParams = new URLSearchParams(searchParams);
    query ? newSearchParams.set("q", query) : newSearchParams.delete("q");
    router.push(`/properties?${newSearchParams.toString()}`);
    setPending(false);
  }

  return (
    <form
      className="relative flex items-center gap-2 text-sm"
      onSubmit={handleSearchProperties}
    >
      <div className="top-[50%] left-2 absolute -translate-y-[50%]">
        <svg
          width={18}
          height={18}
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
              d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </div>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter an address e.g. street, city, state or zip"
        className="flex-1 border-2 px-4 py-1.5 pl-8 rounded-md"
      />
      <button
        disabled={pending}
        type="submit"
        className="flex-center gap-2 border-2 disabled:bg-accent-green-100/50 border-accent-green-100 hover:border-accent-green-200 bg-accent-green-100 hover:bg-accent-green-200 px-4 py-1.5 rounded-md font-bold text-white duration-300"
      >
        {pending ? (
          <>
            <LoadingIndicator size={18} /> Searching...
          </>
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
}
