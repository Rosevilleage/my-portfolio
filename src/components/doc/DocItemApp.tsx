"use client";

import Image from "next/image";
import { FcFolder } from "react-icons/fc";
import { AiFillGithub, AiFillRead } from "react-icons/ai";
import type { DocItem } from "@/components/desktop/config";

interface DocItemAppProps {
  item: DocItem;
  onClick: () => void;
  isAboutOpen?: boolean;
}

const ICON_SIZE_CLASS = "w-[35px] h-[35px] max-sm:w-14 max-sm:h-14";

export default function DocItemApp({
  item,
  onClick,
  isAboutOpen = false,
}: DocItemAppProps): JSX.Element {
  const renderIcon = (): React.ReactNode => {
    switch (item) {
      case "about":
        return (
          <Image
            src="/images/about.svg"
            alt="about"
            fill
            style={{ borderRadius: "10px" }}
          />
        );
      case "projects":
        return <FcFolder size={28} />;
      case "github":
        return <AiFillGithub size={28} className="text-white" />;
      case "blog":
        return <AiFillRead size={28} className="text-white" />;
      default:
        return null;
    }
  };

  const label = (): string => {
    switch (item) {
      case "about":
        return "about";
      case "projects":
        return "projects";
      case "github":
        return "github";
      case "blog":
        return "blog";
      default:
        return item;
    }
  };

  return (
    <div
      className="relative flex flex-col items-center cursor-pointer group"
      onClick={onClick}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-[10px] bg-gray-700 ${ICON_SIZE_CLASS}`}
      >
        {renderIcon()}
      </div>
      {item === "about" && isAboutOpen && (
        <div className="mx-auto mt-1 w-1 h-1 rounded-full bg-slate-300 max-sm:hidden" />
      )}
      <div className="hidden max-sm:group-hover:block sm:group-hover:block absolute px-[5px] py-[3px] -translate-x-1/2 left-1/2 -top-10 bg-black rounded-md z-10">
        <span className="absolute w-2.5 h-2.5 -translate-x-1/2 -bottom-2 left-1/2 border-t-8 border-t-black border-r-8 border-l-8 border-r-transparent border-l-transparent" />
        <p className="text-sm text-white text-center">{label()}</p>
      </div>
    </div>
  );
}
