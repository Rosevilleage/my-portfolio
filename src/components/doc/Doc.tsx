"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import DocItemApp from "./DocItemApp";
import HiddenApp from "./HiddenApp";
import ProjectsWindow from "./ProjectsWindow";
import ProjectsModal from "./ProjectsModal";
import { openApp } from "@/redux/slices/openAppSlice";
import { veiwApp } from "@/redux/slices/hiddenAppSlice";
import { APPList, DOC_ITEMS, AppState, AppTitle } from "../desktop/config";
import {
  bringFront,
  deleteZIndex,
  PROJECTS_WINDOW_ID,
} from "@/redux/slices/zIndexSlice";
import { useLayoutEffect, useEffect, useState } from "react";
import { BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";
import { aboutContent } from "./../Browser/contents/projectContents";

export default function Doc({
  boundaryCur,
}: {
  boundaryCur: HTMLDivElement | null;
}) {
  const isHiddenApp = useAppSelector((state) => state.isHiddenApp);
  const isOpenApp = useAppSelector((state) => state.isOpenApp);
  const isFullScreen = useAppSelector((state) => state.fullScreen);
  const zIndexArr = useAppSelector((state) => state.zIndex);
  const [moblie, setMoblie] = useState(false);
  const [docTop, setDocTop] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (boundaryCur && typeof window !== "undefined") {
      const observer = new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect;
        setMoblie(width < 640);
      });
      observer.observe(boundaryCur);
    }
  }, [boundaryCur]);

  useEffect(() => {
    if (moblie) {
      setIsProjectsOpen(false);
    }
  }, [moblie]);

  const anyTruthy = (state: AppState) => {
    const { about, cocktail, mealmory, portfolio, fitrace, scraping, cuther, rlt, "find-mat": findMat } = state;
    return about || cocktail || mealmory || portfolio || fitrace || scraping || cuther || rlt || findMat;
  };

  const desktopIsClean = () => {
    const openedApp = APPList.filter((app) => isOpenApp[app] === true);
    for (const opened of openedApp) {
      if (isHiddenApp[opened] === false) return false;
    }
    return true;
  };

  const handleDocItemClick = (item: (typeof DOC_ITEMS)[number]) => {
    switch (item) {
      case "about":
        if (isOpenApp.about) {
          if (isHiddenApp.about) dispatch(veiwApp("about"));
        } else {
          dispatch(openApp("about"));
        }
        dispatch(bringFront("about"));
        break;
      case "projects":
        setIsProjectsOpen(true);
        dispatch(bringFront(PROJECTS_WINDOW_ID));
        break;
      case "github":
        if (typeof window !== "undefined") {
          window.open(aboutContent.contact.github, "_blank");
        }
        break;
      case "blog":
        if (typeof window !== "undefined") {
          window.open(aboutContent.contact.blog, "_blank");
        }
        break;
    }
  };

  const getProjectsZIndex = (): number | undefined => {
    const idx = zIndexArr.indexOf(PROJECTS_WINDOW_ID);
    return idx > -1 ? idx + 1 : undefined;
  };

  const handleProjectsClose = () => {
    setIsProjectsOpen(false);
    dispatch(deleteZIndex(PROJECTS_WINDOW_ID));
  };

  const handleProjectSelect = (title: AppTitle) => {
    if (!isOpenApp[title]) {
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
    <>
      <div
        className={
          "min-w-[250px] h-[60px] absolute left-1/2 -translate-x-1/2 z-50 transition-all max-sm:w-11/12 " +
          docPosition
        }
        onMouseLeave={onMouseLeaveHandler}
        onMouseEnter={() => desktopIsClean() && setDocTop(false)}
      >
        <div className="flex items-start justify-around pt-2 pr-2 bg-gray-600 rounded-xl bg-opacity-32 backdrop-blur-md h-[54px] max-sm:h-max max-sm:pb-2 max-sm:pr-0">
          <div className="flex items-start justify-around gap-1 min-w-[220px] px-1 max-sm:w-full">
            {DOC_ITEMS.map((item) => (
              <DocItemApp
                key={item}
                item={item}
                onClick={() => handleDocItemClick(item)}
                isAboutOpen={item === "about" ? isOpenApp.about : undefined}
              />
            ))}
          </div>
          <div className="w-0.5 rounded-sm h-5/6 bg-slate-400 max-sm:hidden" />
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
          <button
            className="absolute items-center justify-center hidden w-1/4 -translate-x-1/2 h-max -top-12 left-1/2 max-sm:flex"
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

      {!moblie && isProjectsOpen && boundaryCur && (
        <ProjectsWindow
          boundaryCur={boundaryCur}
          zIndex={getProjectsZIndex()}
          onClose={handleProjectsClose}
          onBringFront={() => dispatch(bringFront(PROJECTS_WINDOW_ID))}
          onProjectSelect={handleProjectSelect}
        />
      )}

      {moblie && isProjectsOpen && (
        <ProjectsModal
          isOpen={isProjectsOpen}
          onClose={() => setIsProjectsOpen(false)}
          onProjectSelect={handleProjectSelect}
        />
      )}
    </>
  );
}
