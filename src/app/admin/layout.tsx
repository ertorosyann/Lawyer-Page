import AdminLayer from "@/components/adminLayer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen  text-black bg-[#F3F4F6] p-10 grid gap-20 grid-cols-[1fr_4fr] ">
      <AdminLayer />
      <section>{children}</section>
    </main>
  );
}
