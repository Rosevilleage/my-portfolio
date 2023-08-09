"use client";
import TopBarButton from "./TopBarButton";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AppTitle, closeApp } from "@/redux/slices/openAppSlice";
import { hiddenApp, veiwApp } from "@/redux/slices/hiddenAppSlice";
import { bringFront, deleteZIndex } from "@/redux/slices/zIndexSlice";
import { setFull, setInit } from "@/redux/slices/fullScreenSlice";

export interface TopBarProps {
  title: AppTitle;
  maximizeHandler: () => void;
  initializeHandler: () => void;
  moveHandler: {
    onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
  };
}

const ButtonColors = ["red", "yellow", "green"] as const;

export default function TopBar({
  maximizeHandler,
  initializeHandler,
  moveHandler,
  title,
}: TopBarProps) {
  const isFullScreen = useAppSelector((state) => state.fullScreen);

  const dispatch = useAppDispatch();
  const onCloseHandler = () => {
    // browser open state false
    dispatch(closeApp(title));
    dispatch(veiwApp(title));
    dispatch(deleteZIndex(title));
    dispatch(setInit(title));
  };

  const onHideHandler = () => {
    // browser hiden state true
    dispatch(hiddenApp(title));
  };

  const onFullscreenHandler = () => {
    dispatch(bringFront(title));
    if (!isFullScreen[title]) {
      dispatch(setFull(title));
      maximizeHandler();
    } else {
      dispatch(setInit(title));
      initializeHandler();
    }
  };
  const browserButtonHandler = {
    green: onFullscreenHandler,
    red: onCloseHandler,
    yellow: onHideHandler,
  };

  const onMouseDownHandler = () => {
    if (!isFullScreen) return moveHandler;
  };

  return (
    <div
      className="sticky w-full px-2 py-2 bg-gray-800 "
      {...(!isFullScreen[title] && { ...moveHandler })}
    >
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
