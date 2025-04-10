import { logo, usa } from "@/app/assets/svg";
import { NavBar } from "./navbar";
import { Button } from "@/custom/Button";

export const Header = () => {
  return (
    <header className="max-w-[1280px] mx-auto ">
      <div className="flex justify-between py-[14px] px-[5px]">
        <div >{logo}</div>
        <div className=" flex items-center gap-[62px] text-[#D0D0D0]">
          <NavBar />
          <div className="flex items-center gap-[24px] ">
            <Button className="text-[20px] leading-[100%]	px-[18px] py-[13px]">Contact Us</Button>
            <div className="flex  items-center">{usa}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
