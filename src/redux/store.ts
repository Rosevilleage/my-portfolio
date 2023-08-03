import { configureStore } from "@reduxjs/toolkit";
import browserConfig from "./slices/browserConfigSlice";
export const store = configureStore({
  reducer: {
    browserConfig: browserConfig,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
