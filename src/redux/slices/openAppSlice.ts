import { AppState, AppTitle, CONTENTS } from "@/components/desktop/config";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const openAppSlice = createSlice({
  name: "openApp",
  initialState: CONTENTS,
  reducers: {
    closeApp: (state: AppState, action: PayloadAction<AppTitle>) => {
      state[action.payload] = false;
    },
    openApp: (state: AppState, action: PayloadAction<AppTitle>) => {
      state[action.payload] = true;
    },
  },
});
export default openAppSlice.reducer;

export const { closeApp, openApp } = openAppSlice.actions;
