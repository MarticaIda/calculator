const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  return num1 / num2;
};


function operate(operator, num1, num2) {
  if (operator === "plus") {
   return  add(num1, num2);
  } else if (operator === "minus") {
   return subtract(num1, num2);
  } else if (operator === "multiply") {
   return multiply(num1, num2);
  } else if (operator === "divide") {
    return divide(num1, num2);
  };
};
operate ("plus",3,5)


// const sum = function (array) {
//   return array.reduce(function (total, num) {
//     return total + num;
//   }, 0);
// };
// const power = function (num1, num2) {
//   return num1 ** num2;
// };

// const factorial = function (num) {
//   if (num === 0 || num === 1)
//     return 1;
//   for (let i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// };
