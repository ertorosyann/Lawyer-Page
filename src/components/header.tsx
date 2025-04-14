"use client";

import { logo, usa } from "@/app/assets/svg";
import { NavBar } from "./navbar";
import { Button } from "@/custom/Button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 px-10 bg-[#121212] transition-shadow duration-20
    ${scroll ? "shadow-[0_3px_10px_rgba(255,255,255,0.1)]" : ""}
  `}
    >
      <div className="flex justify-between py-[14px] px-[5px]">
        <div>{logo}</div>
        <div className="flex items-center gap-[62px] text-[#D0D0D0]">
          <NavBar />
          <div className="flex items-center gap-[24px] ">
            <Button className="text-[20px] leading-[100%] px-[18px] py-[13px]">
              Contact Us
            </Button>
            <div className="flex items-center">{usa}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
