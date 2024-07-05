import ImageGallery from "@/components/ImageGallery";
import ImageViewModal from "@/components/ImageViewModal";
import Rating from "@/components/Rating";
import { getProperty } from "@/services/propertyServices";
import { getReviews } from "@/services/reviewServices";
import { formatDateDuration } from "@/utils/dateFormatter";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function PropertyDetailsPage({
  params,
}: {
  params: { propertyId: string };
}) {
  const property = await getProperty(params.propertyId);
  if (!property) notFound();

  const reviews = await getReviews(property.agent.id);

  const liked = true;
  const disLiked = false;

  return (
    <div className="flex flex-col gap-4">
      <ImageGallery property={property} />
      <div className="flex md:flex-row flex-col gap-4">
        <div className="flex flex-col flex-[2] gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="flex justify-between items-center font-bold text-xl sm:text-2xl">
              {property.name}
              <span className="font-bold">
                ₦{property.price.toLocaleString()}
                {property.isRent && "/Mo"}
              </span>
            </h1>
            <p className="font-semibold text-zinc-600">
              {property.location.city}, {property.location.state}
              {property.location.state.toLowerCase() !== "fct" && "State"}
            </p>
            <p>{property.description}</p>
          </div>
          <hr className="border-[#eee]" />
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl sm:text-2xl">Property Features</h2>
            <div className="gap-2 grid grid-cols-2 md:grid-cols-3 font-semibold">
              <p>{property.beds} Bedrooms</p>
              <p>{property.bath} Bathrooms</p>
              <p>{property.area} SqFt</p>
              <p>Built in {property.yearBuilt}</p>
              {property.garageSpace ? (
                <p>{property.garageSpace} car garage</p>
              ) : (
                <p>No Parking</p>
              )}
              <p>{!property.petsAllowed && "No "}Pets Allowed</p>
              <p>Listed {formatDateDuration(property.dateCreated)} ago</p>
            </div>
          </div>
          <hr className="border-[#eee]" />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  height={22}
                  width={22}
                  fill="#ffd700"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffd700"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M30.859 12.545c-0.168-0.506-0.637-0.864-1.189-0.864h-9.535l-2.946-9.067c-0.208-0.459-0.662-0.772-1.188-0.772s-0.981 0.313-1.185 0.764l-0.003 0.008-2.946 9.067h-9.534c-0.69 0-1.25 0.56-1.25 1.25 0 0.414 0.202 0.782 0.512 1.009l0.004 0.002 7.713 5.603-2.946 9.068c-0.039 0.116-0.061 0.249-0.061 0.387 0 0.69 0.56 1.25 1.25 1.25 0.276 0 0.531-0.089 0.738-0.241l-0.004 0.002 7.714-5.605 7.713 5.605c0.203 0.149 0.458 0.238 0.734 0.238 0.691 0 1.251-0.56 1.251-1.251 0-0.138-0.022-0.271-0.064-0.395l0.003 0.009-2.947-9.066 7.715-5.604c0.314-0.231 0.515-0.598 0.515-1.013 0-0.137-0.022-0.27-0.063-0.393l0.003 0.009z"></path>
                  </g>
                </svg>
              </span>
              <h2 className="font-bold text-xl sm:text-2xl">
                4.5 (32 Reviews)
              </h2>
            </div>
            <div className="flex justify-between items-center pb-4 border-b">
              <button className="border-2 border-accent-green-100 hover:bg-accent-green-100 px-4 p-2 rounded-md font-semibold text-accent-green-100 hover:text-white duration-300">
                Add Review
              </button>
              <div className="flex items-center gap-2">
                <label htmlFor="sort-reviews">Sort by:</label>
                <select
                  name="sort-reviews"
                  id="sort-reviews"
                  className="p-2 border rounded-md font-semibold"
                >
                  <option value="popular">Popular</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="high-rating">High Rating</option>
                  <option value="low-rating">Low Rating</option>
                </select>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="flex flex-col gap-4 border-[#eee] pb-4 border-b"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative rounded-full w-12 h-12 overflow-hidden">
                      <Image
                        src={review.user.imageUrl}
                        alt={review.user.firstname + " " + review.user.lastname}
                        fill
                        sizes="96px"
                        className="object-cover"
                      ></Image>
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold">
                        {review.user.firstname} {review.user.lastname}
                      </h3>
                      <Rating rating={review.rating} size={14} />
                    </div>
                  </div>
                  <p className="text-zinc-600">{review.comment}</p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 group">
                      <svg
                        height={18}
                        width={18}
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#333"
                        className={
                          liked
                            ? "fill-accent-green-100 hover:fill-accent-green-200 duration-300"
                            : "fill-zinc-400 group-hover:fill-accent-green-100 duration-300"
                        }
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <style type="text/css"> </style>
                          <g>
                            <path d="M512,331.117c0-11.141-3.813-21.484-10.172-29.641c-2.469-3.156-5.422-5.891-8.578-8.375 c5-7.625,7.969-16.703,7.969-26.484c0-26.859-21.75-48.641-48.625-48.641h-35.5h-0.047h-0.5h-2.078c-1.516,0-2.078,0-2.078,0 c-0.422,0-0.797,0-1.313,0h-25.875c-6.688-0.297-13.406-1.047-18.766-2.469c-5.484-1.391-9.234-3.547-10.813-5.313 c-2.766-3.141-3.328-5.141-3.438-8.438c-0.031-2.797,0.844-6.594,2.688-10.922c2.719-6.5,7.453-13.953,12.219-21.156 c2.391-3.609,4.781-7.188,6.938-10.781s4.125-7.125,5.594-11.094c4.547-12.641,14.391-35.781,14.406-63.984 c0.016-11.859-1.75-24.672-6.375-37.813c-3.953-11.281-10.063-20.344-17.766-26.609c-7.672-6.281-17-9.625-26.266-9.594 c-11.031-0.016-21.719,4.641-29.875,12.719c-8.188,8.063-13.922,19.469-16.188,33.109c-0.719,4.453-2.969,12.453-6.594,21.891 c-5.422,14.203-13.891,32.016-24.688,49.422c-10.781,17.422-23.969,34.422-38.469,47.219 c-18.359,16.234-35.828,29.953-50.734,42.016c-14.922,12.141-27.234,22.344-35.766,32.828c-1.813,2.281-5.047,4.797-9.078,6.953 c-6.016,3.266-13.641,5.688-19.578,7.094c-2.969,0.719-5.531,1.219-7.313,1.531c-0.469,0.078-0.719,0.109-1.063,0.172v-5.203 H36.469C16.313,259.554,0,275.882,0,296.023v162.938c0,20.141,16.313,36.469,36.469,36.469h43.5 c13.438,0,24.313-10.875,24.313-24.313v-1.203c0.031,0,9.594,0,38.906,0c5.375-0.047,16.094,1.625,28.75,4.391 c19.156,4.109,43.328,10.453,66.859,15.969c23.609,5.484,46.344,10.219,64.266,10.906c19.047,0.719,33.078,1.016,44.203,1.016 c23.703,0.031,34.531-1.469,50.734-3.266l0.406-0.063l22.75-3.266l0.219-0.047c23.078-3.75,40.75-23.656,40.75-47.875 c0-3.141-0.406-6.156-1-9.094c6.219-2.688,11.875-6.5,16.406-11.391c8-8.578,12.953-20.219,12.938-32.907 c0.016-7.313-1.656-14.219-4.563-20.391C501.344,365.804,512,349.82,512,331.117z M51.281,456.586c-9.25,0-16.75-7.5-16.75-16.75 s7.5-16.75,16.75-16.75s16.75,7.5,16.75,16.75S60.531,456.586,51.281,456.586z M464.719,354.632 c-5.078,0.297-9.453,3.609-11.094,8.422c-1.625,4.797-0.188,10.094,3.625,13.422c5.156,4.516,8.297,10.719,8.313,17.813 c-0.016,6.234-2.359,11.719-6.266,15.922c-3.922,4.219-9.328,7-15.422,7.531c-4.188,0.359-7.969,2.859-9.938,6.578 c-1.969,3.703-1.938,8.219,0.125,11.906c2.031,3.641,3.156,7.438,3.156,11.453c0,11.766-8.563,21.391-19.844,23.281l-22.313,3.219 c-16.594,1.828-25.125,3.078-47.797,3.109c-10.672,0-24.422-0.297-43.297-1c-9.5-0.344-22.609-2.375-37.031-5.313 c-21.656-4.422-46.375-10.813-68.547-16.156c-11.109-2.672-21.578-5.078-30.859-6.859c-9.344-1.766-17.313-2.938-24.344-2.969 c-11.875,0-20.375,0-26.438,0V287.695c2.875-0.656,6.109-1.484,9.609-2.563c5.578-1.719,11.703-4.016,17.688-7.234 c5.953-3.219,11.875-7.344,16.656-13.234c5.859-7.328,17.391-17.281,32.063-29.109c14.688-11.891,32.547-25.922,51.547-42.719 c22.688-20.078,40.75-46.766,53.969-71.578c6.594-12.406,11.969-24.344,15.969-34.844c4.016-10.563,6.688-19.469,7.906-26.703 c1.531-9.219,5.125-15.531,9.094-19.453c4-3.906,8.297-5.516,12.375-5.531c3.453,0.016,6.938,1.109,10.531,4 c3.594,2.906,7.25,7.797,9.969,15.516c3.609,10.297,4.984,20.156,5,29.578c0,22.469-7.969,42.031-12.906,55.438 c-0.656,1.891-2.688,5.578-5.406,9.813c-4.109,6.453-9.703,14.313-14.469,23.016c-4.719,8.734-9,18.438-9.094,29.672 c-0.094,8.656,3.219,18.156,10.172,25.453c6.484,6.844,14.641,10.25,22.688,12.406c8.125,2.125,16.484,2.922,24.328,3.266 l0.531,0.016h26.109c0.516,0,0.891,0,1.313,0c0,0,1,0,2.078,0c0.094,0,0.172,0,0.281,0c0.719,0,1.344,0,1.797,0 c0.234,0,0.453,0,0.5,0h0.047h35.5c13.078,0.016,23.688,10.625,23.703,23.719c0,8.109-4.078,15.203-10.328,19.531 c-4,2.75-6.031,7.547-5.25,12.328c0.813,4.781,4.281,8.641,8.953,9.953c5.016,1.391,9.406,4.391,12.5,8.359 c3.078,3.984,4.891,8.859,4.891,14.328C487.094,343.679,477.219,353.882,464.719,354.632z"></path>
                          </g>
                        </g>
                      </svg>
                      <span className="text-zinc-400">(3)</span>
                    </button>
                    <button className="flex items-center gap-1 group">
                      <svg
                        height={18}
                        width={18}
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#333"
                        className={
                          disLiked
                            ? "fill-red-400 duration-300 hover:bg-red-500"
                            : "fill-zinc-400 group-hover:fill-red-400 duration-300"
                        }
                        transform="matrix(-1, 0, 0, -1, 0, 0)"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <style type="text/css"> </style>
                          <g>
                            <path d="M512,331.117c0-11.141-3.813-21.484-10.172-29.641c-2.469-3.156-5.422-5.891-8.578-8.375 c5-7.625,7.969-16.703,7.969-26.484c0-26.859-21.75-48.641-48.625-48.641h-35.5h-0.047h-0.5h-2.078c-1.516,0-2.078,0-2.078,0 c-0.422,0-0.797,0-1.313,0h-25.875c-6.688-0.297-13.406-1.047-18.766-2.469c-5.484-1.391-9.234-3.547-10.813-5.313 c-2.766-3.141-3.328-5.141-3.438-8.438c-0.031-2.797,0.844-6.594,2.688-10.922c2.719-6.5,7.453-13.953,12.219-21.156 c2.391-3.609,4.781-7.188,6.938-10.781s4.125-7.125,5.594-11.094c4.547-12.641,14.391-35.781,14.406-63.984 c0.016-11.859-1.75-24.672-6.375-37.813c-3.953-11.281-10.063-20.344-17.766-26.609c-7.672-6.281-17-9.625-26.266-9.594 c-11.031-0.016-21.719,4.641-29.875,12.719c-8.188,8.063-13.922,19.469-16.188,33.109c-0.719,4.453-2.969,12.453-6.594,21.891 c-5.422,14.203-13.891,32.016-24.688,49.422c-10.781,17.422-23.969,34.422-38.469,47.219 c-18.359,16.234-35.828,29.953-50.734,42.016c-14.922,12.141-27.234,22.344-35.766,32.828c-1.813,2.281-5.047,4.797-9.078,6.953 c-6.016,3.266-13.641,5.688-19.578,7.094c-2.969,0.719-5.531,1.219-7.313,1.531c-0.469,0.078-0.719,0.109-1.063,0.172v-5.203 H36.469C16.313,259.554,0,275.882,0,296.023v162.938c0,20.141,16.313,36.469,36.469,36.469h43.5 c13.438,0,24.313-10.875,24.313-24.313v-1.203c0.031,0,9.594,0,38.906,0c5.375-0.047,16.094,1.625,28.75,4.391 c19.156,4.109,43.328,10.453,66.859,15.969c23.609,5.484,46.344,10.219,64.266,10.906c19.047,0.719,33.078,1.016,44.203,1.016 c23.703,0.031,34.531-1.469,50.734-3.266l0.406-0.063l22.75-3.266l0.219-0.047c23.078-3.75,40.75-23.656,40.75-47.875 c0-3.141-0.406-6.156-1-9.094c6.219-2.688,11.875-6.5,16.406-11.391c8-8.578,12.953-20.219,12.938-32.907 c0.016-7.313-1.656-14.219-4.563-20.391C501.344,365.804,512,349.82,512,331.117z M51.281,456.586c-9.25,0-16.75-7.5-16.75-16.75 s7.5-16.75,16.75-16.75s16.75,7.5,16.75,16.75S60.531,456.586,51.281,456.586z M464.719,354.632 c-5.078,0.297-9.453,3.609-11.094,8.422c-1.625,4.797-0.188,10.094,3.625,13.422c5.156,4.516,8.297,10.719,8.313,17.813 c-0.016,6.234-2.359,11.719-6.266,15.922c-3.922,4.219-9.328,7-15.422,7.531c-4.188,0.359-7.969,2.859-9.938,6.578 c-1.969,3.703-1.938,8.219,0.125,11.906c2.031,3.641,3.156,7.438,3.156,11.453c0,11.766-8.563,21.391-19.844,23.281l-22.313,3.219 c-16.594,1.828-25.125,3.078-47.797,3.109c-10.672,0-24.422-0.297-43.297-1c-9.5-0.344-22.609-2.375-37.031-5.313 c-21.656-4.422-46.375-10.813-68.547-16.156c-11.109-2.672-21.578-5.078-30.859-6.859c-9.344-1.766-17.313-2.938-24.344-2.969 c-11.875,0-20.375,0-26.438,0V287.695c2.875-0.656,6.109-1.484,9.609-2.563c5.578-1.719,11.703-4.016,17.688-7.234 c5.953-3.219,11.875-7.344,16.656-13.234c5.859-7.328,17.391-17.281,32.063-29.109c14.688-11.891,32.547-25.922,51.547-42.719 c22.688-20.078,40.75-46.766,53.969-71.578c6.594-12.406,11.969-24.344,15.969-34.844c4.016-10.563,6.688-19.469,7.906-26.703 c1.531-9.219,5.125-15.531,9.094-19.453c4-3.906,8.297-5.516,12.375-5.531c3.453,0.016,6.938,1.109,10.531,4 c3.594,2.906,7.25,7.797,9.969,15.516c3.609,10.297,4.984,20.156,5,29.578c0,22.469-7.969,42.031-12.906,55.438 c-0.656,1.891-2.688,5.578-5.406,9.813c-4.109,6.453-9.703,14.313-14.469,23.016c-4.719,8.734-9,18.438-9.094,29.672 c-0.094,8.656,3.219,18.156,10.172,25.453c6.484,6.844,14.641,10.25,22.688,12.406c8.125,2.125,16.484,2.922,24.328,3.266 l0.531,0.016h26.109c0.516,0,0.891,0,1.313,0c0,0,1,0,2.078,0c0.094,0,0.172,0,0.281,0c0.719,0,1.344,0,1.797,0 c0.234,0,0.453,0,0.5,0h0.047h35.5c13.078,0.016,23.688,10.625,23.703,23.719c0,8.109-4.078,15.203-10.328,19.531 c-4,2.75-6.031,7.547-5.25,12.328c0.813,4.781,4.281,8.641,8.953,9.953c5.016,1.391,9.406,4.391,12.5,8.359 c3.078,3.984,4.891,8.859,4.891,14.328C487.094,343.679,477.219,353.882,464.719,354.632z"></path>
                          </g>
                        </g>
                      </svg>
                      <span className="text-zinc-400">(3)</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="top-5 sticky flex-1 h-fit">
          <div className="flex flex-col border rounded-md">
            <h2 className="p-4 border-b font-bold text-lg sm:text-xl">
              Agent Detail
            </h2>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex items-center gap-2">
                <div className="relative rounded-full w-16 h-16 overflow-hidden">
                  <Image
                    src={property.agent.imageUrl}
                    alt={
                      property.agent.firstname + " " + property.agent.lastname
                    }
                    fill
                    sizes="128px"
                    className="object-cover"
                  ></Image>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold sm:text-lg">
                    {property.agent.firstname} {property.agent.lastname}
                  </h3>
                  <p className="font-semibold text-sm text-zinc-500 uppercase">
                    Agent
                  </p>
                </div>
              </div>
              <button className="bg-accent-green-100 hover:bg-accent-green-200 p-2 rounded-full w-full font-bold text-white duration-300">
                Contact Agent to view listing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
