"use client";
import { ServiceCard } from "@/custom/ServiceCart";
import AutoCarousel from "@/custom/AutoCarousel";
import { Button } from "@/custom/Button";
import { Area } from "@/custom/Area";
import Image from "next/image";
import {
  administrative,
  afforable,
  approachable,
  arrowRight,
  arrowUp,
  civilRight,
  clock,
  corporate,
  criminal,
  experienced,
  flexible,
  international,
  legal,
  mail,
  star,
  telephone,
} from "@/app/assets/svg";
import { useEffect, useState } from "react";
import { Lawyer } from "@/types/items";
import { fetchLawyers } from "@/lib/actions";
import React from "react";

export default function Home() {
  const [lawyers, setLawyers] = useState<Lawyer[] | undefined>([]);

  useEffect(() => {
    (async () => {
      setLawyers(await fetchLawyers());
    })();
  }, []);

  return (
    <>
      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className="flex items-center ">
          <div className="w-1/2 mobile:hidden">
            <Image
              src="/main.gif"
              unoptimized
              alt="GIF"
              width={814.27}
              height={768.44}
              className="rotate-[-118.5deg]"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-center p-[12px] gap-[32px] mobile:w-full mobile:px-10">
            <div className="grid gap-3">
              <h1 className="font-[700] text-[42px] text-muted-light mobile:text-[20px] text-center">
                Specialised Attorney With Experiance
              </h1>
              <p className="font-[500] text-[24px] text-muted mobile:text-[16px]">
                Volutpa sit&apos;eu o porttito dolor volutpa neque faucib, a
                praese egesta quisqua ut consect vita neque vita&apos; aliqua,
                mi et scelerisqu tempus a felis feugiat.
              </p>
            </div>
            <div className="flex gap-[62px] mobile:justify-between mobile:gap-[20px]">
              <Button className="font-[500] text-[24px] leading-[120%] py-[12px] px-[24px] mobile:text-[16px] mobile:px-[10px]">
                Consulation
              </Button>
              <Button className="flex justify-between p-[12px] gap-[32px] bg-[#121212] border border-[#6A49A2] mobile:text-[16px] mobile:px-[10px]">
                Learn More {arrowRight}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className="flex flex-col gap-16 py-10">
          <div className="flex flex-col items-center gap-[24px]">
            <h1 className="text-[42px] font-[700] text-muted-light mobile:text-[20px]">
              Services We Provide
            </h1>
            <p className="text-[24px] tont-[500] text-muted text-center mobile:text-[14px] mobile:px-[30px]">
              We deliver expert legal solutions with a commitment to protecting
              your rights and achieving the best outcomes.
            </p>
          </div>

          <div className="px-10 grid grid-cols-3 gap-x-[62px] gap-y-[72px] items-stretch mobile:grid-cols-1 mobile:gap-0 mobile:px-0 mobile:gap-x-0 mobile:gap-y-0">
            <ServiceCard
              title="Corporate law"
              content={
                <>
                  Lorem ipsum dolor sit amet consectetur. Magna maecenas purus
                  urna et augue sed fringilla faucibus lorem. Quis id vel in
                  nibh tellus libero facilisis nisl. Elit aliquet ut enim
                  dictumst nunc. At quam amet nunc in tempor eu pharetra.
                </>
              }
              icone={corporate}
            />

            <ServiceCard
              title="Civil right"
              content={
                <>
                  Lorem ipsum dolor sit amet consectetur. Magna maecenas purus
                  urna et augue sed fringilla faucibus lorem. Quis id vel in
                  nibh tellus libero facilisis nisl. Elit aliquet ut enim
                  dictumst nunc. At quam amet nunc in tempor eu pharetra.
                </>
              }
              icone={civilRight}
            />

            <ServiceCard
              title="Administrative law"
              content={
                <>
                  Lorem ipsum dolor sit amet consectetur. Magna maecenas purus
                  urna et augue sed fringilla faucibus lorem. Quis id vel in
                  nibh tellus libero facilisis nisl. Elit aliquet ut enim
                  dictumst nunc. At quam amet nunc in tempor eu pharetra.
                </>
              }
              icone={administrative}
            />

            <ServiceCard
              title="International judicial processes"
              content={
                <>
                  Lorem ipsum dolor sit amet consectetur. Magna maecenas purus
                  urna et augue sed fringilla faucibus lorem. Quis id vel in
                  nibh tellus libero facilisis nisl. Elit aliquet ut enim
                  dictumst nunc. At quam amet nunc in tempor eu pharetra.
                </>
              }
              icone={international}
            />

            <ServiceCard
              title="Legal examination"
              content={
                <>
                  Lorem ipsum dolor sit amet consectetur. Magna maecenas purus
                  urna et augue sed fringilla faucibus lorem. Quis id vel in
                  nibh tellus libero facilisis nisl. Elit aliquet ut enim
                  dictumst nunc. At quam amet nunc in tempor eu pharetra.
                </>
              }
              icone={legal}
            />

            <ServiceCard
              title="Criminal Justice"
              content={
                <>
                  Lorem ipsum dolor sit amet consectetur. Magna maecenas purus
                  urna et augue sed fringilla faucibus lorem. Quis id vel in
                  nibh tellus libero facilisis nisl. Elit aliquet ut enim
                  dictumst nunc. At quam amet nunc in tempor eu pharetra.
                </>
              }
              icone={criminal}
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className="grid px-10 py-24 gap-16 ">
          <h2 className="text-muted-light text-[42px] font-[700] leading-[100%] text-center mobile:text-[20px]">
            What makes us different?
          </h2>

          <ul className="grid grid-cols-4 justify-between gap-16 text-center mobile:grid-cols-1 mobile:gap-10 mobile:px-10">
            <li>
              <div className="grid justify-center gap-6 rounded-[4px] cart-bg-grey py-[24px] px-[16px] border border-custom  gradient-border-main">
                {/* {experienced} */}
                {React.cloneElement(experienced, {
                  className: "mobile:w-[177px] mobile:h-[110px]",
                })}
                <p className="font-[700] text-[28px] text-muted-light mobile:text-[16px]">
                  Experienced
                </p>
              </div>
            </li>
            <li>
              <div className="grid justify-center gap-6 rounded-[4px] cart-bg-grey py-[24px] px-[16px] border border-custom  gradient-border-main">
                {afforable}
                <p className="font-[700] text-[28px] text-muted-light mobile:text-[16px]">
                  Affordable
                </p>
              </div>
            </li>
            <li>
              <div className="grid justify-center gap-6 rounded-[4px] cart-bg-grey py-[24px] px-[16px] border border-custom  gradient-border-main">
                {flexible}
                <p className="font-[700] text-[28px] text-muted-light mobile:text-[16px]">
                  Flexible
                </p>
              </div>
            </li>
            <li>
              <div className="grid justify-center gap-6 rounded-[4px] cart-bg-grey py-[24px] px-[16px] border border-custom  gradient-border-main">
                {approachable}
                <p className="font-[700] text-[28px] text-muted-light mobile:text-[16px]">
                  Approachable
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:hidden">
        <div className="flex justify-center">
          <Image
            src="/main.gif"
            unoptimized
            alt="GIF"
            width={814.27}
            height={568}
            className="rotate-[-133.81deg]"
          />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className="grid gap-[62px]">
          <div className="grid gap-6 text-center">
            <h2 className="font-[700] text-[42px] text-muted-light leading-[100%] mobile:text-[20px]">
              Our Attorneys
            </h2>
            <p className="font-[500] text-[24px] text-muted text-center px-50 mobile:px-[20px] mobile:text-[14px]">
              Our skilled attorneys are dedicated to delivering exceptional
              legal services, utilizing the latest technology to offer efficient
              and costeffective solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid mobile:grid-cols-1 grid-cols-3 gap-[62px] mobile:gap-0">
            {lawyers?.map((lawyer) => (
              <Area
                className="relative group overflow-hidden rounded-[4px] mobile:m-5"
                key={lawyer._id}
              >
                <Image
                  src={lawyer.image}
                  alt="Lawyer Image"
                  width={301}
                  height={448}
                  className="rounded-[4px] w-full h-auto"
                />
                <div
                  className="absolute bottom-0 left-[8px] right-[8px] h-1/3 bg-[#44424C]
                  translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 rounded-[4px] p-4 flex flex-col gap-3 mobile:h-1/2"
                >
                  <div className="grid gap-1">
                    <div className="flex justify-between gap-[6px]">
                      <h3 className="text-[20px] font-[600] text-[#D0D0D0] mobile:text-[16px]">
                        {lawyer.name} {lawyer.surname}
                      </h3>
                      {arrowUp}
                    </div>
                    <h4 className="text-[#AEAEAE] text-[16px] mobile:text-[14px]">
                      Civil right
                    </h4>
                  </div>
                  <p className="text-[12px] text-[#AEAEAE] font-[500] mobile:text-[14px]">
                    {lawyer.description}
                  </p>
                </div>
              </Area>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto mobile:w-full">
        <div className="px-15 py-35 mobile:py-20 ">
          <div className="relative h-[500px] mobile:h-[200px]">
            {/* Years of Experience */}
            <Area
              variant="lower__shadow"
              className="absolute  left-0 top-0 flex flex-col items-center justify-center text-center py-20 px-20 mobile:py-5 mobile:px-5 mobile:left-0"
            >
              <h3 className="text-3xl font-semibold mobile:text-[14px]">
                Years of <br />
                Experience
              </h3>
              <p className="text-5xl font-semibold mt-2 mobile:text-[14px]">
                +00
              </p>
            </Area>

            {/* Cases Won */}
            <Area
              variant="lower__shadow"
              className="absolute left-88 top-22 flex flex-col items-center justify-center text-center py-20 px-20  mobile:py-5 mobile:px-5 mobile:left-33 mobile:top-11"
            >
              <h3 className="text-3xl font-semibold mobile:text-[14px]">
                Cases Won
              </h3>
              <p className="text-5xl font-semibold mt-2 mobile:text-[14px]">
                +000
              </p>
            </Area>

            {/* Client Satisfaction */}
            <Area
              variant="lower__shadow"
              className="absolute  left-25 top-80  flex flex-col items-center justify-center text-center py-15 px-7  mobile:py-5 mobile:px-2 mobile:left-4 mobile:top-25"
            >
              <h3 className="text-3xl font-semibold mobile:text-[14px]">
                Client Satisfaction
              </h3>
              <p className="text-5xl font-semibold mt-2 mobile:text-[14px]">
                00%
              </p>
            </Area>
          </div>
        </div>
      </section>

      <section className="bg-[url('/bck.jpeg')] bg-cover bg-bottom bg-no-repeat w-full h-[628px] relative ">
        {/* Darkening layer (overlay) */}
        <div className="absolute inset-0 bg-[#00000080] "></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[1280px] mobile:top-1/3 mobile:left-1/6 mobile:-translate-x-1/10 mobile:-translate-y-1/4">
          <div className="w-full backdrop-blur-[50px] border-[2px] gradient-border-about  py-6 px-8 grid gap-[42px] rounded-[4px] mobile:px-5 mobile:py-3">
            <div className="grid gap-6 ">
              <h2 className="font-[700] text-[42px] text-center text-[#F5F5F5] mobile:text-[16px]">
                Trusted by Many, Proven by Results
              </h2>
              <p className="font-[400] text-[24px] text-[#F5F5F5CC] text-center mobile:text-[14px] ">
                We understand that many people may be reluctant to contact a
                lawyer because they’re worried they won’t be able to afford the
                fees. They may be tempted to try to handle their legal matter
                themselves, but that’s often a recipe for a less-than-desirable
                outcome.
              </p>
            </div>
            <div className="grid grid-cols-3 justify-center gap-[62px] mobile:grid-cols-1 mobile:gap-5 mobile:mx-auto">
              <div>
                <Button className="font-[500] text-[24px] leading-[120%] py-[12px] px-[24px] text-muted-light mobile:text-[14px]">
                  Get In Toich
                </Button>
              </div>
              <div className="flex gap-[16px] items-center">
                {React.cloneElement(telephone, {
                  className: "mobile:w-[24px] ",
                })}
                <p className="font-[500] text-[24px] mobile:text-[12px]">
                  +374 12122112
                </p>
              </div>
              <div className="flex gap-[16px] items-center">
                {React.cloneElement(mail, {
                  className: "mobile:w-[24px] ",
                })}
                <p className="font-[500] text-[24px] mobile:text-[12px]">
                  @gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className="grid p-10 gap-[62px]">
          <div className="flex flex-col gap-[24px] text-center">
            <h2 className="text-muted-light text-[42px] font-[700] mobile:text-[20px]">
              Our Clients Say It Best
            </h2>
            <p className="text-muted text-[24px] font-[500] px-50 mobile:text-[14px] mobile:px-0">
              Our skilled attorneys are dedicated to delivering exceptional
              legal services, utilizing the latest technology to offer efficient
              and cost-effective solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <div className="cart-bg-grey hover:bg-[#0505] transition py-9 px-6 ">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <Image
                    src="/client1.png"
                    alt="client1"
                    width={48}
                    height={48}
                    className="rounded-4xl"
                  />
                  <div className="flex flex-col">
                    <h3>William Doyle</h3>
                    <p>27.07.2024</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
                <p className="text-muted font-[500] text-[16px] mobile:text-[14px]">
                  Great experience. Very communicative, pleasant, and
                  knowledgeable all the way from the legal secretary to the
                  paralegal to the attorney. Everyone was on the same page at
                  the same time, very refreshing. Everything was done online as
                  I was in NY and my transactions were for the state of AZ. TYVM
                </p>
              </div>
            </div>

            <div className="cart-bg-grey hover:bg-[#0505] transition py-9 px-6">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <Image
                    src="/client1.png"
                    alt="client1"
                    width={48}
                    height={48}
                    className="rounded-4xl"
                  />
                  <div className="flex flex-col">
                    <h3>William Doyle</h3>
                    <p>27.07.2024</p>
                  </div>
                </div>
                <div className="flex">
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
                <div>
                  <p className="text-muted font-[500] text-[16px] mobile:text-[14px]">
                    Great experience. Very communicative, pleasant, and
                    knowledgeable all the way from the legal secretary to the
                    paralegal to the attorney. Everyone was on the same page at
                    the same time, very refreshing. Everything was done online
                    as I was in NY and my transactions were for the state of AZ.
                    TYVM
                  </p>
                </div>
              </div>
            </div>

            <div className="cart-bg-grey hover:bg-[#0505] transition py-9 px-6">
              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <Image
                    src="/client1.png"
                    alt="client1"
                    width={48}
                    height={48}
                    className="rounded-4xl"
                  />
                  <div className="flex flex-col">
                    <h3>William Doyle</h3>
                    <p>27.07.2024</p>
                  </div>
                </div>
                <div className="flex">
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
              </div>
              <div>
                <p className="text-muted font-[500] text-[16px] mobile:text-[14px]">
                  Great experience. Very communicative, pleasant, and
                  knowledgeable all the way from the legal secretary to the
                  paralegal to the attorney. Everyone was on the same page at
                  the same time, very refreshing. Everything was done online as
                  I was in NY and my transactions were for the state of AZ. TYVM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:hidden">
        <div className="flex justify-end">
          <Image
            src="/main.gif"
            unoptimized
            alt="GIF"
            width={637}
            height={556}
            className="rotate-[-133.81deg]"
          />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto mobile:w-full">
        <div className=" py-[100px] px-[62px] flex flex-col gap-15 mobile:px-5">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="font-[700] text-[42px] text-muted-light leading-[100%] mobile:text-[20px]">
              Stay Informed
            </h2>
            <p className="font-[500] text-[24px] leading-[100%] text-muted px-50 mobile:text-[14px] mobile:px-10">
              Vel feugiat consectet cum fermentum ex consectetu exercitatio
              morbi occaecat, vestibulu nam congue exercitati ex minim vestibulu
              ubi quas-voluptate parturien voluptat ad saep tempor culpa.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
            <Area variant="lower__shadow" className="flex gap-4">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-1/2"
              />
              <div className="flex flex-col justify-between w-1/2 mobile:w-2/3 mobile:gap-20">
                <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:text-">
                  Exciting News: Facundo Banchero to Join LFN Secondment Program
                  in Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-muted mobile:text-[14px]">
                    February 24, 2025
                  </p>
                  <div className="text-muted">{arrowRight}</div>
                </div>
              </div>
            </Area>
            <Area variant="lower__shadow" className="flex gap-4">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-1/2"
              />
              <div className="flex flex-col justify-between w-1/2 mobile:w-2/3 mobile:gap-20">
                <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:text-">
                  Exciting News: Facundo Banchero to Join LFN Secondment Program
                  in Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-muted mobile:text-[14px]">
                    February 24, 2025
                  </p>
                  <div className="text-muted">{arrowRight}</div>
                </div>
              </div>
            </Area>
            <Area variant="lower__shadow" className="flex gap-4">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-1/2"
              />
              <div className="flex flex-col justify-between w-1/2 mobile:w-2/3 mobile:gap-20">
                <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:text-">
                  Exciting News: Facundo Banchero to Join LFN Secondment Program
                  in Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-muted mobile:text-[14px]">
                    February 24, 2025
                  </p>
                  <div className="text-muted">{arrowRight}</div>
                </div>
              </div>
            </Area>
            <Area variant="lower__shadow" className="flex gap-4">
              <Image
                src="/news.png"
                alt="GIF"
                width={237}
                height={236}
                className="w-1/2 "
              />
              <div className="flex flex-col justify-between w-1/2 mobile:w-2/3 mobile:gap-20">
                <p className="text-muted-light text-[20px] font-[600] leading-[120%] mobile:text-[14px] mobile:text-">
                  Exciting News: Facundo Banchero to Join LFN Secondment Program
                  in Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-muted mobile:text-[14px]">
                    February 24, 2025
                  </p>
                  <div className="text-muted">{arrowRight}</div>
                </div>
              </div>
            </Area>
          </div>
        </div>
      </section>

      <section className="w-full">
        <AutoCarousel />
      </section>

      <section className="max-w-[1280px] mx-auto mobile:hidden">
        <div className="flex justify-center p-10">
          <Image
            src="/main.gif"
            unoptimized
            alt="GIF"
            width={403}
            height={352}
            className="rotate-[20.42 deg]"
          />
        </div>
      </section>
    </>
  );
}
