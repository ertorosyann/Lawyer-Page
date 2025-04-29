"use client";
import { partner1_bg } from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { fetchPartners } from "@/lib/actions";
import { Partner } from "@/types/items";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PartnerPage() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    (async () => {
      setPartners(await fetchPartners());
    })();
  }, []);

  const t = useTranslations("Partners");

  return (
    <>
      <section className=" max-w-[1024px] mx-auto mobile:w-full">
        <div className="grid justify-center gap-15 ">
          <div className="grid gap-4 text-center px-20 mobile:px-10">
            <h1 className="font-[700] text-[42px] text-muted-light mobile:text-[20px]">
              {t("title")}
            </h1>
            <p className="font-[500] text-[24px] text-muted mobile:text-[14px] mobile:px-10">
              {t("title-description")}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-15 px-10 mobile:px-5">
            {partners.map((partner) => (
              <Image
                key={partner._id}
                src={partner.image}
                alt="Partner"
                width={250}
                height={79}
              />
            ))}
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
            className="rotate-[-133.81deg]"
          />
        </div>
      </section>

      <section className="max-w-[1024px] mx-auto py-25 mobile:w-full">
        <div className="grid gap-15 mobile:m-5">
          <Area
            variant="lower__shadow"
            className="flex gap-4 mobile:grid mobile:gap-10"
          >
            <div className="w-1/3 grid items-center mobile:w-full mobile:gap-4 ">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-full"
              />
              <div className="md:hidden">{partner1_bg}</div>
            </div>

            <div className="w-2/3 grid gap-2 pb-10 mobile:w-full ">
              <div className="mobile:hidden">{partner1_bg}</div>
              <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:font-[400]">
                Lorem ipsum dolor sit amet consectetur. Tempor amet nunc netus
                sed pellentesque elit tristique ornare ut. Ut cum massa lacus
                fames nunc enim. Suscipit commodo in et sed venenatis. Duis sit
                purus vitae lacus suspendisse a vestibulum. Lorem ipsum dolor
                sit amet consectetur. Tempor amet nunc netus sed pellentesque
                elit tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum. Lorem ipsum dolor sit amet
                consectetur. Tempor amet nunc netus sed pellentesque elit
                tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum.
              </p>
            </div>
          </Area>
          <Area variant="lower__shadow" className="flex gap-4 mobile:grid">
            <div className="w-1/3 grid items-center mobile:w-full mobile:gap-4 ">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-full"
              />
              <div className="md:hidden">{partner1_bg}</div>
            </div>

            <div className="w-2/3 grid gap-2 pb-10 mobile:w-full ">
              <div className="mobile:hidden">{partner1_bg}</div>
              <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:font-[400]">
                Lorem ipsum dolor sit amet consectetur. Tempor amet nunc netus
                sed pellentesque elit tristique ornare ut. Ut cum massa lacus
                fames nunc enim. Suscipit commodo in et sed venenatis. Duis sit
                purus vitae lacus suspendisse a vestibulum. Lorem ipsum dolor
                sit amet consectetur. Tempor amet nunc netus sed pellentesque
                elit tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum. Lorem ipsum dolor sit amet
                consectetur. Tempor amet nunc netus sed pellentesque elit
                tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum.
              </p>
            </div>
          </Area>
          <Area variant="lower__shadow" className="flex gap-4 mobile:grid">
            <div className="w-1/3 grid items-center mobile:w-full mobile:gap-4 ">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-full"
              />
              <div className="md:hidden">{partner1_bg}</div>
            </div>

            <div className="w-2/3 grid gap-2 pb-10 mobile:w-full ">
              <div className="mobile:hidden">{partner1_bg}</div>
              <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:font-[400]">
                Lorem ipsum dolor sit amet consectetur. Tempor amet nunc netus
                sed pellentesque elit tristique ornare ut. Ut cum massa lacus
                fames nunc enim. Suscipit commodo in et sed venenatis. Duis sit
                purus vitae lacus suspendisse a vestibulum. Lorem ipsum dolor
                sit amet consectetur. Tempor amet nunc netus sed pellentesque
                elit tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum. Lorem ipsum dolor sit amet
                consectetur. Tempor amet nunc netus sed pellentesque elit
                tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum.
              </p>
            </div>
          </Area>
          <Area variant="lower__shadow" className="flex gap-4 mobile:grid">
            <div className="w-1/3 grid items-center mobile:w-full mobile:gap-4 ">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-full"
              />
              <div className="md:hidden">{partner1_bg}</div>
            </div>

            <div className="w-2/3 grid gap-2 pb-10 mobile:w-full ">
              <div className="mobile:hidden">{partner1_bg}</div>
              <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:font-[400]">
                Lorem ipsum dolor sit amet consectetur. Tempor amet nunc netus
                sed pellentesque elit tristique ornare ut. Ut cum massa lacus
                fames nunc enim. Suscipit commodo in et sed venenatis. Duis sit
                purus vitae lacus suspendisse a vestibulum. Lorem ipsum dolor
                sit amet consectetur. Tempor amet nunc netus sed pellentesque
                elit tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum. Lorem ipsum dolor sit amet
                consectetur. Tempor amet nunc netus sed pellentesque elit
                tristique ornare ut. Ut cum massa lacus fames nunc enim.
                Suscipit commodo in et sed venenatis. Duis sit purus vitae lacus
                suspendisse a vestibulum.
              </p>
            </div>
          </Area>
        </div>
      </section>
    </>
  );
}
