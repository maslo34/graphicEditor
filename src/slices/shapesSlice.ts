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
  },
});

export const { addNewShape } = shapesSlise.actions;
export const selectorShapes = (state: RootState) => state.shapes;

export default shapesSlise.reducer;

