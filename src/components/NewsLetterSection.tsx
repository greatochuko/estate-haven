"use client";
import { subscribeToNewsletter } from "@/actions/newsletterActions";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import LoadingIndicator from "./LoadingIndicator";

export default function NewsLetterSection() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    const { done, error } = await subscribeToNewsletter(
      new FormData(e.target as HTMLFormElement)
    );
    setEmail("");
    setPending(false);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 bg-accent-green-100 p-4 sm:p-8 rounded-xl text-center text-white">
      <h1 className="font-bold text-2xl sm:text-3xl">
        Ready to find your new home?
      </h1>
      <p className="mx-auto max-w-[30rem] text-sm sm:text-base">
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
          className="flex-1 bg-white p-4 pr-28 sm:pr-28 rounded-lg w-full text-zinc-800 text-sm"
          placeholder="Enter your email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          disabled={pending}
          type="submit"
          className="top-[50%] right-2 absolute text-sm font-semibold flex-center bg-accent-green-100 disabled:bg-accent-green-100/50 p-2 rounded-md w-24 -translate-y-[50%]"
        >
          {pending ? <LoadingIndicator /> : "Join Now"}
        </button>
      </form>
    </div>
  );
}
