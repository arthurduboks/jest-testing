import { useState } from "react";
import { divide, multiply, subtract, sum } from "utils/math-function";

const OPERATORS = ["+", "-", "x", "/"];

export function Calculator({ defaultA, defaultB, defaultOperator }) {
  const [inputA, setInputA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : Number(defaultA)
  );

  const [inputB, setInputB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : Number(defaultB)
  );

  const [operator, setOperator] = useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  const valueA = inputA || 0;
  const valueB = inputB || 0;

  const getResults = () => {
    switch (operator) {
      case "+":
        return sum(valueA, valueB);
      case "-":
        return subtract(valueA, valueB);
      case "x":
        return multiply(valueA, valueB);
      case "/":
        return divideSafe(valueA, valueB);
      default:
        return "No operator provided.";
    }
  };

  const divideSafe = (a, b) => {
    try {
      return divide(a, b);
    } catch (err) {
      return err.message;
    }
  };

  const renderInputA = () => {
    return (
      <input
        data-testid="inputA"
        value={inputA}
        type="number"
        onChange={(e) => {
          setInputA(
            Number.parseFloat(
              e.target.value ? Number.parseFloat(e.target.value) : ""
            )
          );
        }}
      />
    );
  };

  const renderInputB = () => {
    return (
      <input
        data-testid="inputB"
        value={inputB}
        type="number"
        onChange={(e) => {
          setInputB(
            Number.parseFloat(
              e.target.value ? Number.parseFloat(e.target.value) : ""
            )
          );
        }}
      />
    );
  };

  const renderSelectBox = () => {
    return (
      <div>
        <select
          data-testid="operator"
          value={operator}
          className="form-select"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
      </div>
    );
  };
  return (
    <>
      <h1 style={{ marginBottom: 40 }}>Calculator</h1>
      {renderInputA()}
      {renderSelectBox()}
      {renderInputB()}
      <h2 style={{ marginTop: 20 }}>Results</h2>
      <span data-testid="result">{getResults()}</span>
    </>
  );
}
