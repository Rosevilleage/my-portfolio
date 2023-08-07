import { configureStore } from "@reduxjs/toolkit";
import browserConfig from "./slices/browserConfigSlice";
import openApp from "./slices/openAppSlice";
import hiddenApp from "./slices/hiddenAppSlice";
export const store = configureStore({
  reducer: {
    browserConfig: browserConfig,
    isOpenApp: openApp,
    isHiddenApp: hiddenApp,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
