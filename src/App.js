import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/mainSlice";

function App() {
  const counterValue = useSelector((state) => state.counterValue);
  const dispatch = useDispatch();

  console.log("mainSliceState: ", counterValue);

  return (
    <div>
      <div className="App">App</div>
      <div>
        <button onClick={() => dispatch(increment())}>+Increment</button>
        <button onClick={() => dispatch(decrement())}>-Decrement</button>
      </div>
      <div>Value: {counterValue}</div>
    </div>
  );
}

export default App;
