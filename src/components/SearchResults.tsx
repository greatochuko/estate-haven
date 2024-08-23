"use client";
import React, { useState } from "react";
import Property, { PropertyType } from "./Property";
import Paginator from "./Paginator";

export default function SearchResults({
  showFilter,
  properties,
}: {
  showFilter: () => void;
  properties: PropertyType[];
}) {
  const [sortBy, setSortBy] = useState("popular");
  let sortedProperties = properties;

  // Sort Properties
  if (sortBy === "popular")
    sortedProperties = sortedProperties
      .map((_) => _)
      .sort((a, b) => a.views - b.views);
  if (sortBy === "oldest")
    sortedProperties = sortedProperties
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
      );
  if (sortBy === "newest")
    sortedProperties = sortedProperties
      .map((_) => _)
      .sort(
        (a, b) =>
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
      );
  if (sortBy === "least-expensive")
    sortedProperties = sortedProperties
      .map((_) => _)
      .sort(
        (a, b) => new Date(a.price).getTime() - new Date(b.price).getTime()
      );
  if (sortBy === "most-expensive")
    sortedProperties = sortedProperties
      .map((_) => _)
      .sort(
        (a, b) => new Date(b.price).getTime() - new Date(a.price).getTime()
      );

  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h3 className="font-bold whitespace-nowrap">
          Results: {properties.length} Properties found
        </h3>
        <div className="flex items-center gap-2 w-full lg:w-fit text-sm sm:text-base">
          <label htmlFor="sort-by">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            name="sort-by"
            id="sort-by"
            className="border-2 p-1 sm:p-2 rounded-lg focus-visible:ring ring-accent-green-100"
          >
            <option value="popular">Popular</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="most-expensive">Most Expensive</option>
            <option value="least-expensive">Least Expensive</option>
          </select>
          <button
            onClick={showFilter}
            className="flex items-center gap-1 lg:hidden bg-accent-green-100 hover:bg-accent-green-200 ml-auto px-4 p-2 rounded-md text-white"
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
                  d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            Filter
          </button>
        </div>
      </div>
      {sortedProperties.length ? (
        <div className="gap-6 grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] mb-4">
          {sortedProperties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>
      ) : (
        <div className="flex-col flex-1 flex-center gap-4">
          <svg
            height={40}
            width={40}
            viewBox="-0.5 0 25 25"
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
                d="M22 11.8201C22 9.84228 21.4135 7.90885 20.3147 6.26436C19.2159 4.61987 17.6542 3.33813 15.8269 2.58126C13.9996 1.82438 11.9889 1.62637 10.0491 2.01223C8.10927 2.39808 6.32748 3.35052 4.92896 4.74904C3.53043 6.14757 2.578 7.92935 2.19214 9.86916C1.80629 11.809 2.00436 13.8197 2.76123 15.6469C3.51811 17.4742 4.79985 19.036 6.44434 20.1348C8.08883 21.2336 10.0222 21.8201 12 21.8201"
                stroke="#000000"
                className="stroke-accent-green-100"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2 11.8201H22"
                stroke="#000000"
                className="stroke-accent-green-100"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 21.8201C10.07 21.8201 8.5 17.3401 8.5 11.8201C8.5 6.30007 10.07 1.82007 12 1.82007C13.93 1.82007 15.5 6.30007 15.5 11.8201"
                stroke="#000000"
                className="stroke-accent-green-100"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.3691 21.6901C20.3021 21.6901 21.8691 20.1231 21.8691 18.1901C21.8691 16.2571 20.3021 14.6901 18.3691 14.6901C16.4361 14.6901 14.8691 16.2571 14.8691 18.1901C14.8691 20.1231 16.4361 21.6901 18.3691 21.6901Z"
                stroke="#000000"
                className="stroke-accent-green-100"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M22.9998 22.8202L20.8398 20.6702"
                stroke="#000000"
                className="stroke-accent-green-100"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <p className="max-w-xl text-center">
            Sorry, we couldn't find any results matching your search. Try
            adjusting your keywords or explore related topics below.
          </p>
        </div>
      )}
      <Paginator maxPage={Math.ceil(sortedProperties.length / 9)} />
    </div>
  );
}
