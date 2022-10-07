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
const warningTab = document.getElementById('warning');

//default display
display.textContent = 0;
warningTab.textContent = '';

let integers = [];
var numbers = [];
var sign = [];
let num;
let num1;
let num2;
let operator;
let result;
let displayValue;

digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    const val = digit.value;
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (temp == result || display.textContent == "No can't do") {
      numbers = [];
      integers = [];
      sign = [];
      display.textContent = '';
      display.textContent += val;
      integers.push(display.textContent);
    } else if (display.textContent == 0) {
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
        if (display.textContent.length <= 15) {
          displayValue = display.textContent += val;
          displayValue.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 15
          });
          integers.push(display.textContent);
        } else {
          return;
        };
      };
    };
    // turning the last element of integers array from string into integer  
    num = parseFloat(integers[integers.length - 1]);
  });
});

//digits keyboard support
document.addEventListener('keydown', (event) => {
  if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9') {
    const val = event.key;
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (temp == result || display.textContent == "No can't do") {
      numbers = [];
      integers = [];
      sign = [];
      display.textContent = '';
      display.textContent += val;
      integers.push(display.textContent);
    } else if (display.textContent == 0) {
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
        if (display.textContent.length <= 15) {
          displayValue = display.textContent += val;
          displayValue.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 15
          });
          integers.push(display.textContent);
        };
      };
    };
  } else if (event.key == '.') {
    const val = event.key;
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (temp == result) {
      return;
    } else if (!display.textContent.includes('.')) {
      display.textContent += val;
    };
  } else {
    return;
  };
  // turning the last element of integers array from string into integer  
  num = parseFloat(integers[integers.length - 1]);
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

keyPosNeg.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    result = -result;
    display.textContent = result.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 16
    });
  } else if (display.textContent == 0) {
    return;
  } else {
    num = -(parseFloat(num));
    display.textContent = num;;
  }
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (display.textContent == "No can't do") {
      integers = [];
      numbers = [];
      sign = [];
      return;
    } else {
      temp = parseFloat(display.textContent.replace(/,/g, ''));
      if (temp == result) {
        numbers.push(result);
        display.textContent = operator.value;
        sign[0] = operator.value;
      } else {
        // pushing the last element of integers array into numbers array which provides num1 and num2 for operations. This is num1
        toNumbers(num);
        display.textContent = operator.value;
        sign[0] = operator.value;
      };
    };
  });
});
//operator keyboard support
document.addEventListener('keydown', (event) => {
  if (event.key == '-' || event.key == '+' || event.key == '*' || event.key == '/') {
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (display.textContent == "No can't do") {
      integers = [];
      numbers = [];
      sign = [];
      return;
    } else {
      temp = parseFloat(display.textContent.replace(/,/g, ''));
      if (temp == result) {
        numbers.push(result);
        display.textContent = event.key;
        sign[0] = event.key;
      } else {
        // pushing the last element of integers array into numbers array which provides num1 and num2 for operations. This is num1
        toNumbers(num);
        display.textContent = event.key;
        sign[0] = event.key;
      };
    };
  } else if (event.key == 'Enter' || event.key == '=') {
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (numbers[0] == undefined && num1 == undefined) {
      return;
    } else if (temp == result) {
      num1 = result;
      numbers.push(result);
      toNumbers(num2);
      //saving operator sign 
      operator = sign[0];
      operate(num1, operator, num2);
    } else {
      // assigning first two elements of numbers array
      toNumbers(num);
      // num = '';
      num1 = numbers[0];
      num2 = numbers[1];
      //saving operator sign 
      operator = sign[0];
      operate(num1, operator, num2);
    }
  } else if (event.key === 'Backspace') {
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (temp == result) {
      null;
    } else {
      // let string = display.textContent.toString();
      let shortString = display.textContent.slice(0, -1);
      if (shortString == "-") {
        display.textContent = '';
      } else {
        display.textContent = shortString;
        num = parseFloat(shortString);
      };
    };
  } else if (event.key === 'Escape') {
    numbers = [];
    integers = [];
    num1 = undefined;
    num2 = undefined;
    num = '';
    operator = '';
    display.textContent = 0;
    warningTab.textContent = '';
  } else {
    return;
  };
});

keyEqual.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (numbers[0] == undefined && num1 == undefined) {
    return;
  } else if (temp == result) {
    num1 = result;
    numbers.push(result);
    toNumbers(num2);
    //saving operator sign 
    operator = sign[0];
    operate(num1, operator, num2);
  } else {
    // assigning first two elements of numbers array
    toNumbers(num);
    // num = '';
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
    if (num === 0) {
      display.textContent = "No can't do";
      numbers = [];
      // do i need it?
      num1 = numbers[0];
      num2 = numbers[1];
      return;
    } else {
      result = num1 / num2;
    };
  };
  let resultLength = result.toString().length;
  // limiting the number of characters on display
  if (resultLength <= 16) {
    displayValue = result;
    display.textContent = displayValue.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 15
    });
  } else {
    warningTab.textContent = 'Numbers are too big. Result may not be precise.';
    display.textContent = result;
    numbers[0] = result;
  };
  integers = [];
  numbers = [];
};

backspace.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    null;
  } else {
    // let string = display.textContent.toString();
    let shortString = display.textContent.slice(0, -1);
    if (shortString == "-") {
      display.textContent = '';
    } else {
      display.textContent = shortString;
      num = parseFloat(shortString);
    };
  };
});

keyClear.addEventListener('click', () => {
  numbers = [];
  integers = [];
  num1 = undefined;
  num2 = undefined;
  num = '';
  operator = '';
  display.textContent = 0;
  warningTab.textContent = '';
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
