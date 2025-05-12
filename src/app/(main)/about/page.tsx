"use client";
import { ArrowCarousel } from "@/custom/ArrowCarousel";
import { mail, telephone } from "@/app/assets/svg";
import { useTranslations } from "next-intl";
import { Button } from "@/custom/Button";
import React, { useState } from "react";
import Image from "next/image";
import PopUp from "@/custom/PopUp";

export default function About() {
  const t = useTranslations("About");
  const [popUpContacte, setPopUpContacte] = useState<boolean>(false);

  return (
    <>
      <section className=" max-w-[1024px] mx-auto mobile:w-full">
        <div className="grid gap-55 mobile:gap-10 mobile:m-5">
          <div className="md:relative mobile:grid mobile:gap-20">
            <div className="grid gap-6 border cart-bg-grey text-center py-10 px-6 w-[55%] gradient-border-about mobile:w-full">
              <h1 className="font-bold text-5xl  text-muted-light mobile:text-xl">
                {t("title")}
              </h1>
              <p className="font-medium text-2xl text-muted  mobile:text-base">
                {t("titile-description")}
              </p>
            </div>
            <div className="md:absolute md:left-130 md:top-18">
              <Image src="/about.png" alt="About" width={509} height={337} />
            </div>
          </div>
          <div className="">
            <p className="text-center text-3xl font-medium text-muted leading-[120%] mobile:text-base">
              {t("titile-description2")}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:hidden">
        <div className="flex justify-center">
          <Image
            src="/main.gif"
            unoptimized
            alt="GIF"
            width={650}
            height={580}
            className="object-cover"
          />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className="grid gap-6 text-center py-10 px-6  cart-bg-grey border border-[#1F0C6F] shadow-[0px_0px_4px_0px_#F5F5F51F] mobile:m-5">
          <h2 className="font-bold text-5xl  text-muted-light mobile:text-xl">
            {t("mission")}
          </h2>
          <p className="font-medium text-2xl text-muted  mobile:text-base">
            {t("mission-description")}
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className="py-25 px-35 mobile:py-15 mobile:px-20">
          <ArrowCarousel />
        </div>
        <div className="flex justify-center gap-[62px] mobile:grid mobile:gap-[20px]">
          <Button
            className="font-medium text-2xl leading-[120%] py-3 px-6 text-muted-light mobile:text-sm"
            onClick={() => setPopUpContacte(true)}
          >
            {t("btn-get")}
          </Button>
          <div className="flex gap-[16px] items-center">
            {React.cloneElement(telephone, {
              className: "mobile:w-[30px]",
            })}
            <h4 className="fon-[500] text-2xl  text-muted-light mobile:text-sm">
              +374 12122112
            </h4>
          </div>
          <div className="flex gap-[16px] items-center">
            {React.cloneElement(mail, {
              className: "mobile:w-[30px]",
            })}
            <h4 className="font-medium text-2xl leading-[120%] text-muted-light mobile:text-sm">
              Lawyerhelp@gmail.com
            </h4>
          </div>
        </div>
        {popUpContacte && <PopUp onClose={() => setPopUpContacte(false)} />}
      </section>

      <section className="max-w-[1280px] mx-auto mobile:hidden">
        <div className="flex justify-center">
          <Image
            src="/main.gif"
            unoptimized
            alt="GIF"
            width={510}
            height={445}
            className="rotate-[90deg]"
          />
        </div>
      </section>
    </>
  );
}
