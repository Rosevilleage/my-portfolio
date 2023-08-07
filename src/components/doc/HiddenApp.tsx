import { Title } from "./App";
import Image from "next/image";

const HIDENAPPIMAGE = {
  about: "/images/aboutHidden.png",
  cocktail: "/images/cocktailHidden.png",
  todo: "/images/listHidden.png",
  portfolio: "/images/portfolioHidden.png",
};

interface HiddenProps {
  title: Title;
  isHidden: boolean;
}
export default function HiddenApp({ title, isHidden }: HiddenProps) {
  return (
    <>
      {isHidden && (
        <div className="ml-2 cursor-pointer">
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
