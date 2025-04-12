import { FC, ReactNode } from "react";
import { Area } from "./Area";
import { Button } from "./Button";
import { arrowRight } from "@/app/assets/svg";

interface ServiceCardProps {
  title: string;
  content: ReactNode;
  icone: ReactNode;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  icone,
  title,
  content,
}) => (
  <Area className="">
    <div className="h-full group hover:bg-[#44424C] flex justify-end flex-col gap-10 px-[16px] py-[24px] ">
      <div className="grid gap-10">
        <div className="flex flex-col gap-[12px]">
          {icone}
          <h2 className="font-[500] text-[24px] leading-[100%]">{title}</h2>
        </div>
        <p className="font-[500] text-[16px] text-[#757677] leading-[100%]">
          {content}
        </p>
      </div>
      <div className="flex justify-end">
        <Button className="flex justify-between p-[12px] gap-[32px] bg-[#44424C]  group-hover:bg-[#44424C] group-hover:border group-hover:border-[#D0D0D0]">
          Learn More {arrowRight}
        </Button>
      </div>
    </div>
  </Area>
);
