import React from "react";

export default function WhyUsSection() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl text-center">What do you get?</h2>
      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4 text-center">
        <div className="flex flex-col gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
          <h3 className="font-bold text-lg sm:text-xl">Trusted Platform</h3>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quidem illum veritatis placeat autem impedit.
          </p>
        </div>
        <div className="flex flex-col gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
          <h3 className="font-bold text-lg sm:text-xl">Affordable Prices</h3>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quidem illum veritatis placeat autem impedit.
          </p>
        </div>
        <div className="flex flex-col gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
          <h3 className="font-bold text-lg sm:text-xl">Quick Process</h3>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quidem illum veritatis placeat autem impedit.
          </p>
        </div>
        <div className="flex flex-col gap-2 shadow-[#eee] shadow-[0_0_10px_1px] p-6 rounded-xl">
          <h3 className="font-bold text-lg sm:text-xl">Easy To Find</h3>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quidem illum veritatis placeat autem impedit.
          </p>
        </div>
      </div>
    </div>
  );
}
