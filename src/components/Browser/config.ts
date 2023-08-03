const AZIMUTH = ["nw", "ne", "se", "sw", "n", "e", "s", "w"] as const;
const DEFUALT_W = 500;
const DEFUALT_H = 300;
const MIN_W = 500;
const MIN_H = 300;
const DESKTOP_MT = 32; // 임시값 DesktopHeader height 으로 대체
const RESIZERSTYLE = {
  nw: "w-2.5 h-2.5 -top-1 -left-1 cursor-nw-resize",
  ne: "w-2.5 h-2.5 -top-1 -right-1 cursor-ne-resize",
  se: "w-2.5 h-2.5 -bottom-1 -right-1 cursor-se-resize",
  sw: "w-2.5 h-2.5 -bottom-1 -left-1 cursor-sw-resize",
  n: "h-1.5 -top-1 left-1.5 right-1.5 cursor-n-resize",
  e: "w-1.5 top-1.5 bottom-1.5 -right-1 cursor-e-resize",
  s: "h-1.5 -bottom-1 left-1.5 right-1.5 cursor-s-resize",
  w: "w-1.5 top-1.5 bottom-1.5 -left-1 cursor-w-resize",
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

    moveBoundary: MoveBoundary;
  };
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
export type { Direction, BrowserConfig, MoveBoundary, BrowserTransformation };
