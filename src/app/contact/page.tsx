import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex sm:flex-row flex-col gap-4">
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="font-bold text-4xl">Get in touch</h1>
          <p className="max-w-sm text-zinc-400">
            Fill out the form and out team will try to get back to you within 24
            hours.
          </p>
          <div className="relative flex-1 rounded-lg min-h-56 overflow-hidden">
            <Image
              src={"/contact-image.jpg"}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            ></Image>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
