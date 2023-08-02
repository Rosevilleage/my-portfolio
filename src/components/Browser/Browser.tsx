"use client";
// need utill function: dragMouseDown, inrange

import React, { useEffect, useState } from "react";
import { AZIMUTH, DEFUALT_H, DEFUALT_W, DESKTOP_MT } from "./config";
import BrowserResizer from "./BrowserResizer";
import TopBar from "./topbar/TopBar";

export default function Browser() {
  const [browserConfig, setBrowserConfig] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });
  const { x, y, w, h } = browserConfig;
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewport({
        w: window.innerWidth,
        h: window.innerHeight,
      });

      setBrowserConfig({
        x: Math.floor(viewport.w / 2 - DEFUALT_W / 2),
        y: Math.floor(viewport.h / 2 - DEFUALT_H / 2),
        w: DEFUALT_W,
        h: DEFUALT_H,
      });
    }
  }, [viewport.h, viewport.w]);
  const material = {
    browserConfig,
    setBrowserConfig,
    viewport,
  };
  return (
    <>
      <div
        className="relative"
        style={{ left: x, top: y, width: w, height: h }}
      >
        {/* BrowserViewport */}
        <div className="h-full w-full rounded-xl bg-white shadow-xl ring-1 ring-slate-600 transition-[shadow,transform] overflow-x-hidden overflow-y-scroll">
          <TopBar material={material} />
          {/* fallback component */}
        </div>
        {/* BrowserResizer */}
        {AZIMUTH.map((direction) => {
          const transformation = {
            browserConfig,
            direction,
            setBrowserConfig,
            viewport,
          };
          return (
            <BrowserResizer key={direction} transformation={transformation} />
          );
        })}
      </div>
    </>
  );
}
