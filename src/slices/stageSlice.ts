import { createSlice, isAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import type { OptionsStage, Position } from "../types"

const initialState: OptionsStage = {
  x: 0,
  y: 0,
  startX: 0,
  startY: 0,
  scale: 1,
  isDragging: false,
};

export const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    setIsDragging: (state) => {
      state.isDragging = !state.isDragging;
    },
    setPosition: (state, action: PayloadAction<Position>) => {
      const dx = action.payload.x - state.startX;
      const dy = action.payload.y - state.startY;
      state.x = state.x + dx;
      state.y = state.y + dy;
      state.startX = action.payload.x;
      state.startY = action.payload.y;
    },
    setStartPosition: (state, action: PayloadAction<Position>) => {
      state.startX = action.payload.x;
      state.startY = action.payload.y;
    },
    setScale: (state, action: PayloadAction<number>) => {
      state.scale = action.payload
    }
  },
});

export const { setIsDragging, setPosition, setStartPosition, setScale } =
  stageSlice.actions;
export const selectorStage = (state: RootState) => state.stage;

export default stageSlice.reducer;
