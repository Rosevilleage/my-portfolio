import Browser from "@/components/Browser/Browser";
import DesktopBoundary from "@/components/desktop/DesktopBoundary";
import SpinCircle from "@/components/desktop/symbol/SpinCircle";
import Doc from "@/components/doc/Doc";

export default function Home() {
  return (
    <main className="box-border relative w-full h-screen bg-slate-700">
      <SpinCircle />
      <DesktopBoundary />
    </main>
  );
}
