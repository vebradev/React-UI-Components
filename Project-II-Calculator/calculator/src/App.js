import React, { useState } from "react";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import OperatorButton from "./components/ButtonComponents/OperatorButton";
import "./App.css";


const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="calculator">
      <div className="row">
        <CalculatorDisplay />
      </div>
      <div className="row">
        <ActionButton text="clear" buttonStyle="clear" />
        <OperatorButton text="÷" buttonStyle="operator" />
      </div>
      <div className="row">
        {[7,8,9].map(number => <NumberButton text={number} style="number" key={number} value={number} setValue={setValue} />)}
        <OperatorButton text="×" buttonStyle="operator" />
      </div>
      <div className="row">
        {[4,5,6].map(number => <NumberButton text={number} style="number" key={number} value={number} setValue={setValue} />)}
        <OperatorButton text="−" buttonStyle="operator" />
      </div>
      <div className="row">
        {[1,2,3].map(number => <NumberButton text={number} style="number" key={number} value={number} setValue={setValue} />)}
        <OperatorButton text="+" buttonStyle="operator" />
      </div>
      <div className="row">
        <ActionButton text="0" buttonStyle="zero" />
        <OperatorButton text="=" buttonStyle="operator" />
      </div>
    </div>
  );
};

export default App;
