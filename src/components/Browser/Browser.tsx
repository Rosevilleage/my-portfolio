"use client";

import React from "react";
import { AZIMUTH } from "./config";
import BrowserResizer from "./BrowserResizer";
import TopBar from "./topbar/TopBar";
import { AppState, AppTitle } from "@/redux/slices/openAppSlice";
import useBrowser from "@/utills/useBrowser";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { bringFront } from "@/redux/slices/zIndexSlice";
import Contents from "./contents/Contents";

interface BrowserProps {
  boundaryCur: HTMLDivElement;
  title: AppTitle;
  zIndex: number | undefined;
  isHidden: boolean;
}
const anyTruthy = (state: AppState) => {
  const { about, cocktail, todo, portfolio } = state;
  return about || cocktail || todo || portfolio;
};

export default function Browser({
  boundaryCur,
  title,
  zIndex,
  isHidden,
}: BrowserProps) {
  const dispatch = useAppDispatch();
  const isFullscreen = useAppSelector((state) => state.fullScreen);
  const browserAnimate = useAppSelector((state) => state.browserAnimate);
  const anyFull = anyTruthy(isFullscreen);
  if (boundaryCur) {
  }
  const {
    browserConfig,
    resizeHandler,
    maximizeHandler,
    initializeHandler,
    moveHandler,
  } = useBrowser({ boundaryCur, anyFull });
  const { x, y, w, h } = browserConfig;

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
          left: isFullscreen[title] ? 0 : isHidden ? "50%" : x,
          top: isFullscreen[title] ? 0 : isHidden ? "100%" : y,
          width: isFullscreen[title] ? "100%" : w,
          height: isFullscreen[title] ? "100%" : h,
          zIndex: zIndex || 1,
          transition: `all ${browserAnimate[title] ? 300 : 0}ms ease 0s`,
        }}
        onClick={() => dispatch(bringFront(title))}
      >
        {/* BrowserViewport */}
        <div
          className={
            "h-full w-full shadow-xl transition-[shadow,transform] overflow-hidden " +
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
          <Contents title={title} w={w} />
        </div>
        {/* BrowserResizer */}
        {!isFullscreen[title] &&
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
