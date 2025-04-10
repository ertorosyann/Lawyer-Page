import {
  administrative,
  arrowRight,
  civilRight,
  corporate,
} from "@/app/assets/svg";
// import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import { ServiceCard } from "@/custom/ServiceCart";
import Image from "next/image";

export const Main = () => {
  return (
    <main>
      <section className="max-w-[1280px] mx-auto">
        <div className="flex items-center">
          <div className="w-1/2">
            <Image
              src="/main.gif"
              alt="GIF"
              width={814.27}
              height={768.44}
              className="rotate-[-118.5deg]"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-center p-[12px] gap-[32px]">
            <div className="gap-[12px]">
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

      <section className="max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-[62px] ">
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

          <div className="px-[120px] flex flex-col gap-[72px]">
            <div className="flex flex-row gap-[62px]">
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
            </div>

            {/* <div className="flex flex-row">
              <Area></Area>
              <Area></Area>
              <Area></Area>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};
