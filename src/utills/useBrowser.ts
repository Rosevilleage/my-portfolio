import {
  DEFUALT_H,
  DEFUALT_W,
  DESKTOP_MB,
  Direction,
  MIN_W,
  MOBILE_MB,
} from "@/components/Browser/config";
import { useEffect, useState } from "react";
import dragMouseDown from "./dragMouseDown";
import { inrange } from "./inrange";
import { updateBrowserConfig } from "./updateBrowserConfig";
import { useAppDispatch } from "@/redux/hooks";
import { AppTitle } from "@/redux/slices/openAppSlice";
import { setFull } from "@/redux/slices/fullScreenSlice";

interface UseBrowserProps {
  boundaryCur: HTMLDivElement;
  anyFull: boolean;
  title: AppTitle;
}

export default function useBrowser({
  boundaryCur,
  anyFull,
  title,
}: UseBrowserProps) {
  const [moveBoundary, setMoveBoundary] = useState({ w: 0, h: 0 });
  const [marginBottom, setMarginBottom] = useState(DESKTOP_MB);
  const dispatch = useAppDispatch();

  const [browserConfig, setBrowserConfig] = useState({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });
  const boundary = boundaryCur.getBoundingClientRect();
  const { width, height } = boundary;
  const { x, y, w, h } = browserConfig;

  useEffect(() => {
    setMoveBoundary({
      w: width,
      h: height,
    });

    if (width < 640) {
      setMarginBottom(MOBILE_MB);
      dispatch(setFull(title));
    } else {
      setMarginBottom(DESKTOP_MB);
    }

    setBrowserConfig({
      x: Math.floor(width / 2 - inrange(width, MIN_W, DEFUALT_W) / 2),
      y: Math.floor(height / 2 - DEFUALT_H / 2),
      w: inrange(width, MIN_W, DEFUALT_W),
      h: DEFUALT_H,
    });
  }, [height, width]);

  const resizeHandler = (direction: Direction) => {
    return dragMouseDown((X, Y) => {
      const input = {
        direction,
        browserConfig,
        interval: { x: X, y: Y },
        moveBoundary,
        limitedY: anyFull ? 0 : marginBottom,
      };
      setBrowserConfig(updateBrowserConfig(input));
    }, true);
  };

  const minimizeHandler = () => {
    setBrowserConfig({
      x: moveBoundary.w,
      y: moveBoundary.h,
      w: 0,
      h: 0,
    });
  };

  const moveHandler = () =>
    dragMouseDown((intervalX, intervalY) => {
      const limitedY = anyFull ? 0 : marginBottom;
      setBrowserConfig({
        x: inrange(x + intervalX, 0, moveBoundary.w - w),
        y: inrange(y + intervalY, 0, moveBoundary.h - h - limitedY),
        w,
        h,
      });
    }, true);

  return {
    browserConfig,
    resizeHandler,
    minimizeHandler,
    moveHandler,
  };
}
