import Image from "next/image";
import { AppTitle } from "../desktop/config";

const APPIMAGES = {
  about: "/images/about.svg",
  cocktail: "/images/cocktail.svg",
  todo: "/images/todo.svg",
  portfolio: "/images/portfolio.svg",
};

interface AppProps {
  title: AppTitle;
  isOpen: boolean;
  appClickHandler: (title: AppTitle) => void;
}

export default function App({ title, isOpen, appClickHandler }: AppProps) {
  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => appClickHandler(title)}
    >
      <div className=" group-hover:block hidden absolute px-[5px] py-[3px] -translate-x-1/2 left-1/2 -top-10 bg-black rounded-md max-sm:group-hover:hidden ">
        <span className="absolute w-2.5 h-2.5 -translate-x-1/2 -bottom-2 left-1/2 border-t-8 border-t-black border-r-8 border-l-8 border-r-transparent border-l-transparent "></span>
        <p className="text-sm text-white tsxt-center">{title}</p>
      </div>
      <div className="relative w-[35px] h-[35px] overflow-hidden max-sm:w-14 max-sm:h-14">
        <Image
          src={APPIMAGES[title]}
          alt={title + " icon image"}
          style={{ borderRadius: "10px" }}
          fill
        />
      </div>
      {isOpen && (
        <div className="w-1 h-1 mx-auto mt-1 rounded-full bg-slate-300 max-sm:hidden" />
      )}
    </div>
  );
}
