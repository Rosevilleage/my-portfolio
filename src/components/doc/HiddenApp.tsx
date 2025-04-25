import useBrowserAnimateTrigger from "@/utills/useBrowserAnimateTrigger";
import Image from "next/image";
import { AppTitle } from "../desktop/config";

const HIDENAPPIMAGE = {
  about: "/images/aboutHidden.png",
  scraping: "/images/scrapingHidden.png",
  cocktail: "/images/cocktailHidden.png",
  mealmory: "/images/mealmoryHidden.png",
  portfolio: "/images/portfolioHidden.png",
  fitrace: "/images/fitraceHidden.png",
  cuther: "/images/cutherHidden.png",
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
            priority
          />
        </div>
      )}
    </>
  );
}
