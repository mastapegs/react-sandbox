import { useSelector, useDispatch } from "react-redux";
import { increment } from "./counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
};
