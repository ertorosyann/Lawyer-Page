"use client";

import { removeToken } from "@/app/api/_helpers/actionToken";
import { edit, logo, logOuth } from "@/app/assets/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayer() {
  const pathname = usePathname();
  const navItems = [
    { title: "Blog", href: "/admin/blog" },
    { title: "Our Lawyer", href: "/admin/lawyers" },
    { title: "Our Partners", href: "/admin/partners" },
  ];

  return (
    <section className="bg-[#0f0f0f0f] h-full">
      <div className="flex flex-col justify-between h-full px-10">
        <div className="grid gap-15">
          {logo}
          <ul className="grid gap-10 font-[500] text-[28px]">
            {navItems.map(({ title, href }) => (
              <li key={href} className="hover:bg-[#F3F4F6]">
                <div className="flex justify-between items-center ">
                  <Link
                    href={href}
                    className={`${
                      pathname === href ? "text-[#6A49A2] " : ""
                    } transition`}
                  >
                    {title}
                  </Link>
                  {pathname === href && edit}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link onClick={removeToken} href="/login">
          <div className="flex justify-between p-5 font-[600] text-[28px] hover:bg-amber-50 curs">
            <p>Log Out</p>
            {logOuth}
          </div>
        </Link>
      </div>
    </section>
  );
}
