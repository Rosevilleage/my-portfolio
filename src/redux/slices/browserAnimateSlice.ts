import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppTitle } from "./openAppSlice";
const initialState = {
  about: false,
  cocktail: false,
  todo: false,
  portfolio: false,
};
const browserAnimateSlice = createSlice({
  name: "browserAnimate",
  initialState,
  reducers: {
    browserAnimateOn: (state, action: PayloadAction<AppTitle>) => {
      switch (action.payload) {
        case "about":
          state.about = true;
          break;
        case "cocktail":
          state.cocktail = true;
          break;
        case "todo":
          state.todo = true;
          break;
        case "portfolio":
          state.portfolio = true;
          break;
      }
    },
    browserAnimateOff: (state, action: PayloadAction<AppTitle>) => {
      switch (action.payload) {
        case "about":
          state.about = false;
          break;
        case "cocktail":
          state.cocktail = false;
          break;
        case "todo":
          state.todo = false;
          break;
        case "portfolio":
          state.portfolio = false;
          break;
      }
    },
  },
});

export const { browserAnimateOff, browserAnimateOn } =
  browserAnimateSlice.actions;

export default browserAnimateSlice.reducer;
