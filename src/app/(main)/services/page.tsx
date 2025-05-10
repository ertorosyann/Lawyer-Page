"use client";
import { useTranslations } from "use-intl";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Services() {
  const civilRef = useRef<HTMLDivElement>(null!);
  const corporateRef = useRef<HTMLDivElement>(null!);
  const adminRef = useRef<HTMLDivElement>(null!);
  const criminalRef = useRef<HTMLDivElement>(null!);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const t = useTranslations("Services");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <section className=" max-w-[1024px] mx-auto mobile:w-full">
        <div className="grid gap-15 mobile:justify-center">
          <div className="max-w-[720px] mx-auto grid text-center font-medium gap-6 ">
            <h1 className=" text-muted-light text-5 mobile:text-xl">
              {t("title")}
            </h1>
            <p className="text-muted text-2xl mobile:text-base mobile:px-10">
              {t("title-description")}
            </p>
          </div>
          <ul className="flex justify-between text-2xl font-medium  text-muted bg-darkk py-3 px-4 text-center mobile:text-sm mobile:py-0 mobile:px-4">
            <li className="hover:text-muted-light cursor-pointer">
              {" "}
              {t("items.all")}
            </li>
            <li
              onClick={() => scrollTo(civilRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              {t("items.item1.name")}
            </li>
            <li
              onClick={() => scrollTo(corporateRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              {t("items.item2.name")}
            </li>
            <li
              onClick={() => scrollTo(adminRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              {t("items.item3.name")}
            </li>
            <li
              onClick={() => scrollTo(criminalRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              {t("items.item4.name")}
            </li>
          </ul>
        </div>
      </section>

      <section className=" max-w-[1024px] mx-auto mobile:w-full mobile:px-4">
        <div className="flex flex-col items-center text-center gap-25 pt-25 pb-25">
          <div
            id="civil"
            ref={civilRef}
            className="grid gap-6 scroll-mt-[120px]"
          >
            <h1 className=" text-muted-light font-bold text-3xl mobile:text-xl">
              {t("items.item1.name")}
            </h1>
            <p className="text-muted font-medium text-2xl mobile:text-base ">
              {t("items.item1.description")}
            </p>
          </div>
          <div
            id="corporate"
            ref={corporateRef}
            className="grid gap-6 scroll-mt-[120px]"
          >
            <h1 className=" text-muted-light font-bold text-3xl mobile:text-xl">
              {t("items.item2.name")}
            </h1>
            <p className="text-muted font-medium text-2xl mobile:text-base">
              {t("items.item2.description")}
            </p>
          </div>
          <div className="mobile:hidden">
            <Image
              src="/main.gif"
              unoptimized
              alt="GIF"
              width={650.27}
              height={568.44}
            />
          </div>
          <div
            id="admin"
            ref={adminRef}
            className="grid gap-6 scroll-mt-[120px]"
          >
            <h1 className=" text-muted-light font-bold text-3xl mobile:text-xl">
              {t("items.item3.name")}
            </h1>
            <p className="text-muted font-medium text-2xl mobile:text-base">
              {t("items.item3.description")}
            </p>
          </div>
          <div className="mobile:hidden">
            <Image
              src="/main.gif"
              unoptimized
              alt="GIF"
              width={458.5}
              height={423.4}
            />
          </div>
          <div
            id="criminal"
            ref={criminalRef}
            className="grid gap-6 scroll-mt-[120px]"
          >
            <h1 className=" text-muted-light font-bold text-3xl mobile:text-xl">
              {t("items.item4.name")}
            </h1>
            <p className="text-muted font-medium text-2xl mobile:text-base">
              {t("items.item4.description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
