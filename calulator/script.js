const display = document.getElementById("expression");
const expression = document.querySelector(".operation");

const operatorList = ["%", "/", "*", "+", "-"];

document.addEventListener("keydown", (event) => {
  if (event.key >= 0 && event.key <= 9) {
    appendNumber(event.key);
  } else if (event.key === ".") {
    appendNumber(event.key);
  } else if (operatorList.includes(event.key)) {
    appendNumber(event.key);
  } else if (event.key === "Enter") {
    calculateExpression();
  } else if (event.key === "Escape") {
    allClear();
  } else if (event.key === "Backspace") {
    clearExpression();
  }
});

const calculateExpression = () => {
  const currentInput = display.innerHTML;

  if (operatorList.includes(currentInput.trim().slice(-1))) {
    return;
  }

  expression.innerHTML = currentInput;

  let parts = currentInput.split(" ");
  let operators = [];
  let numbers = [];

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      numbers.push(parseFloat(parts[i]));
    } else {
      operators.push(parts[i]);
    }
  }

  operatorList.forEach((operator) => {
    while (operators.includes(operator)) {
      let index = operators.indexOf(operator);

      let result = calculate(numbers[index], numbers[index + 1], operator);

      numbers.splice(index, 2, result);
      operators.splice(index, 1);
    }
  });

  display.innerHTML = numbers[0];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return (num1 / 100) * num2;
  }
};

const appendNumber = (input) => {
  const currentInput = display.innerHTML;
  if (currentInput === "0" && input !== "-" && operatorList.includes(input)) {
    return;
  }

  if (currentInput === "0") {
    display.innerHTML = input;
    return;
  }

  const lastChar = currentInput.trim().slice(-1);

  if (operatorList.includes(lastChar) && operatorList.includes(input)) {
    return;
  }

  if (operatorList.includes(input)) {
    display.innerHTML += ` ${input} `;
    return;
  }

  display.innerHTML += input;
};

const allClear = () => {
  display.innerHTML = "0";
  expression.innerHTML = "--";
};

const clearExpression = () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
  if (display.innerHTML === "") {
    display.innerHTML = "0";
    expression.innerHTML = "--";
  }
};
