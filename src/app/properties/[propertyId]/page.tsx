import AgentInformation from "@/components/AgentInformation";
import ImageGallery from "@/components/ImageGallery";
import PropertyInformation from "@/components/PropertyInformation";
import { getProperty } from "@/services/propertyServices";
import { getReviews } from "@/services/reviewServices";
import { getUserSession } from "@/services/userServices";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { propertyId: string };
}): Promise<Metadata> {
  const property = await getProperty(params.propertyId);

  return {
    title: property?.name || "Property Detail",
  };
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: { propertyId: string };
}) {
  const property = await getProperty(params.propertyId);
  if (!property || !property.isPublished) notFound();

  const reviews = await getReviews(property.agent.id);
  const user = await getUserSession();

  return (
    <div className="flex flex-col gap-4">
      <ImageGallery property={property} />

      <div className="flex md:flex-row flex-col gap-8">
        <PropertyInformation property={property} reviews={reviews} />
        <AgentInformation property={property} reviews={reviews} user={user} />
      </div>
    </div>
  );
}
