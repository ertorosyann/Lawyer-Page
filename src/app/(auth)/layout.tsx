export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen    
      bg-[#121212]"
    >
      {children}
    </main>
  );
}
