import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Paginator({ maxPage }: { maxPage: number }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const arrayFromPages = Array.from(Array(maxPage), (_, i) => i + 1);

  const pagesArray =
    arrayFromPages.length > 5
      ? [
          currentPage > 2
            ? currentPage > arrayFromPages[maxPage - 4]
              ? arrayFromPages[maxPage - 5]
              : currentPage - 2
            : 1,
          currentPage > 2
            ? currentPage >= arrayFromPages[maxPage - 3]
              ? arrayFromPages[maxPage - 4]
              : currentPage - 1
            : 2,
          currentPage > 2
            ? currentPage >= arrayFromPages[maxPage - 2]
              ? arrayFromPages[maxPage - 3]
              : currentPage
            : 3,
          arrayFromPages[maxPage - 2],
          arrayFromPages[maxPage - 1],
        ]
      : arrayFromPages;

  function gotoNextPage() {
    if (currentPage >= maxPage) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", (currentPage + 1).toString());
    router.push(`/properties?${newSearchParams.toString()}`);
  }

  function gotoPrevPage() {
    if (currentPage <= 1) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", (currentPage - 1).toString());
    router.push(`/properties?${newSearchParams.toString()}`);
  }

  function gotoPage(num: number) {
    if (num <= 0 || num > maxPage) return;
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", num.toString());
    router.push(`/properties?${newSearchParams.toString()}`);
  }

  return (
    <div className="flex-center gap-2">
      <button
        onClick={gotoPrevPage}
        disabled={currentPage <= 1}
        className="flex-center hover:bg-zinc-200 active:bg-zinc-300 rounded-full w-9 h-9 duration-300 group"
      >
        <svg
          height={24}
          width={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="matrix(-1, 0, 0, 1, 0, 0)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
              fill="#000000"
              className="group-hover:fill-accent-green-200 group-disabled:fill-zinc-400 fill-accent-green-100"
            ></path>
          </g>
        </svg>
      </button>
      {pagesArray.map((page, i) => (
        <>
          <button
            onClick={() => gotoPage(page)}
            className={`${
              currentPage === page
                ? "text-white bg-accent-green-100 hover:bg-accent-green-200"
                : "hover:text-accent-green-200 hover:bg-zinc-200"
            }  rounded-full w-9 h-9 font-bold duration-300`}
          >
            {page}
          </button>
          {i === 2 && maxPage > 5 ? (
            <span className="font-black">...</span>
          ) : null}
        </>
      ))}
      <button
        disabled={currentPage >= maxPage}
        onClick={gotoNextPage}
        className="flex-center hover:bg-zinc-200 active:bg-zinc-300 rounded-full w-9 h-9 duration-300 group"
      >
        <svg
          height={24}
          width={24}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
              fill="#000000"
              className="group-hover:fill-accent-green-200 group-disabled:fill-zinc-400 fill-accent-green-100"
            ></path>
          </g>
        </svg>
      </button>
    </div>
  );
}
