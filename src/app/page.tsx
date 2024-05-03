import DesktopBoundary from "@/components/desktop/DesktopBoundary";
import SpinCircle from "@/components/desktop/symbol/SpinCircle";

export default function Home() {
  return (
    <main className="box-border relative w-full h-screen bg-zinc-800">
      <SpinCircle />
      <DesktopBoundary />
    </main>
  );
}
