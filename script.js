add = (num1, num2) => {
  return num1 + num2;
};
subtract = (num1, num2) => {
  return num1 - num2;
};
multiply = (num1, num2) => {
  return num1 * num2;
};
divide = (num1, num2) => {
  return num1 / num2;
};

operate = (operand, num1, num2) => {
  let result = "";
  num1 = Number(num1);
  num2 = Number(num2);
  if (operand == "+") {
    result = add(num1, num2);
    console.log({ result });
  }
  display.innerHTML = result;
};
let num1;
let num2;
const display = document.getElementById("display");
const seven = document.getElementById("seven");
const btnDivide = document.getElementById("divide");
const btnAdd = document.getElementById("add");
const btnEquals = document.getElementById("equals");
display.innerHTML = 0;
let operand = "";
seven.addEventListener("click", () => {
  if (display.innerHTML == "+") {
    display.innerHTML = 0;
  }
  display.innerHTML = display.innerHTML += 7;
});

btnEquals.addEventListener("click", () => {
  num2 = display.innerHTML;
  operate(operand, num1, num2);
});

btnAdd.addEventListener("click", () => {
  num1 = display.innerHTML;
  operand = "+";
  display.innerHTML = "+";
});
