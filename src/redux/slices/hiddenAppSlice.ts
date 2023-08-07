import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: false,
  cocktail: false,
  todo: false,
  portfolio: false,
};

const hiddenAppSlice = createSlice({
  name: "openApp",
  initialState,
  reducers: {
    veiwApp: (state, action) => {
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
    hiddenApp: (state, action) => {
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
export default hiddenAppSlice.reducer;

export const { veiwApp, hiddenApp } = hiddenAppSlice.actions;
