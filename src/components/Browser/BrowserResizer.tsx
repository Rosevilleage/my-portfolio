"use client";
import dragMouseDown from "@/utills/dragMouseDown";
import { RESIZERSTYLE, BrowserTransformation } from "./config";
import { updateBrowserConfig } from "@/utills/updateBrowserConfig";
import { setBrowserConfig } from "@/redux/slices/browserConfigSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function BrowserResizer({
  transformation,
}: BrowserTransformation) {
  const { direction, moveBoundary } = transformation;
  const browserConfig = useAppSelector((state) => state.browserConfig);
  const dispatch = useAppDispatch();
  return (
    <div
      className={"absolute " + RESIZERSTYLE[direction]}
      {...dragMouseDown((X, Y) => {
        const input = {
          direction,
          browserConfig,
          interval: { x: X, y: Y },
          moveBoundary,
        };
        dispatch(setBrowserConfig(updateBrowserConfig(input)));
      }, true)}
    />
  );
}
