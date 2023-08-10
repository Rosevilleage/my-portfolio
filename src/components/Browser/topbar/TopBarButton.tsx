import {
  AiOutlineClose,
  AiOutlineArrowsAlt,
  AiOutlineShrink,
  AiOutlineMinus,
} from "react-icons/ai";
import { TopBarProps } from "./TopBar";
import { AppTitle } from "@/redux/slices/openAppSlice";
import { useAppDispatch } from "@/redux/hooks";

const colorStyle = {
  red: "text-red-500 bg-red-500",
  yellow: "text-yellow-500 bg-yellow-500",
  green: "text-green-600 bg-green-600",
};

const DefaultBtnStyle =
  "flex items-center justify-center w-4 h-4 font-semibold rounded-full hover:text-black active:bg-gradient-to-br from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] ";

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
  title: AppTitle;
}

export default function TopBarButton({
  color,
  browserButtonHandler,
  title,
}: TopBarButtonProps) {
  const iconSize = "14";
  return (
    <button
      className={DefaultBtnStyle + colorStyle[color]}
      {...browserButtonHandler[color]}
    >
      {color === "red" && <AiOutlineClose size={iconSize} />}
      {color === "yellow" && <AiOutlineMinus size={iconSize} />}
      {color === "green" && <AiOutlineArrowsAlt size={iconSize} />}
    </button>
  );
}
