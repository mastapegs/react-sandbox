import { Action, configureStore } from "@reduxjs/toolkit";
import { counterSliceReducer } from "./feature/counter/counterSlice";
import { ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<unknown>
>;
