"use client";

import { logo, usa } from "@/app/assets/svg";
import { NavBar } from "./navbar";
import { Button } from "@/custom/Button";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 px-4 sm:px-10 bg-[#121212] transition-shadow duration-250
        ${scroll ? "shadow-[0_3px_10px_rgba(255,255,255,0.1)]" : ""}
      `}
    >
      <section className="mobile:max-w-full max-w-[1280px] mx-auto">
        <div className="flex justify-between py-4 sm:py-[14px] px-4 sm:px-[5px]">
          <div>
            <Link href="/">{logo}</Link>
          </div>

          <NavBar />
          <div className="hidden md:flex items-center gap-4 sm:gap-[24px]">
            <Button className="text-[18px] sm:text-[20px] leading-[100%] px-[12px] sm:px-[18px] py-[10px] sm:py-[13px]">
              Contact Us
            </Button>
            <div className="flex items-center">{usa}</div>
          </div>
        </div>
      </section>
    </header>
  );
};
