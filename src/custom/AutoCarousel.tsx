"use client";

import { fetchPartners } from "@/lib/actions";
import { useEffect, useState } from "react";
import { Partner } from "@/types/items";
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
        className="flex w-max animate-scroll-left gap-40 mobile:gap-2"
        style={{
          animation: "scroll-left 15s linear infinite",
        }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner._id}-${index}`} // using index to avoid duplicate key error
            className="h-[100px] flex items-center justify-between mobile:w-full mobile:h-[50px]"
          >
            <Image
              src={partner.image}
              width={190}
              height={47}
              alt="Partner Image"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}
