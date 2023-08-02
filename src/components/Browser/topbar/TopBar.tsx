"use client";
import dragMouseDown from "@/utills/dragMouseDown";
import {
  BrowserConfig,
  BrowserTransformation,
  DESKTOP_MT,
  Viewport,
} from "../config";
import TopBarButton from "./TopBarButton";
import { updateBrowserConfig } from "@/utills/updateBrowserConfig";
import { inrange } from "@/utills/inrange";

interface BrowserButtonHnadler {
  onFullScreen: () => void;
  onClose: () => void;
  onHide: () => void;
}

export interface TopBarProps {
  // buttonHandler: BrowserButtonHnadler;
  material: {
    browserConfig: BrowserConfig;
    setBrowserConfig: React.Dispatch<React.SetStateAction<BrowserConfig>>;
    viewport: Viewport;
  };
}

const ButtonColors = ["red", "yellow", "green"] as const;

export default function TopBar({ material }: TopBarProps) {
  // create button handler or props drilling
  // button handler object
  const { setBrowserConfig, viewport, browserConfig } = material;
  const { x, y, w, h } = browserConfig;
  return (
    <div
      className="sticky w-full px-2 py-2 bg-gray-800 "
      // dragMouseDownx
      {...dragMouseDown((X, Y) => {
        setBrowserConfig({
          x: inrange(x + X, 0, viewport.w - w),
          y: inrange(y + Y, DESKTOP_MT, viewport.h - h + DESKTOP_MT),
          w,
          h,
        });
      }, true)}
    >
      <div className="flex justify-around w-16">
        {ButtonColors.map((color) => (
          <TopBarButton key={color} color={color} />
        ))}
      </div>
    </div>
  );
}
