import {
  BrowserConfig,
  MIN_W,
  MIN_H,
  Direction,
  MoveBoundary,
} from "@/components/Browser/config";

import { inrange } from "./inrange";

export interface SetConfigDate {
  direction: Direction;
  browserConfig: BrowserConfig;
  interval: { x: number; y: number };
  moveBoundary: MoveBoundary;
  limitedY: number;
}

export function updateBrowserConfig(input: SetConfigDate) {
  const { direction, browserConfig, interval, moveBoundary, limitedY } = input;
  const { x, y, w, h } = browserConfig;

  switch (direction) {
    case "nw":
      return {
        x: inrange(x + interval.x, 0, x + w - MIN_W),
        y: inrange(y + interval.y, 0, y + h - MIN_H),
        w: inrange(w - interval.x, MIN_W, x + w),
        h: inrange(h - interval.y, MIN_H, y + h),
      };
    case "ne":
      return {
        x,
        y: inrange(y + interval.y, 0, y + h - MIN_H),
        w: inrange(w + interval.x, MIN_W, moveBoundary.w - x),
        h: inrange(h - interval.y, MIN_H, y + h),
      };
    case "se":
      return {
        x,
        y,
        w: inrange(w + interval.x, MIN_W, moveBoundary.w - x),
        h: inrange(h + interval.y, MIN_H, moveBoundary.h - y - limitedY),
      };
    case "sw":
      return {
        x: inrange(x + interval.x, 0, x + w - MIN_W),
        y,
        w: inrange(w - interval.x, MIN_W, x + w),
        h: inrange(h + interval.y, MIN_H, moveBoundary.h - y - limitedY),
      };
    case "n":
      return {
        x,
        y: inrange(y + interval.y, 0, y + h - MIN_H),
        w,
        h: inrange(h - interval.y, MIN_H, y + h),
      };
    case "e":
      return {
        x,
        y,
        w: inrange(w + interval.x, MIN_W, moveBoundary.w - x),
        h,
      };
    case "s":
      return {
        x,
        y,
        w,
        h: inrange(h + interval.y, MIN_H, moveBoundary.h - y - limitedY),
      };
    case "w":
      return {
        x: inrange(x + interval.x, 0, x + w - MIN_W),
        y,
        w: inrange(w - interval.x, MIN_W, x + w),
        h,
      };
  }
}
