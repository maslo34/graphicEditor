import { configureStore } from "@reduxjs/toolkit";

import stageReducer from "./stageSlice";
import shapesReducer from "./shapesSlice";
import addShapeReducer from "./addShapeSlice";
import contextMenuShapeReducer from "./contexMenyShapeSlice";

export const store = configureStore({
  reducer: {
    stage: stageReducer,
    shapes: shapesReducer,
    addShape: addShapeReducer,
    contextMenuShape: contextMenuShapeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
