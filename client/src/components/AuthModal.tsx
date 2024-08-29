"use client";
import React from "react";
import ModalContainer from "./ModalContainer";
import Image from "next/image";
import loginBackground from "../../public/login-bg.jpg";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthModal({
  type,
  open,
  switchModal,
  closeModal,
}: {
  type: string;
  open: boolean;
  switchModal: (type: string) => void;
  closeModal: () => void;
}) {
  return (
    <ModalContainer open={open} closeModal={closeModal}>
      <div
        className="relative flex gap-2 bg-white p-2 rounded-md w-[90%] max-w-xl max-h-[95dvh] md:max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col flex-[1_0_50%] justify-between gap-4 md:gap-8 p-4 md:p-8">
          <h1 className="font-semibold text-xl sm:text-2xl capitalize">
            {type}
          </h1>
          {type === "login" ? (
            <LoginForm switchModal={switchModal} closeModal={closeModal} />
          ) : (
            <SignupForm switchModal={switchModal} closeModal={closeModal} />
          )}
        </div>
        <button
          onClick={closeModal}
          className="top-2 right-2 absolute p-2 rounded-full group"
        >
          <svg
            height={24}
            width={24}
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Close">
                  <rect
                    id="Rectangle"
                    fillRule="nonzero"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  ></rect>
                  <line
                    x1="16.9999"
                    y1="7"
                    x2="7.00001"
                    y2="16.9999"
                    id="Path"
                    stroke="#fff"
                    className="group-hover:stroke-black duration-300 stroke-zinc-400"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                  <line
                    x1="7.00006"
                    y1="7"
                    x2="17"
                    y2="16.9999"
                    id="Path"
                    stroke="#fff"
                    className="group-hover:stroke-black duration-300 stroke-zinc-400"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></line>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </ModalContainer>
  );
}
