"use client";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "use-intl";

export default function Services() {
  const civilRef = useRef<HTMLDivElement>(null!);
  const corporateRef = useRef<HTMLDivElement>(null!);
  const adminRef = useRef<HTMLDivElement>(null!);
  const criminalRef = useRef<HTMLDivElement>(null!);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const t = useTranslations("Services");

  return (
    <>
      <section className=" max-w-[1024px] mx-auto mobile:w-full">
        <div className="grid gap-15 mobile:justify-center">
          <div className="max-w-[720px] mx-auto grid text-center font-[500] gap-6 ">
            <h1 className=" text-muted-light text-[42px] mobile:text-[20px]">
              {t("title")}
            </h1>
            <p className="text-muted text-[24px] mobile:text-[16px] mobile:px-10">
              {t("title-description")}
            </p>
          </div>
          <ul className="flex justify-between text-[24px] font-500  text-muted bg-darkk py-3 px-4 text-center mobile:text-[13px] mobile:py-0 mobile:px-4">
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
          <div ref={civilRef} className="grid gap-6 scroll-mt-[120px]">
            <h1 className=" text-muted-light font-[700] text-[30px] leading-[100%] mobile:text-[20px]">
              {t("items.item1.name")}
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px] ">
              {t("items.item1.description")}
            </p>
          </div>
          <div ref={corporateRef} className="grid gap-6 scroll-mt-[120px]">
            <h1 className=" text-muted-light font-[700] text-[30px] leading-[100%] mobile:text-[20px]">
              {t("items.item2.name")}
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px]">
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
              className="rotate-[-133.81deg]"
            />
          </div>
          <div ref={adminRef} className="grid gap-6 scroll-mt-[120px]">
            <h1 className=" text-muted-light font-[700] text-[30px] leading-[100%] mobile:text-[20px]">
              {t("items.item3.name")}
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px]">
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
              className="rotate-[90deg]"
            />
          </div>
          <div ref={criminalRef} className="grid gap-6 scroll-mt-[120px]">
            <h1 className=" text-muted-light font-[700] text-[30px] leading-[100%] mobile:text-[20px]">
              {t("items.item4.name")}
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px]">
              {t("items.item4.description")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
