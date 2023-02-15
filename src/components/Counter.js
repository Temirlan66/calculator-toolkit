import { useDispatch, useSelector } from "react-redux";
import { calCulatorActionTypes } from "../store/calculator/CalculatorReducer";
import classes from "./Counter.module.css";

const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: calCulatorActionTypes.ADD, payload: 5 });
  };

  const divideHandler = () => {
    dispatch({ type: calCulatorActionTypes.DIVIDE, payload: 4 });
  };

  const subtractHandler = () => {
    dispatch({ type: calCulatorActionTypes.SUBTRACT, payload: 10 });
  };

  const multilyHandler = () => {
    dispatch({ type: calCulatorActionTypes.MULTIPLY, payload: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5</button>
      <button onClick={divideHandler}>/4</button>
      <button onClick={subtractHandler}>-10</button>
      <button onClick={multilyHandler}>*2</button>
    </main>
  );
};

export default Calculator;
