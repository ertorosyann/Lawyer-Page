"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/custom/Button";
import { arm, usa } from "@/app/assets/svg";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

export const NavBar = () => {
  const t = useTranslations("Navbar");
  const [locale, setLocale] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router]);

  const changeLocal = (newLocal: string) => {
    setLocale(newLocal);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocal};`;
    router.refresh();
  };

  return (
    <nav className="p-4 border-muted flex items-center gap-15 text-[#D0D0D0]">
      {/* Desktop nav */}
      <ul className="mobile:hidden flex flex-row gap-10 text-[18px] font-[500]">
        <li>
          <Link href="/about">{t("about")}</Link>
        </li>
        <li>
          <Link href="/services">{t("services")}</Link>
        </li>
        <li>
          <Link href="/partners">{t("partners")}</Link>
        </li>
        <li>
          <Link href="/news">{t("news")}</Link>
        </li>
      </ul>
      <div className="flex items-center gap-5  mobile:hidden ">
        <Button className="text-[18px] leading-[100%] py-3 px-6  rounded-xl">
          {t("contact")}
        </Button>
        <div className="flex gap-4 ">
          <button
            onClick={() => changeLocal("en")}
            className={`${
              locale === "en" && "bg-[#6A49A2] "
            } p-2 cursor-pointer`}
          >
            {React.cloneElement(usa, {
              className: "w-[40px]",
            })}
          </button>
          <button
            onClick={() => changeLocal("am")}
            className={`${
              locale === "am" && "bg-[#6A49A2]"
            } p-2 cursor-pointer`}
          >
            {React.cloneElement(arm, {
              className: "w-[40px]",
            })}
          </button>
        </div>
      </div>

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
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={toggleMenu}>
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="/partners" onClick={toggleMenu}>
                  {t("partners")}
                </Link>
              </li>
              <li>
                <Link href="/news" onClick={toggleMenu}>
                  {t("news")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid p-10 justify-center items-center ">
            <Button className="w-[200px] h-[50px] text-[18px] leading-[100%] py-[10px]s">
              {t("contact")}
            </Button>
            <div className="flex gap-10 justify-center">
              <button
                onClick={() => changeLocal("en")}
                className={`${
                  locale === "en" && "bg-[#6A49A2] "
                } p-2 cursor-pointer`}
              >
                {React.cloneElement(usa, {
                  className: "w-[40px]",
                })}
              </button>
              <button
                onClick={() => changeLocal("am")}
                className={`${
                  locale === "am" && "bg-[#6A49A2]"
                } p-2 cursor-pointer`}
              >
                {React.cloneElement(arm, {
                  className: "w-[40px]",
                })}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
