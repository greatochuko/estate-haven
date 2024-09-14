import Image from "next/image";
import React, { useState } from "react";

export default function PropertyImage({
  propertyName,
  imageUrl,
}: {
  propertyName: string;
  imageUrl: string;
}) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <div className="top-0 left-0 absolute bg-black/30 w-full h-full animate-pulse"></div>
      )}
      <Image
        src={imageUrl}
        alt={propertyName}
        fill
        hidden={loading}
        sizes="1680px"
        className="object-cover"
        priority
        onLoadingComplete={(e) => {
          setLoading(false);
          console.log("asdf");
        }}
      ></Image>
    </>
  );
}
