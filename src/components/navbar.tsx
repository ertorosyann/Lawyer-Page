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
      <ul className="mobile:hidden flex flex-row gap-10 text-[18px] font-[500]">
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
      <div className="md:hidden h-full relative">
        <button onClick={toggleMenu} className="text-muted-light">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        // <div className="absolute top-[70px] left-0 right-0 bg-darkk p-10 grid gap-10 text-[18px] font-[500] md:hidden z-50 shadow-[0_3px_10px_rgba(255,255,255,0.1)]">
        <div className="md:hidden absolute top-[70px] left-0 w-full h-screen bg-darkk p-10 grid text-[18px] font-[500] z-50">
          <div>
            <ul className="grid gap-4">
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
          </div>

          <div className="grid m-20 jus items-center">
            <Button className="text-[18px] leading-[100%] py-[10px]">
              Contact Us
            </Button>
            <div className="mx-auto">{usa}</div>
          </div>
        </div>
      )}
    </nav>
  );
};
