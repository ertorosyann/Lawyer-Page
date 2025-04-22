"use client";
import { partner1_bg, partner2_bg } from "@/app/assets/svg";
import { Area } from "@/custom/Area";
import { fetchPartners } from "@/lib/actions";
import { Partner } from "@/types/items";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PartnerPage() {
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    (async () => {
      setPartners(await fetchPartners());
    })();
  }, []);

  return (
    <>
      <section className=" max-w-[1024px] mx-auto ">
        <div className="grid justify-center  gap-15 ">
          <div className="text-center px-20">
            <h1 className="font-[700] text-[42px] text-muted-light">
              Our Trusted Partners
            </h1>
            <p className="font-[500] text-[24px] text-muted">
              At Tatoyan, we collaborate with a network of highly respected
              partners across various industries. Our strong partnerships
              enhance the quality of services we provide, ensuring that our
              clients receive the best possible legal support.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-15 px-10">
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

      <section className="max-w-[1280px] mx-auto">
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

      <section className="max-w-[1024px] mx-auto py-25">
        <div className="grid gap-15">
          <Area variant="lower__shadow" className="flex gap-4">
            <Image
              src="/news.png"
              alt="GIF"
              width={237}
              height={236}
              className="w-1/3"
            />
            <div className="grid gap-2 pb-10 ">
              {partner1_bg}
              <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
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
          <Area variant="lower__shadow" className="flex gap-4">
            <Image
              src="/news.png"
              alt="GIF"
              width={237}
              height={236}
              className="w-1/3"
            />
            <div className="grid gap-2 pb-10">
              {partner2_bg}
              <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
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
          <Area variant="lower__shadow" className="flex gap-4">
            <Image
              src="/news.png"
              alt="GIF"
              width={237}
              height={236}
              className="w-1/3"
            />
            <div className="grid gap-2 pb-10">
              {partner1_bg}
              <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
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
          <Area variant="lower__shadow" className="flex gap-4">
            <Image
              src="/news.png"
              alt="GIF"
              width={237}
              height={236}
              className="w-1/3"
            />
            <div className="grid gap-2 pb-10">
              {partner1_bg}
              <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
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
