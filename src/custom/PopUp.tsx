"use client";
import { location_black, mail_black, telephone_black } from "@/app/assets/svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import Image from "next/image";

type props = {
  onClose: () => void;
};

export default function PopUp({ onClose }: props) {
  const t = useTranslations("Footer");
  const modalRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(modalRef, onClose);

  return (
    <div className="fixed inset-0 z-50 bg-[#5F5F5F80] flex items-center justify-center">
      <div
        className="relative min-w-[500px] bg-[#222222] p-8 grid gap-10 rounded-xl  shadow-[16px_16px_20px_5px_#00000033] animate-fadeIn"
        ref={modalRef}
      >
        <div className="absolute bottom-0 right-0 opacity-75 z-1">
          <Image
            src="/popupGif.png"
            width={200}
            height={190}
            alt="Image Gif not found"
          />
        </div>
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-3xl text-[#CED6DE] hover:text-black"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-[#DAC4FF80]  text-start">
          Contacte Us
        </h2>

        <div className="text-2xl gap-4">
          <div className="grid gap-1">
            <div className="flex items-center gap-4">
              {React.cloneElement(telephone_black, {
                className: "mobile:w-[40px]",
              })}
              <p className="font-medium text-xl text-[#A2AAB3]  mobile:text-base">
                +374 12122112
              </p>
            </div>
            <div className="flex items-center gap-4">
              {React.cloneElement(mail_black, {
                className: "mobile:w-[40px]",
              })}
              <p className="font-medium text-xl text-[#A2AAB3] mobile:text-base">
                Lawyerhelp@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              {React.cloneElement(location_black, {
                className: "mobile:w-[40px]",
              })}
              <p className="font-medium text-xl text-[#A2AAB3] mobile:text-base">
                {t("address")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 ">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-4 bg-[#373639] rounded-4xl "
          >
            <FaLinkedin className="text-white  text-4xl hover:text-[#6A49A2]" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-4 bg-[#373639] rounded-4xl "
          >
            <FaInstagram className="text-white text-4xl hover:text-[#6A49A2]" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-4 bg-[#373639] rounded-4xl "
          >
            <FaFacebook className="text-white text-4xl hover:text-[#6A49A2]" />
          </a>
        </div>
      </div>
    </div>
  );
}
