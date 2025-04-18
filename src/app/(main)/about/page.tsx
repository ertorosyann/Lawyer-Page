import { mail, telephone } from "@/app/assets/svg";
import { ArrowCarousel } from "@/custom/ArrowCarousel";
import { Button } from "@/custom/Button";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className=" max-w-[1024px] mx-auto ">
        <div className="grid gap-55">
          <div className="relative">
            <div className="grid gap-6 border bg-[#191A1D] text-center py-10 px-6 w-[55%] gradient-border-about">
              <h1 className="font-[700] text-[42px] leading-[100%] text-[#D0D0D0]">
                Legal Expertise with a<br /> Proven Track Record
              </h1>
              <p className="font-[500] text-[22px] text-[#717173] leading-[100%]">
                Volutpa sit&apos;eu o porttito dolor volutpa neque faucib,
                <br /> a praese egesta quisqua ut consect vita neque vita&apos;
                <br /> aliqua, mi et scelerisqu tempus a felis feugiat.
              </p>
            </div>
            <div className="absolute left-130 top-18">
              <Image src="/about.png" alt="About" width={509} height={337} />
            </div>
          </div>
          <div className="">
            <p className="text-center text-[28px] font-[500] text-[#717173] leading-[120%]">
              At Tatoyan , we provide expert legal services with a commitment to
              excellence. Our team of experienced attorneys works tirelessly to
              ensure that your legal needs are met with professionalism,
              integrity, and personal attention. With years of experience in
              various areas of law, we are dedicated to helping individuals and
              businesses navigate complex legal challenges.
            </p>
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

      <section className="max-w-[1280px] mx-auto">
        <div>
          <div className="grid gap-6 text-center py-10 px-6  bg-[#191A1D] border border-[#1F0C6F] shadow-[0px_0px_4px_0px_#F5F5F51F]">
            <h2 className="font-[700] text-[42px] leading-[100%] text-[#D0D0D0]">
              Our Mission...
            </h2>
            <p className="font-[500] text-[24px] text-[#717173] leading-[100%]">
              Our mission is to uphold justice, advocate for our clients, and
              provide ethical, results-driven legal representation. With
              dedication and expertise, we protect your rights and guide you
              through every legal challenge. We aim to deliver reliable,
              efficient, and compassionate legal solutions tailored to our
              clients&apos; unique situations.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto">
        <div className="py-25 px-45">
          <ArrowCarousel />
        </div>
        <div className="flex justify-center gap-[62px]">
          <Button className="font-[500] text-[24px] leading-[120%] py-[12px] px-[24px] text-[#D0D0D0]">
            Get In Toich
          </Button>
          <div className="flex gap-[16px] items-center">
            {telephone}
            <h4 className="font-[500] text-[24px] leading-[100%] text-[#D0D0D0]">
              +374 12122112
            </h4>
          </div>
          <div className="flex gap-[16px] items-center">
            {mail}
            <h4 className="font-[500] text-[24px] leading-[120%] text-[#D0D0D0]">
              Lawyerhelp@gmail.com
            </h4>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto">
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
