import {
  BrowserConfig,
  MIN_W,
  DESKTOP_MT,
  MIN_H,
  Direction,
} from "@/components/Browser/config";

import { inrange } from "./inrange";

export interface SetConfigDate {
  direction: Direction;
  browserConfig: BrowserConfig;
  interval: { x: number; y: number };
  viewport: { w: number; h: number };
}

export function updateBrowserConfig(input: SetConfigDate) {
  const { direction, browserConfig, interval, viewport } = input;
  const { x, y, w, h } = browserConfig;
  switch (direction) {
    case "nw":
      return {
        x: inrange(x + interval.x, 0, x + w - MIN_W),
        y: inrange(y + interval.y, DESKTOP_MT, y + h - MIN_H),
        w: inrange(w - interval.x, MIN_W, x + w),
        h: inrange(h - interval.y, MIN_H, y + h - DESKTOP_MT),
      };
    case "ne":
      return {
        x,
        y: inrange(y + interval.y, DESKTOP_MT, y + h - MIN_H),
        w: inrange(w + interval.x, MIN_W, viewport.w - x),
        h: inrange(h - interval.y, MIN_H, y + h - DESKTOP_MT),
      };
    case "se":
      return {
        x,
        y,
        w: inrange(w + interval.x, MIN_W, viewport.w - x),
        h: inrange(h + interval.y, MIN_H, viewport.h - y),
      };
    case "sw":
      return {
        x: inrange(x + interval.x, 0, x + w - MIN_W),
        y,
        w: inrange(w - interval.x, MIN_W, x + w),
        h: inrange(h - interval.y, MIN_H, viewport.h - y),
      };
    case "n":
      return {
        x,
        y: inrange(y + interval.y, DESKTOP_MT, y + h - MIN_H),
        w,
        h: inrange(h - interval.y, MIN_H, y + h - DESKTOP_MT),
      };
    case "e":
      return {
        x,
        y,
        w: inrange(w + interval.x, MIN_W, viewport.w - x),
        h,
      };
    case "s":
      return {
        x,
        y,
        w,
        h: inrange(h + interval.y, MIN_H, viewport.h - y),
      };
    case "w":
      return {
        x: inrange(x + interval.x, 0, x + w - MIN_W),
        y,
        w: inrange(w - interval.x, MIN_W, x + w),
        h,
      };
    case "mv":
      return {
        x: inrange(x + interval.x, 0, viewport.w - w),
        y: inrange(y + interval.y, DESKTOP_MT, viewport.h - h),
        w,
        h,
      };
  }
}
