import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  about: boolean;
  cocktail: boolean;
  todo: boolean;
  portfolio: boolean;
}

export type AppTitle = "about" | "cocktail" | "todo" | "portfolio";

const initialState = {
  about: true,
  cocktail: false,
  todo: false,
  portfolio: false,
};

const openAppSlice = createSlice({
  name: "openApp",
  initialState,
  reducers: {
    closeApp: (state, action) => {
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
    openApp: (state, action) => {
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
  },
});
export default openAppSlice.reducer;

export const { closeApp, openApp } = openAppSlice.actions;
