"use client";

import React from "react";
import { AZIMUTH } from "./config";
import BrowserResizer from "./BrowserResizer";
import TopBar from "./topbar/TopBar";
import useBrowser from "@/utills/useBrowser";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { bringFront } from "@/redux/slices/zIndexSlice";
import Contents from "./contents/Contents";
import { AppTitle, AppState } from "../desktop/config";

interface BrowserProps {
  boundaryCur: HTMLDivElement | null;
  title: AppTitle;
  zIndex: number | undefined;
  isHidden: boolean;
  isOpen: boolean;
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
  isOpen,
}: BrowserProps) {
  const dispatch = useAppDispatch();
  const isFullscreen = useAppSelector((state) => state.fullScreen);
  const browserAnimate = useAppSelector((state) => state.browserAnimate);
  const anyFull = anyTruthy(isFullscreen);
  const { browserConfig, resizeHandler, moveHandler } = useBrowser({
    boundaryCur,
    anyFull,
    title,
  });
  const { x, y, w, h } = browserConfig;

  const browserStyle = isFullscreen[title]
    ? ""
    : "rounded-xl ring-1 ring-slate-600";

  const browserHiddenStyle =
    isHidden || !isOpen ? "scale-0 -translate-x-1/2" : "";

  return (
    <>
      <div
        id={`${title}-container`}
        className={browserHiddenStyle + " absolute "}
        style={{
          left: isFullscreen[title] ? 0 : isHidden || !isOpen ? "50%" : x,
          top: isFullscreen[title] ? 0 : isHidden || !isOpen ? "100%" : y,
          width: isFullscreen[title] ? "100%" : w,
          height: isFullscreen[title] ? "100%" : h,
          zIndex: zIndex || 1,
          transition: `all ${browserAnimate[title] ? 300 : 0}ms ease 0s`,
        }}
        onClick={() => dispatch(bringFront(title))}
        aria-disabled={!isOpen}
      >
        {/* BrowserViewport */}
        <div
          className={
            "h-full w-full shadow-xl transition-[shadow,transform] overflow-x-hidden scroll-hide " +
            browserStyle
          }
        >
          <TopBar
            title={title}
            moveHandler={moveHandler()}
            isFullScreen={isFullscreen[title]}
          />
          {/* fallback component */}
          <Contents title={title} />
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
