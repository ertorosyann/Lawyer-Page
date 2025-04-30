import AdminLayer from "@/components/adminLayer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" text-black bg-[#F3F4F6] grid gap-20 grid-cols-[1fr_4fr] ">
      <AdminLayer />
      <section className="h-screen overflow-y-auto p-4">{children}</section>
    </main>
  );
}
