"use client";
import TopBarButton from "./TopBarButton";
import { AppTitle } from "@/redux/slices/openAppSlice";
import useTopbarButtons from "@/utills/useTopbarButtons";

export interface TopBarProps {
  title: AppTitle;
  isFullScreen: boolean;
  moveHandler:
    | {
        onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => void;
        onMouseDown?: undefined;
      }
    | {
        onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart?: undefined;
      };
}

const ButtonColors = ["red", "yellow", "green"] as const;

export default function TopBar({
  moveHandler,
  title,
  isFullScreen,
}: TopBarProps) {
  const topbarHookProps = {
    title,
  };
  const { onFullscreenHandler, onCloseHandler, onHiddenHandler } =
    useTopbarButtons(topbarHookProps);

  const browserButtonHandler = {
    green: onFullscreenHandler,
    red: onCloseHandler,
    yellow: onHiddenHandler,
  };

  return (
    <div
      className="w-full px-2 py-2 bg-gray-800 "
      {...(!isFullScreen && { ...moveHandler })}
    >
      <div className="flex justify-around w-16 h-max group max-sm:block ">
        {ButtonColors.map((color) => (
          <TopBarButton
            key={color}
            color={color}
            browserButtonHandler={browserButtonHandler}
            isFull={isFullScreen}
          />
        ))}
      </div>
    </div>
  );
}
