"use client";
// need utill function: dragMouseDown, inrange

import React, { useEffect, useState } from "react";
import { AZIMUTH, DEFUALT_H, DEFUALT_W } from "./config";
import BrowserResizer from "./BrowserResizer";
import TopBar from "./topbar/TopBar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setBrowserConfig } from "@/redux/slices/browserConfigSlice";
interface BrowserProps {
  boundaryCur: HTMLDivElement | null;
}
export default function Browser({ boundaryCur }: BrowserProps) {
  const browserConfig = useAppSelector((state) => state.browserConfig);
  const { x, y, w, h } = browserConfig;
  const dispatch = useAppDispatch();

  const [moveBoundary, setMoveBoundary] = useState({ w: 0, h: 0 });

  const boundary = boundaryCur?.getBoundingClientRect();
  useEffect(() => {
    if (boundary && typeof window !== "undefined") {
      const { width, height } = boundary;

      setMoveBoundary({
        w: width,
        h: height,
      });

      dispatch(
        setBrowserConfig({
          x: Math.floor(width / 2 - DEFUALT_W / 2),
          y: Math.floor(height / 2 - DEFUALT_H / 2),
          w: DEFUALT_W,
          h: DEFUALT_H,
        })
      );
    }
  }, [dispatch, boundary?.width, boundary?.height]);

  return (
    <>
      <div
        className="relative"
        style={{ left: x, top: y, width: w, height: h }}
      >
        {/* BrowserViewport */}
        <div className="h-full w-full rounded-xl bg-white shadow-xl ring-1 ring-slate-600 transition-[shadow,transform] overflow-x-hidden overflow-y-scroll">
          <TopBar moveBoundary={moveBoundary} />
          {/* fallback component */}
        </div>
        {/* BrowserResizer */}
        {AZIMUTH.map((direction) => {
          const transformation = {
            direction,
            moveBoundary,
          };
          return (
            <BrowserResizer key={direction} transformation={transformation} />
          );
        })}
      </div>
    </>
  );
}
