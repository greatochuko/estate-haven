import React from "react";
import Property, { PropertyType } from "./Property";
import { UserType } from "./AgentPropertyOffers";
import { WishlistType } from "@/app/settings/wishlist/page";

export default function PropertiesGrid({
  properties,
  user,
  wishlist,
}: {
  properties: PropertyType[];
  user: UserType | null;
  wishlist: WishlistType[];
}) {
  return (
    <div className="gap-6 grid grid-cols-[repeat(auto-fill,_minmax(16rem,_1fr))] mb-4">
      {properties.map((property) => (
        <Property
          property={property}
          key={property.id}
          user={user}
          isLiked={wishlist.some((prop) => prop.property.id === property.id)}
        />
      ))}
    </div>
  );
}
