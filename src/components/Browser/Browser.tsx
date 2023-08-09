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

  const browserStyle = isFullscreen[title]
    ? ""
    : "rounded-xl ring-1 ring-slate-600";

  const browserHiddenSyle = isHidden ? " scale-0 translate-y-[100vh] " : "";
  return (
    <>
      <div
        className="absolute "
        style={{
          left: x,
          top: y,
          width: w,
          height: h,
          zIndex: zIndex || 1,
        }}
        onClick={() => dispatch(bringFront(title))}
      >
        {/* BrowserViewport */}
        <div
          className={
            "h-full w-full bg-white shadow-xl transition-all overflow-x-hidden overflow-y-scroll duration-300 " +
            browserStyle +
            browserHiddenSyle
          }
        >
          <TopBar
            title={title}
            maximizeHandler={maximizeHandler}
            initializeHandler={initializeHandler}
            moveHandler={moveHandler()}
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
