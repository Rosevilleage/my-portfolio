import {
  AiOutlineClose,
  AiOutlineArrowsAlt,
  AiOutlineShrink,
  AiOutlineMinus,
} from "react-icons/ai";

const colorStyle = {
  red: "text-red-500 bg-red-500 max-sm:w-[20px] max-sm:h-[20px] max-sm:text-black",
  yellow: "text-yellow-500 bg-yellow-500 max-sm:hidden",
  green: "text-green-600 bg-green-600 max-sm:hidden",
};
const DefaultBtnStyle =
  "flex items-center justify-center w-4 h-4 font-semibold rounded-full group-hover:text-black active:bg-gradient-to-br from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] ";

interface TopBarButtonProps {
  color: "red" | "yellow" | "green";
  browserButtonHandler: {
    green: {
      onClick: () => void;
    };
    red: {
      onClick: () => void;
    };
    yellow: {
      onClick: () => void;
    };
  };
  isFull: boolean;
}

export default function TopBarButton({
  color,
  browserButtonHandler,
  isFull,
}: TopBarButtonProps) {
  const iconSize = "14";
  return (
    <button
      className={DefaultBtnStyle + colorStyle[color]}
      {...browserButtonHandler[color]}
    >
      {color === "red" && <AiOutlineClose size={iconSize} />}
      {color === "yellow" && <AiOutlineMinus size={iconSize} />}
      {color === "green" &&
        (isFull ? (
          <AiOutlineShrink size={iconSize} />
        ) : (
          <AiOutlineArrowsAlt size={iconSize} />
        ))}
    </button>
  );
}
