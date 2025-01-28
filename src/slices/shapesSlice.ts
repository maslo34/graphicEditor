import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

import type { RootState } from "./index";
import type { Shapes, Shape, Position } from "../types";

const initialState: Shapes = {
  shapes: [],
};

export const shapesSlise = createSlice({
  name: "shapes",
  initialState,
  reducers: {
    addNewShape: (state, action: PayloadAction<Shape>) => {
      const shapeWithId = { ...action.payload, id: uniqueId() };
      state.shapes.push(shapeWithId);
    },
    setIsDraggingCurrentShape: (state, action: PayloadAction<{id: string, position: Position}>) => {
			console.log(action.payload.position)
      state.shapes = state.shapes.map((shape) => {
				if (shape.id === action.payload.id) {
					return {...shape, x: action.payload.position.x, y: action.payload.position.y }
				}
				return shape
			}
)
    },
    // setPosition: (state, action: PayloadAction<Position>) => {
    //   const dx = action.payload.x - state.startX;
    //   const dy = action.payload.y - state.startY;
    //   state.x = state.x + dx;
    //   state.y = state.y + dy;
    //   state.startX = action.payload.x;
    //   state.startY = action.payload.y;
    // },
    // setStartPosition: (state, action: PayloadAction<Position>) => {
    //   state.startX = action.payload.x;
    //   state.startY = action.payload.y;
    // },
  },
});

export const { addNewShape, setIsDraggingCurrentShape } = shapesSlise.actions;
export const selectorShapes = (state: RootState) => state.shapes;

export default shapesSlise.reducer;

