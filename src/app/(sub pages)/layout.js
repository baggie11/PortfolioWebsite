import HomeButton from "@/components/HomeButton";


export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-32 relative ">
        <HomeButton/>
        {children}
        </main>
  );
}
