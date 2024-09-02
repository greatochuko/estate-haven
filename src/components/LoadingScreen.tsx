import LoadingIndicator from "./LoadingIndicator";
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex-1 flex-center min-h-[50dvh]">
      <LoadingIndicator size={40} color="#2eb57e" />
    </div>
  );
}
