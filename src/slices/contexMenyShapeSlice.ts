import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "./index";
import type { ContextMenuShape } from "../types";

const initialState: ContextMenuShape = {
  isContextMenuShape: false,
};

export const contextMenuShapeSlise = createSlice({
  name: "contextMenuShape",
  initialState,
  reducers: {
    openMenuShape: (state, action: PayloadAction<ContextMenuShape>) => {
        state.isContextMenuShape = action.payload.isContextMenuShape;
        state.id = action.payload.id;
        state.position = action.payload.position;
    },
    closeMenuShape: (state) => {
        state.isContextMenuShape = false;
        state.id = undefined;
        state.position = undefined;
    }
  },
});

export const { openMenuShape, closeMenuShape } = contextMenuShapeSlise.actions;
export const selectorShapes = (state: RootState) => state.contextMenuShape;

export default contextMenuShapeSlise.reducer;
