import AgentPropertyOffers, {
  UserType,
} from "@/components/AgentPropertyOffers";
import { getAgent, getUserSession } from "@/services/userServices";
import { getPropertiesByAgent } from "@/services/propertyServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function AgentDetailsPage({
  params: { agentId },
}: {
  params: { agentId: string };
}) {
  const user = await getUserSession();
  const agent = await getAgent(agentId);
  const agentProperties = await getPropertiesByAgent(agentId);
  if (!agent) notFound();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex flex-col flex-1 items-center lg:items-start gap-4">
          <div className="flex flex-col gap-1">
            <div className="relative bg-zinc-100 rounded-full w-32 h-32 overflow-hidden">
              <Image
                src={agent.imageUrl}
                alt={agent.firstname + " " + agent.lastname}
                fill
                sizes="256px"
                className="object-cover"
              ></Image>
            </div>
            <h1 className="font-semibold text-2xl text-zinc-800">
              {agent.firstname} {agent.lastname}
            </h1>
            <h2 className="text-lg text-zinc-600">{agent.companyName}</h2>
          </div>
          {agent.bio && (
            <>
              <hr className="w-full" />
              <p className="mx-auto w-[90%] lg:w-full text-center text-zinc-600 lg:text-left">
                {agent.bio}
              </p>
            </>
          )}
          <hr className="w-full" />
          <div className="flex flex-col gap-1">
            {agent.phoneNumber && (
              <p className="flex items-center gap-2">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z"
                      fill="#0F0F0F"
                      className="fill-accent-green-100"
                    ></path>
                  </g>
                </svg>
                {agent.phoneNumber}
              </p>
            )}
            {agent.workEmail && (
              <p className="flex items-center gap-2">
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
                      d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                      stroke="#000000"
                      className="stroke-accent-green-100"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
                {agent.workEmail}
              </p>
            )}
          </div>
        </div>
        <AgentPropertyOffers
          properties={agentProperties}
          user={user as UserType | null}
        />
      </div>
    </div>
  );
}
