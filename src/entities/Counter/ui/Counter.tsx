import { useDispatch, useSelector } from "react-redux";
import Button from "shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h2 data-testid="value-title">{counterValue}</h2>
      <Button data-testid="increment-btn" onClick={increment}>
        +
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        -
      </Button>
    </>
  );
};

export default Counter;
