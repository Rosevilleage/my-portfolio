"use client";

import { AppTitle } from "@/redux/slices/openAppSlice";
import Image from "next/image";
import { useState } from "react";

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
  const [showArrow, setShowArrow] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => appClickHandler(title)}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
    >
      {showArrow && (
        <div className="absolute px-[5px] py-[3px] -translate-x-1/2 left-1/2 -top-10 bg-black rounded-md ">
          <span className="absolute w-2.5 h-2.5 -translate-x-1/2 -bottom-2 left-1/2 border-t-8 border-t-black border-r-8 border-l-8 border-r-transparent border-l-transparent "></span>
          <p className="text-sm text-white tsxt-center">{title}</p>
        </div>
      )}
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
