"use client";
import React from "react";
import ModalContainer from "./ModalContainer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { loginWithDemoUser } from "@/actions/authActions";
import { useFormStatus } from "react-dom";
import LoadingIndicator from "./LoadingIndicator";

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
        className="relative flex flex-col gap-4 bg-white p-4 md:p-8 rounded-md w-[90%] max-w-xl max-h-[95dvh] md:max-h-[90dvh] overflow-y-scroll no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div className="flex flex-col justify-between gap-4 p-4 md:p-8"> */}
        <h1 className="mb-2 font-bold text-xl sm:text-2xl capitalize">
          {type}
        </h1>
        {type === "login" ? (
          <LoginForm switchModal={switchModal} closeModal={closeModal} />
        ) : (
          <SignupForm switchModal={switchModal} closeModal={closeModal} />
        )}
        <form action={loginWithDemoUser} className="flex">
          <LoginWithDemoUserButton />
        </form>
        {/* </div> */}
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

function LoginWithDemoUserButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="flex-1 flex-center border-accent-green-100 bg-accent-green-100 hover:bg-accent-green-200 p-2 border rounded-md font-bold text-white duration-300 disabled:cursor-not-allowed"
    >
      {pending ? <LoadingIndicator /> : "Sign in with demo user"}
    </button>
  );
}
