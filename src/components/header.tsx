"use client";

import { logo, usa } from "@/app/assets/svg";
import { NavBar } from "./navbar";
import { Button } from "@/custom/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";

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
      className={`fixed top-0 left-0 right-0 z-100 px-4 mobile:px-0  bg-[#121212] transition-shadow duration-250
        ${scroll ? "shadow-[0_3px_10px_rgba(255,255,255,0.1)]" : ""}
      `}
    >
      <section className="max-w-[1280px] mx-auto">
        <div className="flex justify-between p-4 mobile:p-2 mobile:py-1">
          <div className="mobile:my-auto">
            <Link href="/">
              {React.cloneElement(logo, {
                className: "mobile:w-[150px] ",
              })}
            </Link>
          </div>

          <NavBar />
          <div className="flex items-center gap-10 mobile:gap-[24px] mobile:hidden">
            <Button className="text-[20px] leading-[100%] px-[12px] py-[10px]  text-muted-light">
              Contact Us
            </Button>
            <div className="flex items-center">{usa}</div>
          </div>
        </div>
      </section>
    </header>
  );
};
