"use client";
import dragMouseDown from "@/utills/dragMouseDown";
import { RESIZERSTYLE, BrowserTransformation } from "./config";
import { updateBrowserConfig } from "@/utills/updateBrowserConfig";

export default function BrowserResizer({
  transformation,
}: BrowserTransformation) {
  const { direction, setBrowserConfig, viewport, browserConfig } =
    transformation;
  return (
    <div
      className={"absolute " + RESIZERSTYLE[direction]}
      {...dragMouseDown((X, Y) => {
        const input = {
          direction,
          browserConfig,
          interval: { x: X, y: Y },
          viewport,
        };
        setBrowserConfig(updateBrowserConfig(input));
      }, true)}
    />
  );
}
