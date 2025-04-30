"use client";

import { edit, logo, logOuth } from "@/app/assets/svg";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
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
    <section className="p-4">
      <div className="flex flex-col justify-between h-full px-10">
        <div className="grid gap-15">
          {logo}
          <ul className="grid gap-10 font-[500] text-[28px]">
            {navItems.map(({ title, href }) => (
              <li key={href}>
                <div
                  className={`flex justify-between items-center rounded-2xl px-2 ${
                    pathname === href ? "bg-gray-200" : ""
                  }`}
                >
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
        <LogoutLink postLogoutRedirectURL="/login">
          <div className="flex justify-between p-5 font-[600] text-[28px] hover:bg-amber-50 items-center cursor-pointer">
            <p>Log Out</p>
            {logOuth}
          </div>
        </LogoutLink>
        {/* <Link onClick={removeToken} href="/login">
          <div className="flex justify-between p-5 font-[600] text-[28px] hover:bg-amber-50 curs">
            <p>Log Out</p>
            {logOuth}
          </div>
        </Link> */}
      </div>
    </section>
  );
}
