import { AppState, AppTitle, CONTENTS } from "@/components/desktop/config";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const fullScreenSlice = createSlice({
  name: "fullScreen",
  initialState: CONTENTS,
  reducers: {
    setFull: (state: AppState, action: PayloadAction<AppTitle>) => {
      state[action.payload] = true;
    },
    setInit: (state: AppState, action: PayloadAction<AppTitle>) => {
      state[action.payload] = false;
    },
  },
});

export const { setFull, setInit } = fullScreenSlice.actions;

export default fullScreenSlice.reducer;
