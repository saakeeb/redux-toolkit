import {
  decrement,
  increment,
  valueIncrement,
} from "./redux/feature/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="bg-red-500">This is testing</h1>
      <div>
        <div className="flex justify-center items-center gap-4">
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <div>{count}</div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(valueIncrement(10))}>Value Increment</button>
        </div>
      </div>
    </>
  );
}

export default App;
