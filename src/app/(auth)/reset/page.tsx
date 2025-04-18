import { Area } from "@/custom/Area";
import { Button } from "@/custom/Button";
import Link from "next/link";

export default function Login() {
  return (
    <section className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] max-w-[1024px] w-full ">
      <Area className="p-15 grid gap-20 rounded-[20px]">
        <div className="flex justify-center">
          <h1 className="mx-auto font-[700] text-[30px]  text-muted-light ">
            Forgot Password
          </h1>
        </div>
        <div className="w-full grid gap-10 ">
          <div className="grid gap-4">
            <p className="font-[600] text-[24px] leading-[20px] text-muted">
              Username or Email
            </p>
            <input
              type="password"
              placeholder="username"
              className="font-[600] bg-[#242028] text-[32px] px-4 py-3 rounded-lg  text-muted-light placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-none shadow-lg shadow-[#707070] transition"
            />
          </div>

          <Button className="font-[600] w-full rounded-2xl py-6 px-15 text-[32px] text-muted-light cursor-pointer">
            Reset Password
          </Button>
          <Link
            href="/login"
            className="mx-auto font-[600] text-[20px] leading-[20px] text-[#007BFF]"
          >
            Login
          </Link>
        </div>
      </Area>
      {/* <BackgroundImages /> */}
    </section>
  );
}
