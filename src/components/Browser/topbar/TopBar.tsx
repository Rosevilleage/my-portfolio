"use client";
import TopBarButton from "./TopBarButton";

import { useAppDispatch } from "@/redux/hooks";
import { AppTitle, closeApp } from "@/redux/slices/openAppSlice";
import { hiddenApp, veiwApp } from "@/redux/slices/hiddenAppSlice";

export interface TopBarProps {
  title: AppTitle;
  maximizeHandler: () => void;
  moveHandler: {
    onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
  };
}

const ButtonColors = ["red", "yellow", "green"] as const;

export default function TopBar({
  maximizeHandler,
  moveHandler,
  title,
}: TopBarProps) {
  const dispatch = useAppDispatch();
  const onCloseHandler = () => {
    // browser open state false
    dispatch(closeApp(title));
    dispatch(veiwApp(title));
  };

  const onHideHandler = () => {
    // browser hiden state true
    dispatch(hiddenApp(title));
  };
  const browserButtonHandler = {
    green: maximizeHandler,
    red: onCloseHandler,
    yellow: onHideHandler,
  };

  return (
    <div className="sticky w-full px-2 py-2 bg-gray-800 " {...moveHandler}>
      <div className="flex justify-around w-16">
        {ButtonColors.map((color) => (
          <TopBarButton
            key={color}
            color={color}
            browserButtonHandler={browserButtonHandler}
          />
        ))}
      </div>
    </div>
  );
}
