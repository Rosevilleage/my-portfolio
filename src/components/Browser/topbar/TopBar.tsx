"use client";
import dragMouseDown from "@/utills/dragMouseDown";
import { MoveBoundary } from "../config";
import TopBarButton from "./TopBarButton";

import { inrange } from "@/utills/inrange";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setBrowserConfig } from "@/redux/slices/browserConfigSlice";
import { AppTitle, closeApp } from "@/redux/slices/openAppSlice";
import { hiddenApp, veiwApp } from "@/redux/slices/hiddenAppSlice";

export interface TopBarProps {
  moveBoundary: MoveBoundary;
  title: AppTitle;
}

const ButtonColors = ["red", "yellow", "green"] as const;

export default function TopBar({ moveBoundary, title }: TopBarProps) {
  // create button handler or props drilling
  // button handler object
  const browserConfig = useAppSelector((state) => state.browserConfig);
  const dispatch = useAppDispatch();
  const { x, y, w, h } = browserConfig;

  const onFullScreenHandler = () => {
    dispatch(
      setBrowserConfig({
        x: 0,
        y: 0,
        w: moveBoundary.w,
        h: moveBoundary.h,
      })
    );
  };

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
    green: onFullScreenHandler,
    red: onCloseHandler,
    yellow: onHideHandler,
  };

  return (
    <div
      className="sticky w-full px-2 py-2 bg-gray-800 "
      // dragMouseDownx
      {...dragMouseDown((X, Y) => {
        dispatch(
          setBrowserConfig({
            x: inrange(x + X, 0, moveBoundary.w - w),
            y: inrange(y + Y, 0, moveBoundary.h - h),
            w,
            h,
          })
        );
      }, true)}
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
