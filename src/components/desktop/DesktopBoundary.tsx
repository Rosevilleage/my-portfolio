"use client";

import { useRef, useState } from "react";
import Browser from "../Browser/Browser";
import { APPList, CONTENTS, CONTENTS_LENG } from "./config";
import { useAppSelector } from "@/redux/hooks";

export default function DesktopBoundary() {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const boundaryCur = boundaryRef.current;
  const isOpenApp = useAppSelector((state) => state.isOpenApp);

  return (
    <div
      className="relative w-full h-[calc(100%-65px)] overflow-hidden"
      ref={boundaryRef}
    >
      <p className=" text-slate-200">{`${isOpenApp.about}`}</p>
      {APPList.map(
        (app) =>
          isOpenApp[app] && (
            <Browser
              key={`${app} browser`}
              boundaryCur={boundaryCur}
              title={app}
            />
          )
      )}
    </div>
  );
}
