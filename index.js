// number keys
const keys = document.querySelectorAll('.keys');
const keyOne = document.getElementById('one').value = 1;
const keyTwo = document.getElementById('two').value = 2;
const keyThree = document.getElementById('three').value = 3;
const keyFour = document.getElementById('four').value = 4;
const keyFive = document.getElementById('five').value = 5;
const keySix = document.getElementById('six').value = 6;
const keySeven = document.getElementById('seven').value = 7;
const keyEight = document.getElementById('eight').value = 8;
const keyNine = document.getElementById('nine').value = 9;
const keyZero = document.getElementById('zero');
// possibly need to separeat value to add event listener
keyZero.value = 0;
const keyPosNeg = document.getElementById('posneg').value = '-';
const keyDecimal = document.getElementById('decimal').value = '.';
// operator and clear keys
const operators = document.querySelectorAll('.operators');
const keyPlus = document.getElementById('plus').value = '+';
const keyMinus = document.getElementById('minus').value = '-';
const keyMultiply = document.getElementById('multiply').value = '*';
const keyDivide = document.getElementById('divide').value = '/';
const keyClear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const keyEqual = document.getElementById('equal');
const display = document.getElementById('display');
let displayValue;
let displayContent = display.textContent;

//default display
display.textContent = 0;

let num1;
let num2;

keys.forEach((key) => {
  key.addEventListener('click', () => {
    const val = key.value;
    if (display.textContent == 0) {
      if (val == 0) {
        display.textContent = 0;
      } else if (!val == 0) {
        display.textContent = '';
        display.textContent += val;
        console.log(display.textContent);
      }
    } else if (!display.textContent == 0) {
      display.textContent += val;
      console.log(display.textContent);
    };
  });
});



//object? with two numbers

// let num2 = 0;
// num2 = keys.forEach((key) => {
//   key.addEventListener('click', () => {
//     const val = key.value;
// //     if (displayContent = '') {
// // //do something about 0 to display it only once
// //     }
//     return num2 = display.textContent += val;
//   });
// });

let sign = "";
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    const val = operator.value;
    sign = val;
    display.textContent = sign;
  });
  return sign;
});

function displayOperation() {
  display.textContent;
}

backspace.addEventListener('click', () => {
  let temp = display.textContent;
  let string = temp.toString();
  let shortString = string.slice(0, -1);
  console.log(shortString);
  display.textContent = shortString;
  // to use in calculations
  shortString = parseFloat(shortString, 10);
});

keyClear.addEventListener('click', () => {
  display.textContent = 0;
});


// // pass variables into operate function
// keyEqual.addEventListener('click', () => {
//   display.textContent = 
// });

// math operations
function add(num1, num2) {
  return num1 + num2;
};
function subtract(num1, num2) {
  return num1 - num2;
};
function multiply(num1, num2) {
  return num1 * num2;
};
function divide(num1, num2) {
  return num1 / num2;
};

function operate(operator, num1, num2) {
  let result;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  };
  displayContent = result;
};




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
