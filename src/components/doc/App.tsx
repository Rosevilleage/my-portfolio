import Image from "next/image";

const APPIMAGES = {
  about: "/images/about.png",
  cocktail: "/images/cocktail.png",
  todo: "/images/list.png",
  portfolio: "/images/portfolio.png",
};
export type Title = "about" | "cocktail" | "todo" | "portfolio";
interface AppProps {
  title: Title;
  isOpen: boolean;
}

export default function App({ title, isOpen }: AppProps) {
  return (
    <div className="cursor-pointer ">
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
