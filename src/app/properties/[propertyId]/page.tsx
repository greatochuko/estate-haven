import AgentInformation from "@/components/AgentInformation";
import ImageGallery from "@/components/ImageGallery";
import PropertyInformation from "@/components/PropertyInformation";
import Rating from "@/components/Rating";
import { ReviewType } from "@/components/Review";
import { getProperty } from "@/services/propertyServices";
import { getReviews } from "@/services/reviewServices";
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

  // const reviews = await getReviews(property.agent.id);
  const reviews: ReviewType[] = [];

  return (
    <div className="flex flex-col gap-4">
      <ImageGallery property={property} />

      <div className="flex md:flex-row flex-col gap-8">
        <PropertyInformation property={property} reviews={reviews} />
        <AgentInformation property={property} reviews={reviews} />
      </div>
    </div>
  );
}
