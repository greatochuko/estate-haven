"use client";
import React from "react";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const eventTarget = e.target as HTMLFormElement;
    eventTarget.reset();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-zinc-100 p-4 sm:p-8 rounded-md"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="fullName" className="font-bold">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="p-2 border rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="your-email" className="font-bold">
          Your Email
        </label>
        <input
          type="email"
          name="your-email"
          id="your-email"
          className="p-2 border rounded-md"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-bold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="p-2 border rounded-md max-h-40 aspect-video resize-none"
        ></textarea>
      </div>

      <button className="bg-accent-green-100 hover:bg-accent-green-200 p-2 rounded-md font-bold text-white sm:text-lg duration-300">
        Send
      </button>
    </form>
  );
}
