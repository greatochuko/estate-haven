import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex-col flex-center gap-4 my-auto font-bold">
      <h1 className="font-bold text-4xl text-accent-green-100 sm:text-5xl">
        404
      </h1>
      <h2 className="font-bold text-xl sm:text-2xl">PAGE NOT FOUND</h2>
      <p className="max-w-xl text-center text-sm text-zinc-500 sm:text-base">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable
      </p>
      <Link
        href={"/"}
        className="bg-accent-green-100 hover:bg-accent-green-200 px-4 p-2 rounded-full font-bold text-white duration-300"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
}
