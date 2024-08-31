import LoadingIndicator from "@/components/LoadingIndicator";
import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex-1 flex-center">
      <LoadingIndicator size={40} />
    </div>
  );
}
