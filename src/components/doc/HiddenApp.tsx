import { AppTitle } from "@/redux/slices/openAppSlice";
import Image from "next/image";

const HIDENAPPIMAGE = {
  about: "/images/aboutHidden.png",
  cocktail: "/images/cocktailHidden.png",
  todo: "/images/listHidden.png",
  portfolio: "/images/portfolioHidden.png",
};

interface HiddenProps {
  title: AppTitle;
  isHidden: boolean;
  isOpen: boolean;
  hiddenAppClickHandler: (title: AppTitle) => void;
}
export default function HiddenApp({
  title,
  isHidden,
  isOpen,
  hiddenAppClickHandler,
}: HiddenProps) {
  return (
    <>
      {isHidden && isOpen && (
        <div
          className="ml-2 cursor-pointer"
          onClick={() => hiddenAppClickHandler(title)}
        >
          <Image
            src={HIDENAPPIMAGE[title]}
            width={50}
            height={40}
            alt={title + " browser screen shot"}
          />
        </div>
      )}
    </>
  );
}
