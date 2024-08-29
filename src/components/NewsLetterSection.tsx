"use client";
import React, { useState } from "react";

export default function NewsLetterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 bg-accent-green-100 p-4 sm:p-8 rounded-xl min-h-72 text-center text-white aspect-[3]">
      <h1 className="font-bold text-[min(max(1.4rem,_4vw),_2.5rem)]">
        Ready to find your new home?
      </h1>
      <p className="mx-auto max-w-[30rem] text-[min(max(.9rem,_2.5vw),_1.1rem)]">
        Sign Up for Our Newsletter to Receive Exclusive Property Listings,
        Market Trends, and Expert Real Estate Advice Delivered Straight to Your
        Inbox
      </p>
      <form
        className="relative flex w-full max-w-[30rem]"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="flex-1 bg-white p-4 pr-28 sm:pr-28 rounded-xl w-full text-zinc-800"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="top-[50%] right-2 absolute bg-accent-green-100 px-4 p-2 rounded-md -translate-y-[50%]"
        >
          Join Now
        </button>
      </form>
    </div>
  );
}
