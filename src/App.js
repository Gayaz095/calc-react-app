import { useState } from "react";
import "./App.css";

function App() {
  const [solution, getSolution] = useState("");
  const [result, setResult] = useState("");
  const symbols = ["/", "*", "+", "-", "."];

  const digitCal = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => newCalculate(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  const newCalculate = (value) => {
    if (
      (symbols.includes(value) && solution === "") ||
      (symbols.includes(value) && symbols.includes(solution.slice(-1)))
    ) {
      return;
    }
    getSolution(solution + value);
    if (!symbols.includes(value)) {
      setResult(eval(solution + value).toString());
    }
  };

  const calculate = () => {
    getSolution(eval(solution).toString());
  };

  const remove= () => {
    if (solution === "") {
      return;
    }
    const value = solution.slice(0, -1);
    getSolution(value);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="screen">
          {solution || "0"}
        </div>
        <div className="symbols">
          <button onClick={() => newCalculate("/")}>/</button>
          <button onClick={() => newCalculate("*")}>*</button>
          <button onClick={() => newCalculate("+")}>+</button>
          <button onClick={() => newCalculate("-")}>-</button>
          <button onClick={remove}>Delete</button>
        </div>
        <div className="digits">
          {digitCal()}
          <button onClick={() => newCalculate("0")}>0</button>
          <button onClick={() => newCalculate(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
