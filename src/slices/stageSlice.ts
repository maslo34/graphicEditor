import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface OptionsStage {
  x: number;
  y: number;
	isDragging: boolean,
}

const initialState: OptionsStage = {
  x: 0,
  y: 0,
	isDragging: false,
};

export const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    setIsDragging: (state) => {
      state.isDragging = !state.isDragging;
    },
		setPosition: (state, action: PayloadAction<{x: number, y: number}>) => {
			state.x = action.payload.x;
			state.y = action.payload.y;
		}
  },
});

export const { setIsDragging } = stageSlice.actions;
export const selectorStage = (state: RootState) => state.stage;

export default stageSlice.reducer;