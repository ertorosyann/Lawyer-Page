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

export default function Home() {
  return (
    <>
      <section className="max-w-[1280px] mx-auto">
        <div className="flex items-center ">
          <div className="w-1/2">
            <Image
              src="/main.gif"
              unoptimized
              alt="GIF"
              width={814.27}
              height={768.44}
              className="rotate-[-118.5deg]"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-center p-[12px] gap-[32px]">
            <div className="gap-3">
              <h1 className="font-[700] text-[42px] text-[#D0D0D0] ">
                Specialised Attorney With Experiance
              </h1>
              <p className="font-[500] text-[24px] text-[#717173] ">
                Volutpa sit&apos;eu o porttito dolor volutpa neque <br />
                faucib, a praese egesta quisqua ut consect vita <br />
                neque vita&apos; aliqua, mi et scelerisqu tempus a felis <br />
                feugiat.
              </p>
            </div>
            <div className="flex gap-[62px]">
              <Button className="font-[500] text-[24px] leading-[120%] py-[12px] px-[24px]">
                Consulation
              </Button>
              <Button className="flex justify-between p-[12px] gap-[32px] bg-[#121212] border border-[#6A49A2]">
                Learn More {arrowRight}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col gap-16 py-10">
          <div className="flex flex-col items-center gap-[24px]">
            <h1 className="text-[42px] font-[700] text-[#D0D0D0]">
              Services We Provide
            </h1>
            <p className="text-[24px] tont-[500] text-[#717173] text-center ">
              We deliver expert legal solutions with a commitment to protecting
              <br></br>
              your rights and achieving the best outcomes.
            </p>
          </div>

          <div className="px-10 grid grid-cols-2 lg:grid-cols-3 gap-x-[62px] gap-y-[72px] items-stretch">
            <ServiceCard
              title="Corporate law"
              content={
                <>
                  Lorem ipsum dolor sit amet <br></br>
                  consectetur. Magna maecenas purus <br></br>
                  urna et augue sed fringilla faucibus <br></br>
                  lorem. Quis id vel in nibh tellus libero <br></br>
                  facilisis nisl. Elit aliquet ut enim <br></br>
                  dictumst nunc. At quam amet nunc in <br></br>
                  tempor eu pharetra.
                </>
              }
              icone={corporate}
            />

            <ServiceCard
              title="Civil right"
              content={
                <>
                  Lorem ipsum dolor sit amet <br></br>
                  consectetur. Magna maecenas purus <br></br>
                  urna et augue sed fringilla faucibus <br></br>
                  lorem. Quis id vel in nibh tellus libero <br></br>
                  facilisis nisl. Elit aliquet ut enim <br></br>
                  dictumst nunc. At quam amet nunc in <br></br>
                  tempor eu pharetra.
                </>
              }
              icone={civilRight}
            />

            <ServiceCard
              title="Administrative law"
              content={
                <>
                  Lorem ipsum dolor sit amet <br></br>
                  consectetur. Magna maecenas purus <br></br>
                  urna et augue sed fringilla faucibus <br></br>
                  lorem. Quis id vel in nibh tellus libero <br></br>
                  facilisis nisl. Elit aliquet ut enim <br></br>
                  dictumst nunc. At quam amet nunc in <br></br>
                  tempor eu pharetra.
                </>
              }
              icone={administrative}
            />

            <ServiceCard
              title="International judicial processes"
              content={
                <>
                  Lorem ipsum dolor sit amet <br></br>
                  consectetur. Magna maecenas purus <br></br>
                  urna et augue sed fringilla faucibus <br></br>
                  lorem. Quis id vel in nibh tellus libero <br></br>
                  facilisis nisl. Elit aliquet ut enim <br></br>
                  dictumst nunc. At quam amet nunc in <br></br>
                  tempor eu pharetra.
                </>
              }
              icone={international}
            />

            <ServiceCard
              title="Legal examination"
              content={
                <>
                  Lorem ipsum dolor sit amet <br></br>
                  consectetur. Magna maecenas purus <br></br>
                  urna et augue sed fringilla faucibus <br></br>
                  lorem. Quis id vel in nibh tellus libero <br></br>
                  facilisis nisl. Elit aliquet ut enim <br></br>
                  dictumst nunc. At quam amet nunc in <br></br>
                  tempor eu pharetra.
                </>
              }
              icone={legal}
            />

            <ServiceCard
              title="Criminal Justice"
              content={
                <>
                  Lorem ipsum dolor sit amet <br></br>
                  consectetur. Magna maecenas purus <br></br>
                  urna et augue sed fringilla faucibus <br></br>
                  lorem. Quis id vel in nibh tellus libero <br></br>
                  facilisis nisl. Elit aliquet ut enim <br></br>
                  dictumst nunc. At quam amet nunc in <br></br>
                  tempor eu pharetra.
                </>
              }
              icone={criminal}
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto ">
        <div className="flex flex-col px-10 py-24  gap-16">
          <h2 className="text-[#D0D0D0] text-[42px] font-[700] leading-[100%] text-center">
            What makes us different?
          </h2>

          <ul className=" flex justify-between gap-16 items-center">
            <li>
              <div className="flex flex-col items-center gap-4 rounded-[4px] bg-[#191A1D] py-[24px] px-[16px] border border-[#191A1D] hover:border hover-gradient-border-main">
                {experienced}
                <p className="font-[700] text-[28px] text-[#D0D0D0]">
                  Experienced
                </p>
              </div>
            </li>
            <li>
              <div
                className="flex flex-col items-center gap-4 rounded-[4px] bg-[#191A1D] py-[24px] px-[16px] border border-[#191A1D] hover:border hover-gradient-border-main
                          "
              >
                {afforable}
                <p className="font-[700] text-[28px] text-[#D0D0D0]">
                  Affordable
                </p>
              </div>
            </li>
            <li>
              <div
                className="flex flex-col items-center gap-4 rounded-[4px] bg-[#191A1D] py-[24px] px-[16px] border border-[#191A1D] hover:border hover-gradient-border-main
                          "
              >
                {flexible}
                <p className="font-[700] text-[28px] text-[#D0D0D0]">
                  Flexible
                </p>
              </div>
            </li>
            <li>
              <div
                className="flex flex-col items-center gap-4 rounded-[4px] bg-[#191A1D] py-[24px] px-[16px] border border-[#191A1D] hover:border hover-gradient-border-main
                          "
              >
                {approachable}
                <p className="font-[700] text-[28px] text-[#D0D0D0]">
                  Approachable
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto">
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

      <section className="max-w-[1280px] mx-auto ">
        <div className="grid  gap-[62px]">
          <div className="grid gap-6 text-center">
            <h2 className="font-[700] text-[42px] text-[#D0D0D0] leading-[100%]">
              Our Attorneys
            </h2>
            <p className="font-[500] text-[24px] text-[#717173]">
              Our skilled attorneys are dedicated to delivering exceptional
              legal <br></br>services, utilizing the latest technology to offer
              efficient and cost-<br></br>effective solutions tailored to your
              unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[62px]">
            <Area className="relative group overflow-hidden rounded-[4px]">
              <Image
                src="/lawyer.png"
                alt="Lawyer Image"
                width={301}
                height={448}
                className="rounded-[4px] w-full h-auto"
              />
              <div
                className="absolute bottom-0 left-[8px] right-[8px] h-1/3 bg-[#44424C]
                  translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 rounded-[4px] p-4 flex flex-col gap-3"
              >
                <div className="grid gap-1">
                  <div className="flex justify-between gap-[6px]">
                    <h3 className="text-[20px] font-[600] text-[#D0D0D0]">
                      Casey Arbenz
                    </h3>
                    {arrowUp}
                  </div>
                  <h4 className="text-[#AEAEAE] text-[16px]">Civil right</h4>
                </div>

                <p className="text-[12px] text-[#AEAEAE] font-[500]">
                  Casey Arbenz is an associate attorney. He is licensed in
                  Montana and will focus her practice on general estate planning
                  matters and insurance defense litigation.
                </p>
              </div>
            </Area>
            <Area className="relative group overflow-hidden rounded-[4px]">
              <Image
                src="/lawyer.png"
                alt="Lawyer Image"
                width={301}
                height={448}
                className="rounded-[4px] w-full h-auto"
              />
              <div
                className="absolute bottom-0 left-[8px] right-[8px] h-1/3 bg-[#44424C]
                  translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 rounded-[4px] p-4 flex flex-col gap-3"
              >
                <div className="grid gap-1">
                  <div className="flex justify-between gap-[6px]">
                    <h3 className="text-[20px] font-[600] text-[#D0D0D0] ">
                      Casey Arbenz
                    </h3>
                    {arrowUp}
                  </div>
                  <h4 className="text-[#AEAEAE] text-[16px]">Civil right</h4>
                </div>

                <p className="text-[12px] text-[#AEAEAE] font-[500]">
                  Casey Arbenz is an associate attorney. He is licensed in
                  Montana and will focus her practice on general estate planning
                  matters and insurance defense litigation.
                </p>
              </div>
            </Area>
            <Area className="relative group overflow-hidden rounded-[4px]">
              <Image
                src="/lawyer.png"
                alt="Lawyer Image"
                width={301}
                height={448}
                className="rounded-[4px] w-full h-auto"
              />
              <div
                className="absolute bottom-0 left-[8px] right-[8px] h-1/3 bg-[#44424C]
                  translate-y-full group-hover:translate-y-[-8px] transition-transform duration-300 rounded-[4px] p-4 flex flex-col gap-3"
              >
                <div className="grid gap-1">
                  <div className="flex justify-between gap-[6px]">
                    <h3 className="text-[20px] font-[600]  text-[#D0D0D0]">
                      Casey Arbenz
                    </h3>
                    {arrowUp}
                  </div>
                  <h4 className="text-[#AEAEAE] text-[16px]">Civil right</h4>
                </div>

                <p className="text-[12px] text-[#AEAEAE] font-[500]">
                  Casey Arbenz is an associate attorney. He is licensed in
                  Montana and will focus her practice on general estate planning
                  matters and insurance defense litigation.
                </p>
              </div>
            </Area>
          </div>
        </div>
      </section>

      <section className="max-w-[720px] mx-auto">
        <div className="px-15 py-35">
          <div className="relative h-[500px]">
            {/* Years of Experience */}
            <Area
              variant="lower__shadow"
              className="absolute  left-0 top-0 flex flex-col items-center justify-center text-center py-20 px-20"
            >
              <h3 className="text-3xl font-semibold">
                Years of <br />
                Experience
              </h3>
              <p className="text-5xl font-semibold mt-2">+00</p>
            </Area>

            {/* Cases Won */}
            <Area
              variant="lower__shadow"
              className="absolute left-88 top-22 flex flex-col items-center justify-center text-center py-20 px-20"
            >
              <h3 className="text-3xl font-semibold">Cases Won</h3>
              <p className="text-5xl font-semibold mt-2">+000</p>
            </Area>

            {/* Client Satisfaction */}
            <Area
              variant="lower__shadow"
              className="absolute  left-25 top-80  flex flex-col items-center justify-center text-center py-15 px-7"
            >
              <h3 className="text-3xl font-semibold">Client Satisfaction</h3>
              <p className="text-5xl font-semibold mt-2">00%</p>
            </Area>
          </div>
        </div>
      </section>

      <section className="bg-[url('/bck.jpeg')] bg-cover bg-bottom bg-no-repeat w-full h-[628px] relative ">
        {/* Darkening layer (overlay) */}
        <div className="absolute inset-0 bg-[#00000080] "></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1280px] ">
          <div className="w-full backdrop-blur-[50px] border-[2px] py-6 px-8 flex flex-col gap-[42px] rounded-[4px]">
            <div className="flex flex-col gap-1">
              <h2 className="font-[700] text-[42px] text-center text-[#F5F5F5]">
                Trusted by Many, Proven by Results
              </h2>
              <p className="font-[500] text-[24px] text-[#F5F5F5CC] text-center">
                We understand that many people may be reluctant to contact a
                lawyer because they’re <br /> worried they won’t be able to
                afford the fees. They may be tempted to try to handle their
                <br /> legal matter themselves, but that’s often a recipe for a
                less-than-desirable outcome.
              </p>
            </div>
            <div className="flex justify-center gap-[62px]">
              <Button className="font-[500] text-[24px] leading-[120%] py-[12px] px-[24px] text-[#D0D0D0]">
                Get In Toich
              </Button>
              <div className="flex gap-[16px] items-center">
                {telephone}
                <h4 className="font-[500] text-[24px]">+374 12122112</h4>
              </div>
              <div className="flex gap-[16px] items-center">
                {mail}
                <h4 className="font-[500] text-[24px]">Lawyerhelp@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto">
        <div className="grid p-10 gap-[62px]">
          <div className="flex flex-col gap-[24px] text-center">
            <h2 className="text-[#D0D0D0] text-[42px] font-[700]">
              Our Clients Say It Best
            </h2>
            <p className="text-[#717173] text-[24px] font-[500]">
              Our skilled attorneys are dedicated to delivering exceptional
              legal <br></br> services, utilizing the latest technology to offer
              efficient and cost-<br></br>effective solutions tailored to your
              unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-4 bg-[#0505] py-9 px-6 ">
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
              </div>

              <p className="text-[#717173] font-[500] text-[16px]">
                Great experience. Very communicative,
                <br />
                pleasant, and knowledgeable all the way
                <br />
                from the legal secretary to the paralegal
                <br />
                to the attorney. Everyone was on the
                <br />
                same page at the same time, very
                <br />
                refreshing. Everything was done online
                <br />
                as I was in NY and my transactions were
                <br />
                for the state of AZ. TYVM
              </p>
            </div>

            <div className="bg-[#191A1D] py-9 px-6">
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
                <p className="text-[#717173] font-[500] text-[16px]">
                  Great experience. Very communicative,
                  <br />
                  pleasant, and knowledgeable all the way
                  <br />
                  from the legal secretary to the paralegal
                  <br />
                  to the attorney. Everyone was on the
                  <br />
                  same page at the same time, very
                  <br />
                  refreshing. Everything was done online
                  <br />
                  as I was in NY and my transactions were
                  <br />
                  for the state of AZ. TYVM
                </p>
              </div>
            </div>

            <div className="bg-[#191A1D] py-9 px-6">
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
                <p className="text-[#717173] font-[500] text-[16px]">
                  Great experience. Very communicative,
                  <br />
                  pleasant, and knowledgeable all the way
                  <br />
                  from the legal secretary to the paralegal
                  <br />
                  to the attorney. Everyone was on the
                  <br />
                  same page at the same time, very
                  <br />
                  refreshing. Everything was done online
                  <br />
                  as I was in NY and my transactions were
                  <br />
                  for the state of AZ. TYVM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto">
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

      <section className="max-w-[1280px] mx-auto">
        <div className=" py-[100px] px-[62px] flex flex-col gap-15">
          <div className="flex flex-col gap-6 text-center">
            <h2 className="font-[700] text-[42px] text-[#D0D0D0] leading-[100%]">
              Stay Informed
            </h2>
            <p className="font-[500] text-[24px] leading-[100%] text-[#717173]">
              Vel feugiat consectet cum fermentum ex consectetu exercitatio
              morbi occaecat, vestibulu nam congue <br /> exercitati ex minim
              vestibulu ubi quas-voluptate parturien voluptat ad saep tempor
              culpa.
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
              <div className="flex flex-col justify-between w-1/2">
                <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                  Exciting News: Facundo <br /> Banchero to Join LFN <br />
                  Secondment Program in <br />
                  Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
                    February 24, 2025
                  </p>
                  <div className="text-[#717173]">{arrowRight}</div>
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
              <div className="flex flex-col justify-between w-1/2">
                <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                  Exciting News: Facundo <br /> Banchero to Join LFN <br />
                  Secondment Program in <br />
                  Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
                    February 24, 2025
                  </p>
                  <div className="text-[#717173]">{arrowRight}</div>
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
              <div className="flex flex-col justify-between w-1/2">
                <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                  Exciting News: Facundo <br /> Banchero to Join LFN <br />
                  Secondment Program in <br />
                  Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
                    February 24, 2025
                  </p>
                  <div className="text-[#717173]">{arrowRight}</div>
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
              <div className="flex flex-col justify-between w-1/2">
                <p className="text-[#D0D0D099] text-[20px] font-[600] leading-[120%]">
                  Exciting News: Facundo <br /> Banchero to Join LFN <br />
                  Secondment Program in <br />
                  Colombia
                </p>
                <div className="flex justify-between">
                  {clock}
                  <p className="font-[500] text-[16px] leading-[100%] text-[#717173]">
                    February 24, 2025
                  </p>
                  <div className="text-[#717173]">{arrowRight}</div>
                </div>
              </div>
            </Area>
          </div>
        </div>
      </section>

      <section className=" w-full">
        <AutoCarousel />
      </section>

      <section className="max-w-[1280px] mx-auto">
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

// export default function Home() {
//   return (
//     <main>
//       <section className="max-w-[1280px]  mx-auto ">
//         <div className="flex items-center mobile:grid mobile:items-center ">
//           <div className="w-1/2 mobile:w-full">
//             <Image
//               src="/main.gif"
//               unoptimized
//               alt="GIF"
//               width={814.27}
//               height={768.44}
//               className="rotate-[-118.5deg]"
//             />
//           </div>

//           <div className="w-1/2 flex flex-col justify-center p-[12px] gap-[32px] mobile:w-full   ">
//             <div className="grid gap-4">
//               <h1 className="font-[700] text-[42px] leading-[100%] text-[#D0D0D0] mobile:text-4xl ">
//                 Specialised Attorney With Experiance
//               </h1>
//               <p className="font-[500] text-[24px] leading-[100%] text-[#717173] mobile:text-xl">
//                 Volutpa sit&apos;eu o porttito dolor volutpa neque faucib, a
//                 praese egesta quisqua ut consect vita neque vita&apos; aliqua,
//                 mi et scelerisqu tempus a felis feugiat.
//               </p>
//             </div>
//             <div className="flex gap-[62px]">
//               <Button className="font-[500] text-[24px] leading-[120%] py-[12px] px-[24px]">
//                 Consulation
//               </Button>
//               <Button className="flex justify-between p-[12px] gap-[32px] bg-[#121212] border border-[#6A49A2]">
//                 Learn More {arrowRight}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
