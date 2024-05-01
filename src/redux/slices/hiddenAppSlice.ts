import { AppState, AppTitle, CONTENTS } from "@/components/desktop/config";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const hiddenAppSlice = createSlice({
  name: "hiddenApp",
  initialState: CONTENTS,
  reducers: {
    veiwApp: (state: AppState, action: PayloadAction<AppTitle>) => {
      state[action.payload] = false;
    },
    hiddenApp: (state, action: PayloadAction<AppTitle>) => {
      state[action.payload] = true;
    },
  },
});
export default hiddenAppSlice.reducer;

export const { veiwApp, hiddenApp } = hiddenAppSlice.actions;
