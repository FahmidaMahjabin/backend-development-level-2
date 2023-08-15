import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <button
          className="px-4 py-2 font-bold bg-green-500"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <br></br>
      {count}
      <div>
        <button
          className="px-4 py-2 font-bold bg-green-500"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          className="px-4 py-2 font-bold bg-green-500"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          IncrementByValue
        </button>
      </div>
    </>
  );
}

export default App;
