"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/custom/Button";
import { usa } from "@/app/assets/svg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 border-muted flex items-center gap-4 text-[#D0D0D0]">
      {/* Desktop nav */}
      <ul className="hidden md:flex flex-row gap-10 text-[18px] font-[500]">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/partners">Partners</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-[#121212] p-4 flex flex-col gap-4 text-[18px] font-[500] md:hidden z-50 shadow-lg">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/partners" onClick={toggleMenu}>
                Partners
              </Link>
            </li>
            <li>
              <Link href="/news" onClick={toggleMenu}>
                News
              </Link>
            </li>
          </ul>

          <Button className="text-[18px] leading-[100%] px-[12px] py-[10px]">
            Contact Us
          </Button>
          <div className="flex items-center">{usa}</div>
        </div>
      )}
    </nav>
  );
};
