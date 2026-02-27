import { AppTitle } from "@/components/desktop/config";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const PROJECTS_WINDOW_ID = "projects" as const;
export type WindowId = AppTitle | typeof PROJECTS_WINDOW_ID;

const initialState: string[] = [];
const zIndexSlice = createSlice({
  name: "zIndex",
  initialState,
  reducers: {
    bringFront: (state, action: PayloadAction<WindowId>) => {
      if (state.includes(action.payload)) {
        const idx = state.indexOf(action.payload);
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1, state.length),
          action.payload,
        ];
      } else state.push(action.payload);
    },
    deleteZIndex: (state, action: PayloadAction<WindowId>) => {
      if (state.length > 0) {
        return state.filter((item) => item !== action.payload);
      }
    },
  },
});

export const { bringFront, deleteZIndex } = zIndexSlice.actions;

export default zIndexSlice.reducer;
