import { AppState, AppTitle, CONTENTS } from "@/components/desktop/config";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const browserAnimateSlice = createSlice({
  name: "browserAnimate",
  initialState: CONTENTS,
  reducers: {
    browserAnimateOn: (state: AppState, action: PayloadAction<AppTitle>) => {
      state[action.payload] = true;
    },
    browserAnimateOff: (state: AppState, action: PayloadAction<AppTitle>) => {
      state[action.payload] = false;
    },
  },
});

export const { browserAnimateOff, browserAnimateOn } =
  browserAnimateSlice.actions;

export default browserAnimateSlice.reducer;
