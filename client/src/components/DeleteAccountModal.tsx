import React from "react";
import ModalContainer from "./ModalContainer";

export default function DeleteAccountModal({
  closeModal,
  open,
}: {
  closeModal: () => void;
  open: boolean;
}) {
  return (
    <ModalContainer closeModal={closeModal} open={open}>
      <div
        className="flex flex-col bg-white rounded-md w-96 max-w-[90%] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-2 p-4 text-center">
          <div className="bg-red-100 p-2 rounded-full h-fit">
            <svg
              fill="#ef4444"
              height={20}
              width={20}
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 329.562 329.562"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M326.174,272.923l-139.5-241.568c-4.516-7.821-12.861-12.638-21.893-12.638c-9.031,0-17.377,4.816-21.893,12.638 L3.388,272.923c-4.518,7.821-4.518,17.46-0.002,25.282c4.516,7.822,12.862,12.641,21.895,12.641h279 c9.032,0,17.379-4.818,21.895-12.641C330.691,290.383,330.691,280.744,326.174,272.923z M25.281,285.565l139.5-241.568 l139.5,241.568H25.281z"></path>{" "}
                  <path d="M147.281,131.031l7.25,83c0.423,4.886,4.301,8.913,9.355,9.355c5.661,0.495,10.651-3.694,11.145-9.355l7.25-83 c0.078-0.97,0.088-2.057,0-3.057c-0.844-9.666-9.363-16.816-19.028-15.973C153.588,112.846,146.437,121.367,147.281,131.031z"></path>{" "}
                  <circle cx="164.781" cy="243.031" r="14.5"></circle>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <h2 className="font-bold text-lg">Delete Account?</h2>
          <p>
            We will immediately delete all data related to your account from our
            database. This action cannot be undone. Are you sure you want to
            continue?
          </p>
        </div>
        <div className="flex justify-end items-center gap-2 bg-[#eee] p-2">
          <button
            className="border-zinc-200 bg-white hover:bg-zinc-100 px-4 p-2 border rounded-md font-bold text-zinc-700 duration-300"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button className="bg-red-500 hover:bg-red-600 px-4 p-2 rounded-md font-bold text-white duration-300">
            Delete
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}
