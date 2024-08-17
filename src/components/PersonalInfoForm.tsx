"use client";
import React, { useState } from "react";
import { AgentType } from "./AgentPropertyOffers";
import { updatePersonalInfo } from "@/actions/userActions";
import { useFormStatus } from "react-dom";

export default function PersonalInfoForm({ user }: { user: AgentType }) {
  return (
    <form action={updatePersonalInfo}>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="firstname" className="font-bold">
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="p-2 border rounded-md"
          defaultValue={user.firstname}
        />
      </div>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="lastname" className="font-bold">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="p-2 border rounded-md"
          defaultValue={user.lastname}
        />
      </div>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="companyName" className="font-bold">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="p-2 border rounded-md"
          defaultValue={user.companyName}
        />
      </div>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="workEmail" className="font-bold">
          workEmail
        </label>
        <input
          type="workEmail"
          id="workEmail"
          name="workEmail"
          className="p-2 border rounded-md"
          defaultValue={user.workEmail}
        />
      </div>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="phoneNumber" className="font-bold">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          className="p-2 border rounded-md"
          defaultValue={user.phoneNumber}
        />
      </div>

      <h2 className="my-4 mt-8 font-bold text-2xl">Social Links</h2>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="facebook" className="font-bold">
          Facebook
        </label>
        <input
          type="text"
          id="facebook"
          name="facebook"
          className="p-2 border rounded-md"
          defaultValue={user.facebook}
        />
      </div>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="linkedIn" className="font-bold">
          LinkedIn
        </label>
        <input
          type="text"
          id="linkedIn"
          name="linkedIn"
          className="p-2 border rounded-md"
          defaultValue={user.linkedIn}
        />
      </div>
      <div className="flex flex-col gap-1 border-zinc-100 py-2">
        <label htmlFor="instagram" className="font-bold">
          Instagram
        </label>
        <input
          type="text"
          id="instagram"
          name="instagram"
          className="p-2 border rounded-md"
          defaultValue={user.instagram}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <SubmitButton />
        <button
          type="button"
          className="flex items-center gap-1 p-2 font-semibold text-red-400 hover:text-red-500 duration-300 group"
        >
          <svg
            height={20}
            width={20}
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
                d="M10 12V17"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-red-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14 12V17"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-red-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M4 7H20"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-red-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-red-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                className="group-hover:stroke-red-500 duration-300 stroke-red-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          Delete Account
        </button>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-accent-green-100 hover:bg-accent-green-200 px-8 p-2 rounded-md w-full sm:w-fit font-bold text-white duration-300"
    >
      {pending ? "Saving..." : "Save Changes"}
    </button>
  );
}
