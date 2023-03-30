import { useState } from "react";
import "./styles.css";

function App() {
  const [number, setNumber] = useState(0);

  function onPlusOneClick() {
    setNumber(number + 1);
  }

  function onPlusOneClic() {
    setNumber(number - 1);
  }
  function onPlusTenClick() {
    setNumber(number + 10);
  }
  function onMinusTenClick() {
    setNumber(number - 10);
  }
  function onMultiplyClick() {
    setNumber(number * 5);
  }
  function onDivideOneClick() {
    setNumber(number / 5);
  }

  return (
    <div className="App">
      <h2>{number}</h2>
      <button onClick={onPlusOneClick}>+1</button>
      <button onClick={onPlusOneClic}>-1</button>
      <button onClick={onPlusTenClick}>+10</button>
      <button onClick={onMinusTenClick}>-10</button>
      <button onClick={onMultiplyClick}>*5</button>
      <button onClick={onDivideOneClick}>/5</button>
      <button onClick={onPlusOneClick}>Reset </button>
      <button onClick={onPlusOneClick}>Round</button>
    </div>
  );
}
export default App;
