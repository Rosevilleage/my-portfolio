"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import App from "./App";
import HiddenApp from "./HiddenApp";
import { AppTitle, openApp } from "@/redux/slices/openAppSlice";
import { veiwApp } from "@/redux/slices/hiddenAppSlice";
import { APPList } from "../desktop/config";

export default function Doc() {
  const isHiddenApp = useAppSelector((state) => state.isHiddenApp);
  const isOpenApp = useAppSelector((state) => state.isOpenApp);
  const dispatch = useAppDispatch();

  const appClickHandler = (title: AppTitle) => {
    if (isOpenApp[title]) {
      if (isHiddenApp[title]) dispatch(veiwApp(title));
    } else dispatch(openApp(title));
  };

  const hiddenAppClickHandler = (title: AppTitle) => {
    dispatch(veiwApp(title));
  };
  // state
  return (
    <div className="flex items-start justify-around min-w-[250px] w-max mx-auto mt-0.5 h-[54px] pt-2 pr-2 rounded-xl bg-opacity-32 backdrop-blur-md bg-gray-600">
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
    </div>
  );
}
