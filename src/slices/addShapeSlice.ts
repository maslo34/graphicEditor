import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "./index";
import type { addShape } from "../types";

const initialState: addShape = {
  isAdding: false,
};

export const addShapesSlise = createSlice({
  name: "addShape",
  initialState,
  reducers: {
    addShapeOnStage: (state, action: PayloadAction<addShape>) => {
      if (action.payload.name === state.name) {
        state.isAdding = !state.isAdding;
      } else {
      	state.name = action.payload.name
			}
    },
  },
});

export const { addShapeOnStage } = addShapesSlise.actions;
export const selectorShapes = (state: RootState) => state.addShape;

export default addShapesSlise.reducer;
