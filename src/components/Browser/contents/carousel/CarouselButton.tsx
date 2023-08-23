import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

interface CarouselButtonProps {
  buttonMaterials: {
    prevChangeHandler: () => void;
    nextChangeHandler: () => void;
  };
}
export default function CarouselButton({
  buttonMaterials,
}: CarouselButtonProps) {
  const { prevChangeHandler, nextChangeHandler } = buttonMaterials;
  const buttonCondig = {
    size: 40,
    color: "rgb(78, 78, 78)",
    display: "hidden group-hover:block",
    boxStyle:
      "absolute top-0 h-[calc(100%-35px)] flex items-center justify-center w-1/6 group hover:bg-[rgba(114,114,114,0.2)] ",
  };
  const carouselArrow = [
    {
      pos: "left-0",
      button: (size: number, color: string, display: string) => (
        <BsChevronDoubleLeft size={size} color={color} className={display} />
      ),
      onClick: prevChangeHandler,
    },
    {
      pos: "right-0",
      button: (size: number, color: string, display: string) => (
        <BsChevronDoubleRight size={size} color={color} className={display} />
      ),
      onClick: nextChangeHandler,
    },
  ];
  return (
    <>
      {carouselArrow.map(({ pos, button, onClick }) => (
        <div
          key={pos}
          className={buttonCondig.boxStyle + pos}
          onClick={onClick}
        >
          {button(buttonCondig.size, buttonCondig.color, buttonCondig.display)}
        </div>
      ))}
    </>
  );
}
