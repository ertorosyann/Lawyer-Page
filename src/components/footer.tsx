import {
  location_black,
  logo,
  mail_black,
  telephone_black,
} from "@/app/assets/svg";

export const Footer = () => {
  return (
    <footer className="px-10 pt-35 pb-10">
      <section className="max-w-[1280px] mx-auto">
        <div className="flex justify-between pb-10 border-b-2 border-[#7B7B7B]">
          <div className="flex flex-col gap-4">
            {logo}
            <h2 className="font-[700] text-[28px] text-[#D0D0D0] leading-[100%]">
              Specialised Attorney With <br />
              Experiance
            </h2>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              {telephone_black}
              <p className="font-[500] text-[24px] leading-[100%]">
                +374 12122112
              </p>
            </div>
            <div className="flex items-center gap-4">
              {mail_black}
              <p className="font-[500] text-[24px] leading-[100%]">
                Lawyerhelp@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              {location_black}
              <p className="font-[500] text-[24px] leading-[100%]">
                Armenia, Erevan, St Abovyan 12/5
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 flex justify-between items-center">
          <ul className="flex space-x-[60px] text-[22px] text-[700]">
            <li>About</li>
            <li>Resources</li>
            <li>Support</li>
            <li>Privacy</li>
          </ul>
          <div>
            <p className="text-[16px] font-[400] text-[#717173] ">
              © Copyright 2025. All Rights Reserved{" "}
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};
