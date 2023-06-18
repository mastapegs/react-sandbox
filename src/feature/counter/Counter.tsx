import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementEverySecond,
  selectCount,
  selectIncrementOn,
} from "./counterSlice";
import classes from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const incrementOn = useAppSelector(selectIncrementOn);

  const amountToIncrement = 33;
  const buttonsData = [
    { text: "Increment", onClick: () => dispatch(increment()) },
    { text: "Decrement", onClick: () => dispatch(decrement()) },
    {
      text: `Increment by ${amountToIncrement}`,
      onClick: () => dispatch(incrementByAmount(amountToIncrement)),
    },
    {
      text: "Increment every second",
      onClick: () => dispatch(incrementEverySecond()),
      disabled: incrementOn,
    },
  ];

  return (
    <>
      <h1>Count</h1>
      <h2>{count}</h2>
      <div className={classes.buttonSetContainer}>
        <ButtonList data={buttonsData} />
      </div>
    </>
  );
};

type ButtonData = {
  text: string;
  onClick: () => void;
  disabled?: boolean;
};
type ButtonListProps = {
  data: ButtonData[];
};

const ButtonList = (props: ButtonListProps) =>
  props.data.map((data) => (
    <button
      id={data.text}
      onClick={data.onClick}
      disabled={data.disabled !== undefined ? data.disabled : false}
    >
      {data.text}
    </button>
  ));
