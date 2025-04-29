import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Login() {
  return (
    <section className="h-screen grid justify-center items-center">
      {/* <LoginLink>Login</LoginLink> */}
      <Button
        variant="outline"
        className="w-[120px] h-[50px] text-[22px] text-muted-light"
      >
        <LoginLink>Login</LoginLink>
      </Button>
    </section>
  );
}
