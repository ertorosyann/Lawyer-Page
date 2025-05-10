import { arrowRight } from "@/app/assets/svg";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import { Button } from "./Button";
import { Area } from "./Area";

interface ServiceCardProps {
  title: string;
  content: ReactNode;
  icone: ReactNode;
  link: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  icone,
  title,
  content,
  link,
}) => {
  const t = useTranslations("Home");
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  return (
    <Area className="mobile:m-5">
      <div className="h-full group hover:bg-[#44424C] flex justify-end flex-col gap-10 px-4 py-6 hover:transition-[200] ">
        <div className="grid gap-10">
          <div className="flex flex-col gap-3">
            {icone}
            <h2 className="font-medium text-2xl  mobile:text[16px]">{title}</h2>
          </div>
          <p className="font-medium text-base text-[#757677] mobile:text-xs">
            {content}
          </p>
        </div>
        <div className="flex justify-end">
          <Button
            className="flex justify-between p-3 gap-8 bg-[#44424C]  group-hover:bg-[#6A49A2] group-hover:border-[#D0D0D0] items-center mobile:text-xs"
            onClick={handleClick}
          >
            {t("btn-learn")} {arrowRight}
          </Button>
        </div>
      </div>
    </Area>
  );
};
