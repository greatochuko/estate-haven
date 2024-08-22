import React from "react";

export default function ModalContainer({
  background = "#00000099",
  children,
  open,
  closeModal,
  elementRef,
  flexCenter = true,
  styles,
}: {
  children: React.ReactNode;
  open: boolean;
  closeModal: () => void;
  background?: string;
  elementRef?: React.MutableRefObject<HTMLDivElement | null>;
  flexCenter?: boolean;
  styles: string;
}) {
  return (
    <div
      ref={elementRef}
      onClick={closeModal}
      className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50 ${styles} ${
        flexCenter ? "flex-center" : ""
      } duration-200 z-40 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      } `}
      style={{ backgroundColor: background }}
    >
      {children}
    </div>
  );
}
