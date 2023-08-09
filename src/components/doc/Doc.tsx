"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import App from "./App";
import HiddenApp from "./HiddenApp";
import { AppState, AppTitle, openApp } from "@/redux/slices/openAppSlice";
import { veiwApp } from "@/redux/slices/hiddenAppSlice";
import { APPList } from "../desktop/config";
import { bringFront } from "@/redux/slices/zIndexSlice";
import { useState } from "react";

export default function Doc() {
  const isHiddenApp = useAppSelector((state) => state.isHiddenApp);
  const isOpenApp = useAppSelector((state) => state.isOpenApp);
  const isFullScreen = useAppSelector((state) => state.fullScreen);
  const [docTop, setDocTop] = useState(false);
  const dispatch = useAppDispatch();

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
    dispatch(veiwApp(title));
  };

  const onMouseLeaveHandler = () => {
    if (anyTruthy(isFullScreen)) setDocTop(false);
  };

  const docPosition =
    anyTruthy(isFullScreen) && !desktopIsClean() && !docTop
      ? "-bottom-[60px]"
      : "bottom-0";
  return (
    <div
      className={
        "min-w-[250px] h-[60px] absolute left-1/2 -translate-x-1/2 z-50 " +
        docPosition
      }
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className="flex items-start justify-around pt-2 pr-2 bg-gray-600 rounded-xl bg-opacity-32 backdrop-blur-md h-[54px]">
        <div className="flex items-start justify-around w-[220px]">
          {APPList.map((app) => (
            <App
              key={app}
              title={app}
              isOpen={isOpenApp[app]}
              appClickHandler={appClickHandler}
            />
          ))}
        </div>
        <div className=" w-0.5 rounded-sm h-5/6 bg-slate-400" />
        <div className="flex items-start justify-around">
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
            className="absolute w-full h-1.5 -top-1"
            onMouseEnter={() => setDocTop(true)}
          />
        )}
      </div>
    </div>
  );
}
