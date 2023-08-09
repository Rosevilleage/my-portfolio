import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppTitle } from "./openAppSlice";
const initialState = {
  about: false,
  cocktail: false,
  todo: false,
  portfolio: false,
};
const fullScreenSlice = createSlice({
  name: "fullScreen",
  initialState,
  reducers: {
    setFull: (state, action: PayloadAction<AppTitle>) => {
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
    setInit: (state, action: PayloadAction<AppTitle>) => {
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

export const { setFull, setInit } = fullScreenSlice.actions;

export default fullScreenSlice.reducer;
