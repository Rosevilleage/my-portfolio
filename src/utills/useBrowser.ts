import { DEFUALT_H, DEFUALT_W, Direction } from "@/components/Browser/config";
import { useEffect, useState } from "react";
import dragMouseDown from "./dragMouseDown";
import { inrange } from "./inrange";
import { updateBrowserConfig } from "./updateBrowserConfig";

export default function useBrowser(boundaryCur: HTMLDivElement | null) {
  const [moveBoundary, setMoveBoundary] = useState({ w: 0, h: 0 });

  const [browserConfig, setBrowserConfig] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });
  const boundary = boundaryCur?.getBoundingClientRect();
  const { x, y, w, h } = browserConfig;

  useEffect(() => {
    if (boundary) {
      const { width, height } = boundary;

      setMoveBoundary({
        w: width,
        h: height,
      });

      setBrowserConfig({
        x: Math.floor(width / 2 - DEFUALT_W / 2),
        y: Math.floor(height / 2 - DEFUALT_H / 2),
        w: DEFUALT_W,
        h: DEFUALT_H,
      });
    }
  }, [boundary?.width, boundary?.height]);

  const resizeHandler = (direction: Direction) => {
    return dragMouseDown((X, Y) => {
      const input = {
        direction,
        browserConfig,
        interval: { x: X, y: Y },
        moveBoundary,
      };
      setBrowserConfig(updateBrowserConfig(input));
    }, true);
  };

  const maximizeHandler = () => {
    setBrowserConfig({
      x: 0,
      y: 0,
      w: moveBoundary.w,
      h: moveBoundary.h,
    });
  };

  const minimizeHandler = () => {
    setBrowserConfig({
      x: moveBoundary.w,
      y: moveBoundary.h,
      w: 0,
      h: 0,
    });
  };

  const initializeHandler = () => {
    setBrowserConfig({
      x: Math.floor(moveBoundary.w / 2 - DEFUALT_W / 2),
      y: Math.floor(moveBoundary.h / 2 - DEFUALT_H / 2),
      w: DEFUALT_W,
      h: DEFUALT_H,
    });
  };

  const moveHandler = dragMouseDown((intervalX, intervalY) => {
    setBrowserConfig({
      x: inrange(x + intervalX, 0, moveBoundary.w - w),
      y: inrange(y + intervalY, 0, moveBoundary.h - h),
      w,
      h,
    });
  }, true);

  return {
    browserConfig,
    resizeHandler,
    maximizeHandler,
    minimizeHandler,
    initializeHandler,
    moveHandler,
  };
}