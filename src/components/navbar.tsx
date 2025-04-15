"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4  border-muted">
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
      <div className="md:hidden flex justify-between items-center">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-[18px] font-[500] md:hidden">
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
      )}
    </nav>
  );
};
