"use client";

import React from "react";
import { AZIMUTH } from "./config";
import BrowserResizer from "./BrowserResizer";
import TopBar from "./topbar/TopBar";
import { AppTitle } from "@/redux/slices/openAppSlice";
import useBrowser from "@/utills/useBrowser";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { bringFront } from "@/redux/slices/zIndexSlice";

interface BrowserProps {
  boundaryCur: HTMLDivElement | null;
  title: AppTitle;
  zIndex: number | undefined;
  isHidden: boolean;
}

export default function Browser({
  boundaryCur,
  title,
  zIndex,
  isHidden,
}: BrowserProps) {
  const {
    browserConfig,
    resizeHandler,
    maximizeHandler,
    initializeHandler,
    moveHandler,
  } = useBrowser(boundaryCur);
  const { x, y, w, h } = browserConfig;

  const dispatch = useAppDispatch();
  const isFullscreen = useAppSelector((state) => state.fullScreen);
  const browserAnimate = useAppSelector((state) => state.browserAnimate);

  const browserStyle = isFullscreen[title]
    ? ""
    : "rounded-xl ring-1 ring-slate-600";

  const browserHiddenSyle = isHidden ? "scale-0 -translate-x-1/2" : "";
  return (
    <>
      <div
        id={`${title}-container`}
        className={"absolute " + browserHiddenSyle}
        style={{
          left: isHidden ? "50%" : x,
          top: isHidden ? "100%" : y,
          width: w,
          height: h,
          zIndex: zIndex || 1,
          transition: `all ${browserAnimate[title] ? 300 : 0}ms ease 0s`,
        }}
        onClick={() => dispatch(bringFront(title))}
      >
        {/* BrowserViewport */}
        <div
          className={
            "h-full w-full bg-white shadow-xl transition-[shadow,transform] overflow-x-hidden overflow-y-scroll " +
            browserStyle
          }
        >
          <TopBar
            title={title}
            maximizeHandler={maximizeHandler}
            initializeHandler={initializeHandler}
            moveHandler={moveHandler()}
            isFullScreen={isFullscreen[title]}
          />
          {/* fallback component */}
        </div>
        {/* BrowserResizer */}
        {!isFullscreen &&
          AZIMUTH.map((direction) => {
            const transformation = {
              direction,
              resizeHandle: resizeHandler(direction),
            };
            return (
              <BrowserResizer key={direction} transformation={transformation} />
            );
          })}
      </div>
    </>
  );
}
