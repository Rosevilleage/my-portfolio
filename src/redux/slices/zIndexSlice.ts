import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppTitle } from "./openAppSlice";
const initialState: string[] = [];
const zIndexSlice = createSlice({
  name: "zIndex",
  initialState,
  reducers: {
    bringFront: (state, action: PayloadAction<AppTitle>) => {
      if (state.includes(action.payload)) {
        const idx = state.indexOf(action.payload);
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1, state.length),
          action.payload,
        ];
      } else state.push(action.payload);
    },
    deleteZIndex: (state, action: PayloadAction<AppTitle>) => {
      if (state.length > 0) {
        return state.filter((item) => item !== action.payload);
      }
    },
  },
});

export const { bringFront, deleteZIndex } = zIndexSlice.actions;

export default zIndexSlice.reducer;

// [a,b,c,d] (b) => [a,c,d,b]
