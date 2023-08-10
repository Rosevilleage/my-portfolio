import { configureStore } from "@reduxjs/toolkit";
import openApp from "./slices/openAppSlice";
import hiddenApp from "./slices/hiddenAppSlice";
import zIndex from "./slices/zIndexSlice";
import fullScreen from "./slices/fullScreenSlice";
import browserAnimate from "./slices/browserAnimateSlice";

export const store = configureStore({
  reducer: {
    isOpenApp: openApp,
    isHiddenApp: hiddenApp,
    zIndex: zIndex,
    fullScreen: fullScreen,
    browserAnimate: browserAnimate,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
