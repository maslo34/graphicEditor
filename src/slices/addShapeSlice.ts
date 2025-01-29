import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "./index";
import type { addNewShape } from "../types";

const initialState: addNewShape = {
  methodAddShape: false,
  sizeShape: 1,
};

export const addShapesSlise = createSlice({
  name: "addShape",
  initialState,
  reducers: {
    selectMetodAndShape: (state, action: PayloadAction<addNewShape>) => {
      state.methodAddShape = action.payload.methodAddShape;
      state.name = action.payload.name;
    },
    setPositionShape: (state, action: PayloadAction<addNewShape>) => {
      state.position = action.payload.position;
    },
    setSizeShape: (state, action: PayloadAction<addNewShape>) => {
      state.sizeShape = action.payload.sizeShape;
    },
    addShapeInStage: (state) => {
      state.methodAddShape = false;
      state.name = undefined;
      state.position = undefined;
      state.sizeShape = 1;
    },
  },
});

export const { selectMetodAndShape, setPositionShape, setSizeShape, addShapeInStage } = addShapesSlise.actions;
export const selectorShapes = (state: RootState) => state.addShape;

export default addShapesSlise.reducer;
