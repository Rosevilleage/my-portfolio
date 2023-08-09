import { AppTitle } from "@/redux/slices/openAppSlice";
import Image from "next/image";

const APPIMAGES = {
  about: "/images/about.png",
  cocktail: "/images/cocktail.png",
  todo: "/images/todo.png",
  portfolio: "/images/portfolio.png",
};

interface AppProps {
  title: AppTitle;
  isOpen: boolean;
  appClickHandler: (title: AppTitle) => void;
}

export default function App({ title, isOpen, appClickHandler }: AppProps) {
  return (
    <div className="cursor-pointer" onClick={() => appClickHandler(title)}>
      <Image
        src={APPIMAGES[title]}
        width={35}
        height={35}
        alt={title + " icon image"}
        style={{ borderRadius: "10px" }}
      />
      {isOpen && (
        <div className="w-1 h-1 mx-auto mt-1 rounded-full bg-slate-300" />
      )}
    </div>
  );
}
