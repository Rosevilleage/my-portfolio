const AZIMUTH = ["nw", "ne", "se", "sw", "n", "e", "s", "w"] as const;
const DEFUALT_W = 500;
const DEFUALT_H = 300;
const MIN_W = 320;
const MIN_H = 300;
const DESKTOP_MB = 62;
const MOBILE_MB = 81;

const RESIZERSTYLE = {
  nw: "w-3 h-3 -top-1 -left-1 cursor-nw-resize",
  ne: "w-3 h-3 -top-1 -right-1 cursor-ne-resize",
  se: "w-3 h-3 -bottom-1 -right-1 cursor-se-resize",
  sw: "w-3 h-3 -bottom-1 -left-1 cursor-sw-resize",
  n: "h-2 -top-1 left-1.5 right-1.5 cursor-n-resize",
  e: "w-2 top-1.5 bottom-1.5 -right-1 cursor-e-resize",
  s: "h-2 -bottom-1 left-1.5 right-1.5 cursor-s-resize",
  w: "w-2 top-1.5 bottom-1.5 -left-1 cursor-w-resize",
};

type Direction = "nw" | "ne" | "se" | "sw" | "n" | "e" | "s" | "w";

interface BrowserConfig {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MoveBoundary {
  w: number;
  h: number;
}

interface BrowserTransformation {
  transformation: {
    direction: Direction;
    resizeHandle:
      | {
          onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => void;
          onMouseDown?: undefined;
        }
      | {
          onMouseDown: (e: React.MouseEvent<Element, MouseEvent>) => void;
          onTouchStart?: undefined;
        };
  };
}

export {
  AZIMUTH,
  DEFUALT_W,
  DEFUALT_H,
  MIN_W,
  MIN_H,
  RESIZERSTYLE,
  DESKTOP_MB,
  MOBILE_MB,
};
export type { Direction, BrowserConfig, MoveBoundary, BrowserTransformation };
