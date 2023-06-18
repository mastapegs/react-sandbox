import { configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./feature/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});
