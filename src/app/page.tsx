import Browser from "@/components/Browser/Browser";
import DesktopBoundary from "@/components/desktop/DesktopBoundary";
import SpinCircle from "@/components/desktop/symbol/SpinCircle";

export default function Home() {
  return (
    <main className="relative w-full bg-slate-700">
      <SpinCircle />
      <DesktopBoundary />
    </main>
  );
}
