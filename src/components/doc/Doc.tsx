"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import App from "./App";
import HiddenApp from "./HiddenApp";
import { AppState, AppTitle, openApp } from "@/redux/slices/openAppSlice";
import { veiwApp } from "@/redux/slices/hiddenAppSlice";
import { APPList } from "../desktop/config";
import { bringFront } from "@/redux/slices/zIndexSlice";
import { useLayoutEffect, useState } from "react";
import { BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";

export default function Doc({
  boundaryCur,
}: {
  boundaryCur: HTMLDivElement | null;
}) {
  const isHiddenApp = useAppSelector((state) => state.isHiddenApp);
  const isOpenApp = useAppSelector((state) => state.isOpenApp);
  const isFullScreen = useAppSelector((state) => state.fullScreen);
  const [moblie, setMoblie] = useState(false);
  const [docTop, setDocTop] = useState(false);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (boundaryCur && typeof window !== "undefined") {
      const observer = new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect;

        if (width < 640) {
          setMoblie(true);
        } else {
          setMoblie(false);
        }
      });
      observer.observe(boundaryCur);
    }
  }, [boundaryCur]);

  const anyTruthy = (state: AppState) => {
    const { about, cocktail, todo, portfolio } = state;
    return about || cocktail || todo || portfolio;
  };

  const desktopIsClean = () => {
    const openedApp = APPList.filter((app) => isOpenApp[app] === true);
    for (let opened of openedApp) {
      if (isHiddenApp[opened] === false) return false;
    }
    return true;
  };

  const appClickHandler = (title: AppTitle) => {
    if (isOpenApp[title]) {
      if (isHiddenApp[title]) dispatch(veiwApp(title));
    } else {
      dispatch(openApp(title));
    }
    dispatch(bringFront(title));
  };

  const hiddenAppClickHandler = (title: AppTitle) => {
    dispatch(bringFront(title));
    dispatch(veiwApp(title));
  };

  const onMouseLeaveHandler = () => {
    if (anyTruthy(isFullScreen) && !moblie) setDocTop(false);
  };

  const docPosition =
    anyTruthy(isFullScreen) && !desktopIsClean() && !docTop
      ? "-bottom-[60px] max-sm:-bottom-[60px]"
      : "bottom-0 max-sm:bottom-5";

  return (
    <div
      className={
        "min-w-[250px] h-[60px] absolute left-1/2 -translate-x-1/2 z-50 transition-all max-sm:w-11/12 " +
        docPosition
      }
      onMouseLeave={onMouseLeaveHandler}
      onMouseEnter={() => desktopIsClean() && setDocTop(false)}
    >
      <div className="flex items-start justify-around pt-2 pr-2 bg-gray-600 rounded-xl bg-opacity-32 backdrop-blur-md h-[54px] max-sm:h-max max-sm:pb-2 max-sm:pr-0">
        <div className="flex items-start justify-around w-[220px] max-sm:w-full">
          {APPList.map((app) => (
            <App
              key={app}
              title={app}
              isOpen={isOpenApp[app]}
              appClickHandler={appClickHandler}
            />
          ))}
        </div>
        <div className=" w-0.5 rounded-sm h-5/6 bg-slate-400 max-sm:hidden" />
        <div className="flex items-start justify-around max-sm:hidden">
          {APPList.map((app) => (
            <HiddenApp
              key={app}
              title={app}
              isHidden={isHiddenApp[app]}
              isOpen={isOpenApp[app]}
              hiddenAppClickHandler={hiddenAppClickHandler}
            />
          ))}
        </div>

        {anyTruthy(isFullScreen) && (
          <div
            className="absolute w-full h-1.5 -top-1 max-sm:hidden"
            onMouseEnter={() => setDocTop(true)}
          />
        )}
        {/* mobile 용 */}
        <button
          className="absolute items-center justify-center hidden w-1/4 -translate-x-1/2 h-max -top-12 left-1/2 max-sm:flex "
          onClick={() => (docTop ? setDocTop(false) : setDocTop(true))}
        >
          {!docTop && !desktopIsClean() && (
            <BsChevronDoubleUp size={50} color={"rgba(100,100,100,0.5)"} />
          )}
          {docTop && !desktopIsClean() && (
            <BsChevronDoubleDown size={50} color={"rgba(100,100,100,0.5)"} />
          )}
        </button>
      </div>
    </div>
  );
}
