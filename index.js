// number keys
const digits = document.querySelectorAll('.digits');
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
// possibly need to separate value to add event listener
keyZero.value = 0;
const keyPosNeg = document.getElementById('posneg');
keyPosNeg.value = '-';
const keyDecimal = document.getElementById('decimal');
keyDecimal.value = '.';
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

//default display
display.textContent = 0;

let integers = [];
var numbers = [];
var num;
let num1;
let num2;
let operator;
let result;

//!!!!!!!!!! to store the result of a completed operation for later use
// result = operate(num1, operator, num2);
// displayValue = result;
// num1 = result;
// display.textContent = displayValue;

digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    const val = digit.value;
    if (display.textContent == 0) {
      if (val == 0) {
        display.textContent = 0;
        integers.push(display.textContent);
      } else if (val == '.') {
        display.textContent += val;
        integers.push(display.textContent);
      } else if (display.textContent.includes('.') && !val == 0) {
        display.textContent += val;
        integers.push(display.textContent);
      } else if (!val == 0) {
        display.textContent = '';
        display.textContent += val;
        integers.push(display.textContent);
      }
    } else if (!display.textContent == 0) {
      if (display.textContent == sign) {
        display.textContent = '';
        display.textContent += val;
        integers.push(display.textContent);
      } else
        display.textContent += val;
      displayValue = display.textContent;
      integers.push(displayValue);
    };
    num = parseFloat(integers[integers.length - 1]);
  });
});

function toNumbers(num) {
  numbers.push(num);
}

keyDecimal.addEventListener('click', () => {
  const val = keyDecimal.value;
  if (!display.textContent.includes('.')) {
    display.textContent += val;
  };
});

// do something with 0 and negative? 
keyPosNeg.addEventListener('click', () => {
  const val = keyPosNeg.value;
  if (!display.textContent.includes('-')) {
    display.textContent = val + display.textContent;
  }
  // else if (display.textContent.includes('-')) {
  //  // how to reverse negative number to positive?  
  //   }
});

var sign = [];
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    toNumbers(num);
    display.textContent = operator.value;
    num = '';
    sign.push(operator.value);
  });
});

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

keyEqual.addEventListener('click', () => {
  toNumbers(num);
  num1 = numbers[0];
  num2 = numbers[1];
  operator = sign[0];
  operate(num1, operator, num2);
  console.log(result);
});

function operate(num1, operator, num2) {
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  };
  display.textContent = result;
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
