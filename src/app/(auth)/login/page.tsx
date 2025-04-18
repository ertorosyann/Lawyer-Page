"use client";
import { handleLogin } from "@/app/api/_helpers/action";
import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import Link from "next/link";
import { useActionState } from "react";

export default function Login() {
  const [message, formAction] = useActionState(handleLogin, "");

  return (
    <section className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] max-w-[1024px] w-full ">
      <Area className="p-15 grid gap-20 rounded-[20px]">
        <div className="flex justify-center">
          <h1 className="mx-auto font-[700] text-[30px] text-muted-light ">
            ADMIN LOGIN
          </h1>
        </div>

        <form action={formAction} className="w-full grid gap-10">
          {message && (
            <p className="text-[#ff0000] font-[500] text-[24px] ">{message}</p>
          )}
          <div className="grid gap-4">
            <p className="font-[600] text-[24px] leading-[20px] text-muted">
              Username or Email
            </p>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="font-[600] bg-[#242028] text-[32px] px-4 py-3 rounded-lg  text-muted-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-[#6A49A2] focus:shadow-none shadow-lg shadow-[#707070] transition"
            />
          </div>

          <div className="grid gap-4">
            <p className="font-[600] text-[24px] leading-[20px] text-muted">
              Password
            </p>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="font-[600] bg-[#242028] text-[32px] px-4 py-3 rounded-lg  text-muted-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-[#6A49A2] focus:shadow-none shadow-lg shadow-[#707070] transition"
            />
          </div>

          <Button
            type="submit"
            className="font-[600] w-full rounded-2xl py-6 px-15 text-[32px] text-muted-light cursor-pointer"
          >
            Login
          </Button>

          <Link
            href="/reset"
            className="mx-auto font-[600] text-[20px] leading-[20px] text-[#007BFF]"
          >
            Forgot Password ?
          </Link>
        </form>
      </Area>
    </section>
  );
}
