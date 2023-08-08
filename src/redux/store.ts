import { configureStore } from "@reduxjs/toolkit";
import openApp from "./slices/openAppSlice";
import hiddenApp from "./slices/hiddenAppSlice";
import zIndex from "./slices/zIndexSlice";
export const store = configureStore({
  reducer: {
    isOpenApp: openApp,
    isHiddenApp: hiddenApp,
    zIndex: zIndex,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
