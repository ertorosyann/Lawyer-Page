"use client";

import { fetchPartners } from "@/lib/actions";
import { Partner } from "@/types/items";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AutoCarousel() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    (async () => {
      setPartners(await fetchPartners());
    })();
  }, []);

  return (
    <div className="overflow-hidden w-full bg-black py-4 mobile:py-0">
      <div
        className="flex gap-40 mobile:gap-2"
        style={{
          animation: "scroll-left 3s linear infinite",
        }}
      >
        {partners.map((partner) => (
          <div
            key={partner._id}
            className=" h-[100px] flex items-center justify-between mobile:w-full mobile:h-[50px]"
          >
            <Image
              src={partner.image}
              width={190}
              height={47}
              alt="Lawyer Image"
              className=""
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
