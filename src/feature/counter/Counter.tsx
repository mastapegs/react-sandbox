import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const amountToIncrement = 33;

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(amountToIncrement))}>
        Increment by {amountToIncrement}
      </button>
    </>
  );
};
