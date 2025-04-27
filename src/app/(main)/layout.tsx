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
      <main className="md:pt-[10rem] bg-darkk mobile:pt-20">{children}</main>
      <Footer />
    </>
  );
}
