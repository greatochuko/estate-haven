"use client";
import React, { useActionState, useState } from "react";
import { UserType } from "./AgentPropertyOffers";
import { updatePersonalInfo } from "@/actions/userActions";
import { useFormStatus } from "react-dom";
import DeleteAccountModal from "./DeleteAccountModal";
import { uploadProfileImage } from "@/utils/imageUploader";
import LoadingIndicator from "./LoadingIndicator";
import Image from "next/image";

export default function PersonalInfoForm({ user }: { user: UserType }) {
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [bio, setBio] = useState(user.bio);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);
  const [companyName, setCompanyName] = useState(user.companyName);
  const [workEmail, setWorkEmail] = useState(user.workEmail);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [facebook, setFacebook] = useState(user.facebook);
  const [linkedIn, setLinkedIn] = useState(user.linkedIn);
  const [instagram, setInstagram] = useState(user.instagram);
  const [imagePending, setImagePending] = useState(false);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setImagePending(true);
    const { url } = await uploadProfileImage(file);
    url && setImageUrl(url);
    setImagePending(false);
  }

  return (
    <>
      <form action={updatePersonalInfo}>
        <div className="flex flex-col gap-1 border-zinc-100 py-2">
          <label htmlFor="first-name" className="font-bold">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            className="p-2 border rounded-md"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 border-zinc-100 py-2">
          <label htmlFor="last-name" className="font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            className="p-2 border rounded-md"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="flex flex-col flex-[3] gap-1 border-zinc-100 py-2">
          <label htmlFor="bio" className="font-bold">
            Bio
          </label>
          <div className="flex sm:flex-row flex-col gap-4">
            <textarea
              name="bio"
              id="bio"
              placeholder="Write about yourself"
              value={bio}
              className="flex-1 p-2 border rounded-md min-h-40 resize-none"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
            <div className="flex w-48 h-40">
              <label
                htmlFor="profileImage"
                onClick={(e) =>
                  imageUrl !== user.imageUrl ? e.preventDefault() : null
                }
                className={`relative flex-1 flex-center border-zinc-300 bg-[#f6f6f6] hover:bg-[#eee] border border-dashed rounded-lg font-bold text-zinc-600 duration-200 ${
                  imageUrl === user.imageUrl ? "cursor-pointer" : ""
                } overflow-hidden`}
              >
                {imageUrl !== user.imageUrl ? (
                  <>
                    <Image
                      src={imageUrl}
                      alt={firstname + " " + lastname}
                      fill
                      sizes="640px"
                      className="object-cover"
                    ></Image>
                    <button
                      onClick={() => setImageUrl(user.imageUrl)}
                      className="top-2 right-2 absolute flex-center bg-black/50 hover:bg-black rounded-full w-6 h-6 text-white duration-300"
                    >
                      <svg
                        height={20}
                        width={20}
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
                                strokeWidth="2"
                                strokeLinecap="round"
                              ></line>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </>
                ) : imagePending ? (
                  <LoadingIndicator />
                ) : (
                  <div className="z-10 flex-col flex-center gap-1">
                    <svg
                      height={40}
                      width={40}
                      viewBox="0 0 192 192"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#333"
                          d="M60 50v6a6 6 0 0 0 4.8-2.4L60 50Zm12-16v-6a6 6 0 0 0-4.8 2.4L72 34Zm60 16-4.8 3.6A6 6 0 0 0 132 56v-6Zm-12-16 4.8-3.6A6 6 0 0 0 120 28v6Zm44 32v76h12V66h-12Zm-10 86H38v12h116v-12ZM28 142V66H16v76h12Zm10-86h22V44H38v12Zm26.8-2.4 12-16-9.6-7.2-12 16 9.6 7.2ZM132 56h22V44h-22v12Zm4.8-9.6-12-16-9.6 7.2 12 16 9.6-7.2ZM120 28H72v12h48V28ZM38 152c-5.523 0-10-4.477-10-10H16c0 12.15 9.85 22 22 22v-12Zm126-10c0 5.523-4.477 10-10 10v12c12.15 0 22-9.85 22-22h-12Zm12-76c0-12.15-9.85-22-22-22v12c5.523 0 10 4.477 10 10h12ZM28 66c0-5.523 4.477-10 10-10V44c-12.15 0-22 9.85-22 22h12Z"
                        ></path>
                        <circle
                          cx="96"
                          cy="102"
                          r="28"
                          stroke="#333"
                          strokeWidth="12"
                        ></circle>
                      </g>
                    </svg>
                    Change Picture
                  </div>
                )}
              </label>
              <input
                hidden
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <input type="hidden" name="imageUrl" value={imageUrl} />
          </div>
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 border-zinc-100 py-2">
          <label htmlFor="workEmail" className="font-bold">
            workEmail
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            className="p-2 border rounded-md"
            value={workEmail}
            onChange={(e) => setWorkEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1 border-zinc-100 py-2">
          <label htmlFor="phoneNumber" className="font-bold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="p-2 border rounded-md"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <h2 className="my-4 mt-8 font-bold text-2xl">Social Links</h2>
        <div className="flex flex-col gap-1 border-zinc-100 py-2">
          <label htmlFor="facebook" className="font-bold">
            Facebook
          </label>
          <input
            type="url"
            id="facebook"
            name="facebook"
            className="p-2 border rounded-md"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 border-zinc-100 py-2">
          <label htmlFor="linkedIn" className="font-bold">
            LinkedIn
          </label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            className="p-2 border rounded-md"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 border-zinc-100 py-2">
          <label htmlFor="instagram" className="font-bold">
            Instagram
          </label>
          <input
            type="url"
            id="instagram"
            name="instagram"
            className="p-2 border rounded-md"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>

        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mt-4">
          <SubmitButton imagePending={imagePending} />
          <button
            type="button"
            className="flex items-center gap-1 p-2 font-semibold text-red-400 hover:text-red-500 duration-300 group"
            onClick={() => setDeleteAccountModal(true)}
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
      <DeleteAccountModal
        closeModal={() => setDeleteAccountModal(false)}
        open={deleteAccountModal}
      />
    </>
  );
}

function SubmitButton({ imagePending }: { imagePending: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || imagePending}
      className="bg-accent-green-100 hover:bg-accent-green-200 px-8 p-2 rounded-md w-full sm:w-fit font-bold text-white duration-300"
    >
      {pending ? <LoadingIndicator color="white" /> : "Save Changes"}
    </button>
  );
}
