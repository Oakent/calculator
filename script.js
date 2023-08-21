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

let display = document.getElementById("display");
let seven = document.getElementById("7");

seven.addEventListener("click", () => {
  display.innerHTML = display.innerHTML += "7";
});
