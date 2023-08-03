"use client";
import dragMouseDown from "@/utills/dragMouseDown";
import { DESKTOP_MT, MoveBoundary } from "../config";
import TopBarButton from "./TopBarButton";

import { inrange } from "@/utills/inrange";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setBrowserConfig } from "@/redux/slices/browserConfigSlice";

export interface TopBarProps {
  moveBoundary: MoveBoundary;
}

const ButtonColors = ["red", "yellow", "green"] as const;

export default function TopBar({ moveBoundary }: TopBarProps) {
  // create button handler or props drilling
  // button handler object
  const browserConfig = useAppSelector((state) => state.browserConfig);
  const dispatch = useAppDispatch();
  const { x, y, w, h } = browserConfig;

  const onFullScreenHandler = () => {
    dispatch(
      setBrowserConfig({
        x: 0,
        y: DESKTOP_MT,
        w: moveBoundary.w,
        h: moveBoundary.h - DESKTOP_MT,
      })
    );
  };

  const onCloseHandler = () => {
    // browser open state false
  };

  const onHideHandler = () => {
    // browser hiden state true
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
            y: inrange(y + Y, DESKTOP_MT, moveBoundary.h - h),
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
