"use client";
import React, { useState } from "react";
import AuthModal from "./AuthModal";

export default function UserNotAuthenticatedPage() {
  const [authModal, setAuthModal] = useState({ type: "", open: false });
  return (
    <>
      <div className="flex-col flex-1 flex-center gap-1">
        <svg
          height={20}
          width={20}
          fill="#333"
          viewBox="-3.5 0 19 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M11.182 8.927v6.912a.794.794 0 0 1-.792.792H1.61a.794.794 0 0 1-.792-.792V8.927a.794.794 0 0 1 .792-.792h.856V6.367a3.534 3.534 0 1 1 7.068 0v1.768h.856a.794.794 0 0 1 .792.792zm-2.756-2.56a2.426 2.426 0 1 0-4.852 0v1.768h4.852zM7.108 11.47a1.108 1.108 0 1 0-1.583 1.001v1.849a.475.475 0 0 0 .95 0v-1.849a1.108 1.108 0 0 0 .633-1.001z"></path>
          </g>
        </svg>
        <p>
          Please{" "}
          <button
            className="p-1 font-semibold text-accent-green-100 hover:text-accent-green-200"
            onClick={() => setAuthModal({ type: "login", open: true })}
          >
            Login
          </button>{" "}
          to access this page.
        </p>
      </div>
      <AuthModal
        open={authModal.open}
        closeModal={() => setAuthModal((curr) => ({ ...curr, open: false }))}
        switchModal={(type: string) =>
          setAuthModal((curr) => ({ ...curr, type }))
        }
        type={authModal.type}
      />
    </>
  );
}
