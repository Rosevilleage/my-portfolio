"use client";

import React from "react";
import { AZIMUTH } from "./config";
import BrowserResizer from "./BrowserResizer";
import TopBar from "./topbar/TopBar";
import { AppTitle } from "@/redux/slices/openAppSlice";
import useBrowser from "@/utills/useBrowser";

interface BrowserProps {
  boundaryCur: HTMLDivElement | null;
  title: AppTitle;
}

export default function Browser({ boundaryCur, title }: BrowserProps) {
  const {
    browserConfig,
    resizeHandler,
    maximizeHandler,
    minimizeHandler,
    initializeHandler,
    moveHandler,
  } = useBrowser(boundaryCur);
  const { x, y, w, h } = browserConfig;

  return (
    <>
      <div
        className="absolute "
        style={{ left: x, top: y, width: w, height: h }}
      >
        {/* BrowserViewport */}
        <div className="h-full w-full rounded-xl bg-white shadow-xl ring-1 ring-slate-600 transition-[shadow,transform] overflow-x-hidden overflow-y-scroll">
          <TopBar
            title={title}
            maximizeHandler={maximizeHandler}
            moveHandler={moveHandler}
          />
          {/* fallback component */}
        </div>
        {/* BrowserResizer */}
        {AZIMUTH.map((direction) => {
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
