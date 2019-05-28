import React from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";
import "./App.css";


const App = () => {
  return (
    <div className="calculator">
      <div className="row-1">
        <CalculatorDisplay />
      </div>
      <div className="row-2">
        <ActionButton text="clear" />
        <OperatorButton text="÷" buttonStyle="operator" />
      </div>
      <div className="row-3">
        <NumberButton text="7" buttonStyle="number" />
        <NumberButton text="8" buttonStyle="number" />
        <NumberButton text="9" buttonStyle="number" />
        <OperatorButton text="*" buttonStyle="operator" />
      </div>
      <div className="row-4">
        <NumberButton text="4" buttonStyle="number" />
        <NumberButton text="5" buttonStyle="number" />
        <NumberButton text="6" buttonStyle="number" />
        <OperatorButton text="−" buttonStyle="operator" />
      </div>
      <div className="row-5">
        <NumberButton text="1" buttonStyle="number" />
        <NumberButton text="2" buttonStyle="number" />
        <NumberButton text="3" buttonStyle="number" />
        <OperatorButton text="+" buttonStyle="operator" />
      </div>
      <div className="row-6">
        <ActionButton text="0" buttonStyle="number" />
        <OperatorButton text="=" buttonStyle="operator" />
      </div>
    </div>
  );
};

export default App;
