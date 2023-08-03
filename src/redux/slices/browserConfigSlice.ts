import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BrowserState {
  x: number;
  y: number;
  w: number;
  h: number;
}
const initialState = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
};

const browserConfigSlice = createSlice({
  name: "browserConfig",
  initialState,
  reducers: {
    setBrowserConfig: (state, action: PayloadAction<BrowserState>) => {
      return action.payload;
    },
  },
});
export const { setBrowserConfig } = browserConfigSlice.actions;
export default browserConfigSlice.reducer;
