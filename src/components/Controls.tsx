import { useState } from "react";

function Controls({ setOperand, operand, equation, setEquation }: any) {
  const [answer, setAnswer] = useState("0");

function updateDisplay(e: any) {
  const { classList, innerText } = e.target;
  const isNum = classList.contains("num");
  const isOperator = classList.contains("operator");
  const isMinusOperator = innerText === "-";
  const isDecimal = innerText === ".";

  if (operand.length > 22 || operand === "DIGIT LIMIT EXCEEDED") {
    if (isNum) {
      setOperand("DIGIT LIMIT EXCEEDED");
      setTimeout(() => {
        setOperand(equation);
      }, 1000);
    }
    return;
  }

  if (isOperator) {
    const operator = innerText;

    if (isMinusOperator) {
      if (equation.match(/=/)) {
        setEquation(answer + operator);
        setOperand(operator);
      } else if (equation === "0" || equation === "") {
        setOperand(operator);
        setEquation(operator);
      } else if (equation.match(/^-\D/)) {
        setOperand(operator);
        setEquation(operator);
      } else if (equation.slice(-1).match(/[x\/+]$/)) {
        setOperand(operator);
        setEquation(equation + operator);
      } else if (equation.match(/[x\/+]-$/)) {
        setOperand(operator);
        setEquation(equation);
      } else if (equation.slice(-2).match(/--/)) {
        //do nothing since we don't want to allow more than 2 minus sings in a row
      } else {
        setOperand(operator);
        setEquation(equation + operator);
      }
    } else {
      if (equation.match(/=/)) {
        setEquation(answer + operator);
        setOperand(operator);
      } else if (equation === "0" || equation === "") {
        setOperand(operator);
        setEquation(operator);
      } else if (equation.slice(-1).match(/\d$/)) {
        setOperand(operator);
        setEquation(equation + operator);
      } else if (equation.match(/[x\/+]-$/)) {
        setOperand(operator);
        setEquation(equation.slice(0, -2) + operator);
      } else if (equation.slice(-1).match(/[\/x+-]$/)) {
        setOperand(operator);
        setEquation(equation.slice(0, -1) + operator);
      }
    }
  } else {
    const num = innerText;

    if (equation.match(/=/)) {
      setEquation(num);
      setOperand(num);
    } else if (operand === "0" || equation === "") {
      setOperand(num);
      setEquation(num);
    } else if (operand.indexOf(".") >= 0) {
      if (!isDecimal) {
        setOperand(operand + num);
        setEquation(equation + num);
      }
    } else if (operand.match(/^[x\/+]/)) {
      setOperand(num);
      setEquation(equation + num);
    } else {
      setOperand(operand + num);
      setEquation(equation + num);
    }
  }
}

  function clearDisplay() {
    setOperand("0");
    setEquation("");
  }

  function evaluateEquation() {
    if (equation === "" || equation.match(/=/)) {
      return;
    }

    let expression = equation.replace(/x/g, "*");

    if (!expression.match(/\d$/)) {
      //if expression doesn't end with digit, trim from the end to the last digit
      expression = expression.match(/^(.*\d)/)[0];
    }

    setOperand(eval(expression).toString());
    setAnswer(eval(expression).toString());
    setEquation(expression + "= " + eval(expression).toString());
  }

  return (
    <>
      <div className="controls-container">
        <button id="zero" className="num" onClick={updateDisplay}>
          0
        </button>
        <button id="one" className="num" onClick={updateDisplay}>
          1
        </button>
        <button id="two" className="num" onClick={updateDisplay}>
          2
        </button>
        <button id="three" className="num" onClick={updateDisplay}>
          3
        </button>
        <button id="four" className="num" onClick={updateDisplay}>
          4
        </button>
        <button id="five" className="num" onClick={updateDisplay}>
          5
        </button>
        <button id="six" className="num" onClick={updateDisplay}>
          6
        </button>
        <button id="seven" className="num" onClick={updateDisplay}>
          7
        </button>
        <button id="eight" className="num" onClick={updateDisplay}>
          8
        </button>
        <button id="nine" className="num" onClick={updateDisplay}>
          9
        </button>
        <button id="decimal" className="num" onClick={updateDisplay}>
          .
        </button>
        <button id="clear" onClick={clearDisplay}>
          AC
        </button>
        <button id="divide" className="operator" onClick={updateDisplay}>
          /
        </button>
        <button id="multiply" className="operator" onClick={updateDisplay}>
          x
        </button>
        <button id="add" className="operator" onClick={updateDisplay}>
          +
        </button>
        <button id="subtract" className="operator" onClick={updateDisplay}>
          -
        </button>
        <button id="equals" className="operator" onClick={evaluateEquation}>
          =
        </button>
      </div>
    </>
  );
}

export default Controls;
