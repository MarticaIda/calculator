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


//default display
display.textContent = 0;

let integers = [];
var numbers = [];
var sign = [];
let num;
let num1;
let num2;
let operator;
let result;
let displayValue;

function toPlaceValues(displayValue) {
  display.textContent = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 16
  });
};

digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    const val = digit.value;
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (temp == result) {
      numbers = [];
      integers = [];
      sign = [];
      display.textContent = '';
      display.textContent += val;
      integers.push(display.textContent);
      console.log(display.textContent);
    } else if (display.textContent.length <= 18) {
      if (display.textContent == 0) {
        if (val == 0) {
          display.textContent = 0;
          // pushing each clicked number into array of integers to later extract the last element
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
        if (display.textContent == sign[0]) {
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
        } else {
          display.textContent += val;
          display.textContent.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 16
          });
          integers.push(display.textContent);
        };
      };
    };
    // turning the last element of integers array from string into integer  
    num = parseFloat(integers[integers.length - 1]);
  });
});

// pushing the last element of integers array into numbers array which provides num1 and num2 for operations
function toNumbers(num) {
  if (!num == '') {
    numbers.push(num);
  }
};

keyDecimal.addEventListener('click', () => {
  const val = keyDecimal.value;
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    return;
  } else if (!display.textContent.includes('.')) {
    display.textContent += val;
  };
});

// do something with 0 and negative? 
// result needs to be also saved positive-negative

keyPosNeg.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    result = -result;
    display.textContent = result.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 16
    });
    numbers[0] = result;
  } else {
    num = -(parseFloat(num));
    display.textContent = num;;
  }
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (temp == result) {
      // sign = [];
      // toNumbers(num);
      numbers.push(result);
      display.textContent = operator.value;
      sign[0] = operator.value;
      // sign.push(operator.value);
    } else {
      // pushing the last element of integers array into numbers array which provides num1 and num2 for operations. This is num1
      toNumbers(num);
      display.textContent = operator.value;
      sign[0] = operator.value;
      // sign.push(operator.value);
    }
  });
});

keyEqual.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    console.log("yes");
    // num1 = result;
    numbers.push(result);
    toNumbers(num2);
    num1 = numbers[0];
    num2 = numbers[1];
    //saving operator sign 
    operator = sign[0];
    operate(num1, operator, num2);
  } else {
    // assigning first two elements of numbers array
    console.log(num1, num2, result);
    toNumbers(num);
    num = '';
    num1 = numbers[0];
    num2 = numbers[1];
    //saving operator sign 
    operator = sign[0];
    operate(num1, operator, num2);
  }
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
  numbers[0] = result;
  displayValue = result;
  toPlaceValues(displayValue);
  integers = [];
  numbers = [];
  // sign = [];
  // temp = undefined;
};

backspace.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    null;
  } else {
    let string = display.textContent.toString();
    let shortString = string.slice(0, -1);
    display.textContent = shortString;
    num = parseFloat(shortString);
  };
});

keyClear.addEventListener('click', () => {
  numbers = [];
  integers = [];
  num = '';
  operator = '';
  display.textContent = 0;
});

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
