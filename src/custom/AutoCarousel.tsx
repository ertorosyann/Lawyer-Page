"use client";

import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
} from "@/app/assets/svg";

const icons = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6]; 

export default function AutoCarousel() {
  return (
    <div className="overflow-hidden w-full bg-black py-4">
      <div
        className="flex whitespace-nowrap gap-4"
        style={{
          animation: "scroll-left 20s linear infinite",
        }}
      >
        {[...icons, ...icons].map((Icon, i) => (
          <div
            key={i}
            className="w-[200px] h-[100px] flex-shrink-0 flex items-center justify-center"
          >
            {Icon}
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
