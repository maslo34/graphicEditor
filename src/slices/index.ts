import { configureStore } from "@reduxjs/toolkit";

import stageReducer from './stageSlice';
import shapesReducer from "./shapesSlice";

export const store = configureStore({
    reducer: {
        stage: stageReducer,
				shapes: shapesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;