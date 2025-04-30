import {
  location_black,
  logo,
  mail_black,
  telephone_black,
} from "@/app/assets/svg";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="px-10 pt-35 pb-10 bg-darkk mobile:px-4 mobile:pt-10 bg-darkk">
      <section className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between pb-10 border-b-2 border-[#7B7B7B] gap-10">
          {/* Mobile styles: center content and adjust text size */}
          <div className="flex flex-col gap-4 text-left items-center">
            <Link href="/">
              {React.cloneElement(logo, {
                className: "mobile:w-[300px]  mobile:items-start ",
              })}
            </Link>
            <h2 className="font-[700] text-[28px] text-muted-light leading-[100%] mobile:text-[16px] ">
              {t("specialised")}
            </h2>
          </div>
          {/* Mobile styles: smaller text and centered items */}
          <div className="flex flex-col gap-4  ">
            <div className="flex items-center gap-4">
              {React.cloneElement(telephone_black, {
                className: "mobile:w-[40px]",
              })}
              <p className="font-[500] text-[24px] leading-[100%]  mobile:text-[12px]">
                +374 12122112
              </p>
            </div>
            <div className="flex items-center gap-4">
              {React.cloneElement(mail_black, {
                className: "mobile:w-[40px]",
              })}
              <p className="font-[500] text-[24px] leading-[100%]  mobile:text-[12px]">
                Lawyerhelp@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              {React.cloneElement(location_black, {
                className: "mobile:w-[40px]",
              })}
              <p className="font-[500] text-[24px] leading-[100%]  mobile:text-[12px]">
                {t("address")}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 flex mobile:flex-col flex-row items-center mobile:items-baseline justify-between gap-6">
          {/* Mobile styles: vertical menu layout and smaller text */}
          <ul className="flex flex-row items-center gap-3 md:space-x-[60px] text-[22px] font-[700] text-center mobile:grid  mobile:w-full mobile:justify-center mobile:text-[14px]">
            <li> {t("about")}</li>
            <li> {t("resources")}</li>
            <li>{t("support")}</li>
            <li>{t("privacy")}</li>
          </ul>

          {/* Mobile styles: smaller font and centered */}
          <p className="text-[16px] font-[400] text-[#717173] text-center mobile:text-left mobile:text-[14px]">
            {t("serteficate")}
          </p>
        </div>
      </section>
    </footer>
  );
};
