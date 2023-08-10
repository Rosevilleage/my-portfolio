import { AppTitle } from "@/redux/slices/openAppSlice";
import useBrowserAnimateTrigger from "@/utills/useBrowserAnimateTrigger";
import Image from "next/image";

const HIDENAPPIMAGE = {
  about: "/images/aboutHidden.png",
  cocktail: "/images/cocktailHidden.png",
  todo: "/images/todoHidden.png",
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
  const hiddenClick = useBrowserAnimateTrigger(title, () =>
    hiddenAppClickHandler(title)
  );
  return (
    <>
      {isHidden && isOpen && (
        <div className="ml-2 cursor-pointer" {...hiddenClick}>
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
