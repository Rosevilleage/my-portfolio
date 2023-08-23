"use client";
import { useAppSelector } from "@/redux/hooks";
import { setInit, setFull } from "@/redux/slices/fullScreenSlice";
import { veiwApp, hiddenApp } from "@/redux/slices/hiddenAppSlice";
import { AppTitle, closeApp } from "@/redux/slices/openAppSlice";
import { deleteZIndex, bringFront } from "@/redux/slices/zIndexSlice";
import { useDispatch } from "react-redux";
import useBrowserAnimateTrigger from "./useBrowserAnimateTrigger";

interface UseTopBarButtonProps {
  title: AppTitle;
}

export default function useTopbarButtons({ title }: UseTopBarButtonProps) {
  const isFullScreen = useAppSelector((state) => state.fullScreen)[title];
  const dispatch = useDispatch();

  const onCloseHandler = useBrowserAnimateTrigger(title, () => {
    dispatch(closeApp(title));
    dispatch(veiwApp(title));
    dispatch(deleteZIndex(title));
    dispatch(setInit(title));
  });

  const onHiddenHandler = useBrowserAnimateTrigger(title, () => {
    dispatch(hiddenApp(title));
  });

  const onFullscreenHandler = useBrowserAnimateTrigger(title, () => {
    dispatch(bringFront(title));
    if (!isFullScreen) {
      dispatch(setFull(title));
    } else {
      dispatch(setInit(title));
    }
  });

  return {
    onCloseHandler,
    onFullscreenHandler,
    onHiddenHandler,
  };
}
