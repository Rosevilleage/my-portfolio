import { inrange } from "@/utills/inrange";

const AZIMUTH = ["nw", "ne", "se", "sw", "n", "e", "s", "w"] as const;
const DEFUALT_W = 745;
const DEFUALT_H = 375;
const MIN_W = 745;
const MIN_H = 375;
const DESKTOP_MT = 32; // 임시값 DesktopHeader height 으로 대체
const RESIZERSTYLE = {
  nw: "w-2 h-2 -top-1 -left-1 cursor-nw-resize",
  ne: "w-2 h-2 -top-1 -right-1 cursor-ne-resize",
  se: "w-2 h-2 -bottom-1 -right-1 cursor-se-resize",
  sw: "w-2 h-2 -bottom-1 -left-1 cursor-sw-resize",
  n: "h-1 -top-1 left-1.5 right-1.5 cursor-n-resize",
  e: "w-1 top-1.5 bottom-1.5 -right-1 cursor-e-resize",
  s: "h-1 -bottom-1 left-1.5 right-1.5 cursor-s-resize",
  w: "w-1 top-1.5 bottom-1.5 -left-1 cursor-w-resize",
};

type Direction = "nw" | "ne" | "se" | "sw" | "n" | "e" | "s" | "w";

interface BrowserConfig {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Viewport {
  w: number;
  h: number;
}

export {
  AZIMUTH,
  DEFUALT_W,
  DEFUALT_H,
  MIN_W,
  MIN_H,
  DESKTOP_MT,
  RESIZERSTYLE,
};
export type { Direction, BrowserConfig, Viewport };

interface SetConfigDate {
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
        h: inrange(h + interval.y, MIN_H, viewport.h - y - DESKTOP_MT),
      };
    case "sw":
      return {
        x: inrange(x + interval.x, 0, x + w - MIN_W),
        y,
        w: inrange(w - interval.x, MIN_W, x + w),
        h: inrange(h - interval.y, MIN_H, viewport.h - y - DESKTOP_MT),
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
        h: inrange(h + interval.y, MIN_H, viewport.h - y - DESKTOP_MT),
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
