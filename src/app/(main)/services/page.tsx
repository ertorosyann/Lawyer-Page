"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Services() {
  const civilRef = useRef<HTMLDivElement>(null!);
  const corporateRef = useRef<HTMLDivElement>(null!);
  const adminRef = useRef<HTMLDivElement>(null!);
  const criminalRef = useRef<HTMLDivElement>(null!);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className=" max-w-[1024px] mx-auto mobile:w-full">
        <div className="grid gap-15 mobile:justify-center">
          <div className="max-w-[720px] mx-auto grid text-center font-[500] gap-6 ">
            <h1 className=" text-muted-light text-[42px] mobile:text-[20px]">
              Services We Provide
            </h1>
            <p className="text-muted text-[24px] mobile:text-[16px] mobile:px-10">
              We deliver expert legal solutions with a commitment to protecting
              your rights and achieving the best outcomes.
            </p>
          </div>
          <ul className="flex justify-between text-[24px] font-500  text-muted bg-darkk py-3 px-4 text-center mobile:text-[13px] mobile:py-0 mobile:px-4">
            <li className="hover:text-muted-light cursor-pointer">All</li>
            <li
              onClick={() => scrollTo(civilRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              Civil right
            </li>
            <li
              onClick={() => scrollTo(corporateRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              Corporate law
            </li>
            <li
              onClick={() => scrollTo(adminRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              Administrative law
            </li>
            <li
              onClick={() => scrollTo(criminalRef)}
              className="hover:text-muted-light cursor-pointer"
            >
              Criminal Justice
            </li>
          </ul>
        </div>
      </section>

      <section className=" max-w-[1024px] mx-auto mobile:w-full mobile:px-4">
        <div className="flex flex-col items-center text-center gap-25 pt-25 pb-25">
          <div ref={civilRef} className="grid gap-6 scroll-mt-[120px]">
            <h1 className=" text-muted-light font-[700] text-[30px] leading-[100%] mobile:text-[20px]">
              Civil Right
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px] ">
              Lorem ipsum dolor sit amet consectetur. Massa cras eget tristique
              scelerisque enim vestibulum arcu consequat. Ullamcorper in in
              risus vitae. Parturient cursus egestas sit varius pellentesque
              nisi. Nulla vitae hendrerit pulvinar egestas amet netus. Purus
              volutpat et id non sit eget tristique eu tempor. Turpis orci ipsum
              eu maecenas nullam at. At elit auctor sit tristique gravida id.
              Vestibulum rhoncus blandit nam viverra consectetur donec. Leo
              viverra neque suspendisse tempus. Lorem ipsum dolor sit amet
              consectetur. Massa cras eget tristique scelerisque enim vestibulum
              arcu consequat. Ullamcorper in in risus vitae. Parturient cursus
              egestas sit varius pellentesque nisi. Nulla vitae hendrerit
              pulvinar egestas amet netus. Purus volutpat et id non sit eget
              tristique eu tempor. Turpis orci ipsum eu maecenas nullam at. At
              elit auctor sit tristique gravida id. Vestibulum rhoncus blandit
              nam viverra consectetur donec. Leo viverra neque suspendisse
              tempus. Lorem ipsum dolor sit amet consectetur. Massa cras eget
              tristique scelerisque enim vestibulum arcu consequat.{" "}
            </p>
          </div>
          <div ref={corporateRef} className="grid gap-6 scroll-mt-[120px]">
            <h1 className=" text-muted-light font-[700] text-[30px] leading-[100%] mobile:text-[20px]">
              Corporate law
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Massa cras eget tristique
              scelerisque enim vestibulum arcu consequat. Ullamcorper in in
              risus vitae. Parturient cursus egestas sit varius pellentesque
              nisi. Nulla vitae hendrerit pulvinar egestas amet netus. Purus
              volutpat et id non sit eget tristique eu tempor. Turpis orci ipsum
              eu maecenas nullam at. At elit auctor sit tristique gravida id.
              Vestibulum rhoncus blandit nam viverra consectetur donec. Leo
              viverra neque suspendisse tempus. Lorem ipsum dolor sit amet
              consectetur. Massa cras eget tristique scelerisque enim vestibulum
              arcu consequat. Ullamcorper in in risus vitae. Parturient cursus
              egestas sit varius pellentesque nisi. Nulla vitae hendrerit
              pulvinar egestas amet netus. Purus volutpat et id non sit eget
              tristique eu tempor. Turpis orci ipsum eu maecenas nullam at. At
              elit auctor sit tristique gravida id. Vestibulum rhoncus blandit
              nam viverra consectetur donec. Leo viverra neque suspendisse
              tempus. Lorem ipsum dolor sit amet consectetur. Massa cras eget
              tristique scelerisque enim vestibulum arcu consequat.
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
              Administrative law
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Massa cras eget tristique
              scelerisque enim vestibulum arcu consequat. Ullamcorper in in
              risus vitae. Parturient cursus egestas sit varius pellentesque
              nisi. Nulla vitae hendrerit pulvinar egestas amet netus. Purus
              volutpat et id non sit eget tristique eu tempor. Turpis orci ipsum
              eu maecenas nullam at. At elit auctor sit tristique gravida id.
              Vestibulum rhoncus blandit nam viverra consectetur donec. Leo
              viverra neque suspendisse tempus. Lorem ipsum dolor sit amet
              consectetur. Massa cras eget tristique scelerisque enim vestibulum
              arcu consequat. Ullamcorper in in risus vitae. Parturient cursus
              egestas sit varius pellentesque nisi. Nulla vitae hendrerit
              pulvinar egestas amet netus. Purus volutpat et id non sit eget
              tristique eu tempor. Turpis orci ipsum eu maecenas nullam at. At
              elit auctor sit tristique gravida id. Vestibulum rhoncus blandit
              nam viverra consectetur donec. Leo viverra neque suspendisse
              tempus. Lorem ipsum dolor sit amet consectetur. Massa cras eget
              tristique scelerisque enim vestibulum arcu consequat.
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
              Criminal Justice
            </h1>
            <p className="text-muted font-[500] text-[24px] leading-[100%] mobile:text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Massa cras eget tristique
              scelerisque enim vestibulum arcu consequat. Ullamcorper in in
              risus vitae. Parturient cursus egestas sit varius pellentesque
              nisi. Nulla vitae hendrerit pulvinar egestas amet netus. Purus
              volutpat et id non sit eget tristique eu tempor. Turpis orci ipsum
              eu maecenas nullam at. At elit auctor sit tristique gravida id.
              Vestibulum rhoncus blandit nam viverra consectetur donec. Leo
              viverra neque suspendisse tempus. Lorem ipsum dolor sit amet
              consectetur. Massa cras eget tristique scelerisque enim vestibulum
              arcu consequat. Ullamcorper in in risus vitae. Parturient cursus
              egestas sit varius pellentesque nisi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
