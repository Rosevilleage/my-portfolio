"use client";

import { useRef, useState } from "react";
import Browser from "../Browser/Browser";
import { CONTENTS, CONTENTS_LENG } from "./config";

export default function DesktopBoundary() {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const boundaryCur = boundaryRef.current;
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      ref={boundaryRef}
    >
      <Browser boundaryCur={boundaryCur} />
    </div>
  );
}
