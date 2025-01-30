import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

import type { RootState } from "./index";
import type { Shapes, Shape } from "../types";

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
    changeColorShape: (state,  action: PayloadAction<Shape>) => {
      const shapeToChange = action.payload;
      const shapeIndex = state.shapes.findIndex((shape: Shape) => shape.id === shapeToChange.id)
      state.shapes[shapeIndex].color = shapeToChange.color
      console.log(`Changing color of shape ${shapeToChange.id} from ${state.shapes[shapeIndex].color} to ${shapeToChange.color}`);
    }
  },
});

export const { addNewShape, changeColorShape } = shapesSlise.actions;
export const selectorShapes = (state: RootState) => state.shapes;

export default shapesSlise.reducer;

