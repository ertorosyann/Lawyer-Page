"use client";

import { useState } from "react";
import Image from "next/image";
import { arrowLeftDouble, arrowRightDouble } from "@/app/assets/svg";

const images = ["/image1.png", "/image2.jpg", "/image3.png"];

export const ArrowCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center gap-2">
      {/* Left Arrow */}
      <button onClick={prevImage} className=" hover:bg-white/20 cursor-pointer">
        {arrowLeftDouble}
      </button>

      {/* Image */}
      <div>
        <Image
          src={images[index]}
          alt={`carousel image ${index}`}
          width={163}
          height={80}
        />
      </div>

      {/* Right Arrow */}
      <button onClick={nextImage} className="hover:bg-white/20 cursor-pointer">
        {arrowRightDouble}
      </button>
    </div>
  );
};
