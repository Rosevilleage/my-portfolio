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
    setConfig: (state, action: PayloadAction<BrowserState>) => {
      state = action.payload;
    },
  },
});
export const { setConfig } = browserConfigSlice.actions;
export default browserConfigSlice.reducer;
