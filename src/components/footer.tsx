import {
  location_black,
  logo,
  mail_black,
  telephone_black,
} from "@/app/assets/svg";

export const Footer = () => {
  return (
    <footer className="px-4 md:px-10 pt-10 md:pt-35 pb-10 bg-[#121212]">
      <section className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between pb-10 border-b-2 border-[#7B7B7B] gap-10">
          {/* Mobile styles: center content and adjust text size */}
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            {logo}
            <h2 className="font-[700] text-[20px] md:text-[28px] text-[#D0D0D0] leading-[100%]">
              Specialised Attorney With <br />
              Experiance
            </h2>
          </div>
          {/* Mobile styles: smaller text and centered items */}
          <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
            <div className="flex items-center gap-4">
              {telephone_black}
              <p className="font-[500] text-[18px] md:text-[24px] leading-[100%]">
                +374 12122112
              </p>
            </div>
            <div className="flex items-center gap-4">
              {mail_black}
              <p className="font-[500] text-[18px] md:text-[24px] leading-[100%]">
                Lawyerhelp@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              {location_black}
              <p className="font-[500] text-[18px] md:text-[24px] leading-[100%]">
                Armenia, Erevan, St Abovyan 12/5
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Mobile styles: vertical menu layout and smaller text */}
          <ul className="flex flex-col md:flex-row items-center gap-3 md:space-x-[60px] text-[16px] md:text-[22px] font-[700] text-center">
            <li>About</li>
            <li>Resources</li>
            <li>Support</li>
            <li>Privacy</li>
          </ul>
          {/* Mobile styles: smaller font and centered */}
          <p className="text-[14px] md:text-[16px] font-[400] text-[#717173] text-center">
            © Copyright 2025. All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
};
