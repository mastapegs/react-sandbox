import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

type CounterState = { value: number; incrementOn: boolean };
const initialState: CounterState = { value: 0, incrementOn: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    toggleIncrementOn: (state) => {
      state.incrementOn = !state.incrementOn;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleIncrementOn } =
  counterSlice.actions;
export const incrementEverySecond = (): AppThunk =>
  (dispatch) => {
    dispatch(toggleIncrementOn());
    setInterval(() => dispatch(increment()), 1000);
  };

export const selectCount = (state: RootState) => state.counter.value;
export const selectIncrementOn = (state: RootState) =>
  state.counter.incrementOn;
export const counterSliceReducer = counterSlice.reducer;
