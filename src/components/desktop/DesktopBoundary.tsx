"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Browser from "../Browser/Browser";
import { APPList } from "./config";
import { useAppSelector } from "@/redux/hooks";
import { AppTitle } from "@/redux/slices/openAppSlice";
import Doc from "../doc/Doc";
import Intro from "../intro/Intro";

export default function DesktopBoundary() {
  const boundaryRef = useRef<HTMLDivElement>(null);
  const boundaryCur = boundaryRef.current as HTMLDivElement;

  const isOpenApp = useAppSelector((state) => state.isOpenApp);
  const zIndexArr = useAppSelector((state) => state.zIndex);
  const isHiddenApp = useAppSelector((state) => state.isHiddenApp);

  const getBrowserZIndex = (title: AppTitle) => {
    const zindex = zIndexArr.indexOf(title);
    if (zindex > -1) return zindex + 1;
  };

  const [isFirst, setIsFirst] = useState(true);
  const closeIntro = () => setIsFirst(false);
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("visit")) closeIntro();
      else sessionStorage.setItem("visit", "true");
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden" ref={boundaryRef}>
      <Intro isFirst={isFirst} closeIntro={closeIntro} />
      {APPList.map(
        (app) =>
          isOpenApp[app] && (
            <Browser
              key={`${app} browser`}
              boundaryCur={boundaryCur}
              title={app}
              zIndex={getBrowserZIndex(app)}
              isHidden={isHiddenApp[app]}
            />
          )
      )}
      <Doc boundaryCur={boundaryCur} />
    </div>
  );
}
