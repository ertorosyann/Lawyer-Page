import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-[10rem] bg-[#121212]">{children}</main>
      <Footer />
    </>
  );
}
