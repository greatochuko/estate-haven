import Image from "next/image";
import Link from "next/link";
import React from "react";
import { UserType } from "./AgentPropertyOffers";

export default function Agent({ agent }: { agent: UserType }) {
  return (
    <div className="flex flex-col gap-4 shadow-[#eee] shadow-[0_0_10px_1px] p-4 rounded-md">
      <div className="flex gap-2">
        <div className="relative rounded-full w-14 h-14 overflow-hidden">
          <Image
            src={agent.imageUrl}
            alt={agent.firstname + " " + agent.lastname}
            fill
            sizes="128px"
            className="object-cover"
          ></Image>
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="font-semibold text-xl">
            {agent.firstname + " " + agent.lastname}
          </h2>
          <p className="text-zinc-500">{agent.companyName}</p>
        </div>
      </div>
      <div className="flex flex-col text-sm">
        <p className="text-zinc-400 uppercase">Description</p>
        <p className="line-clamp-2">{agent.bio}</p>
      </div>
      <p className="flex items-center gap-1 font-bold text-sm">
        <svg
          height={22}
          width={22}
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
            {" "}
            <g id="Navigation / House_01">
              {" "}
              <path
                id="Vector"
                d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        12 Listings
      </p>
      <Link
        href={`/agents/${agent._id}`}
        className="block bg-accent-green-100 hover:bg-accent-green-200 p-2 rounded-md font-bold text-center text-white duration-300"
      >
        View Profile
      </Link>
    </div>
  );
}
