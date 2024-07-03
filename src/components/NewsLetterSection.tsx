import React from "react";

export default function NewsLetterSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 bg-accent-green-100 p-8 rounded-xl min-h-72 text-center text-white aspect-[3]">
      <h1 className="font-bold text-[min(max(1.2rem,_4vw),_2.5rem)]">
        Ready to find your new home?
      </h1>
      <p className="mx-auto max-w-[30rem] text-[min(max(.9rem,_3vw),_1.2rem)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem qui non
        quasi, quaerat facilis sint harum ea! Exercitationem ipsa.
      </p>
      <form className="relative flex w-full max-w-[30rem]">
        <input
          type="text"
          className="flex-1 bg-white p-4 pr-28 sm:pr-28 rounded-xl text-zinc-800"
          placeholder="Enter your email"
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
