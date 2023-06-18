import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementEverySecond,
  selectCount,
  selectIncrementOn,
} from "./counterSlice";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const incrementOn = useAppSelector(selectIncrementOn);

  const amountToIncrement = 33;

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(amountToIncrement))}>
        Increment by {amountToIncrement}
      </button>
      <button
        disabled={incrementOn}
        onClick={() => dispatch(incrementEverySecond())}
      >
        Increment every second
      </button>
    </>
  );
};
