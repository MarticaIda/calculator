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
const keyPosNeg = document.getElementById('posneg');
const keyDecimal = document.getElementById('decimal');

// operator and clear keys
const operations = document.querySelectorAll('.operators');
const keyPlus = document.getElementById('plus').value = '+';
const keyMinus = document.getElementById('minus').value = '-';
const keyMultiply = document.getElementById('multiply').value = '*';
const keyDivide = document.getElementById('divide').value = '/';
const keyClear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const keyEqual = document.getElementById('equal');
const display = document.getElementById('display');
const warningTab = document.getElementById('warning');
const calculations = document.getElementById('calculations');

//default values
let integers = [];
let numbers = [];
let sign = [];
let num;
let num1;
let num2;
let operator;
let result;
let displayValue;
keyZero.value = 0;
keyPosNeg.value = '-';
keyDecimal.value = '.';
//default display
display.textContent = 0;
calculations.textContent = '';
warningTab.textContent = '';

//digits screen input
digits.forEach((digit) => {
  digit.addEventListener('click', () => {
    const val = digit.value;
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    // for division by 0
    if (display.textContent == "No can't do") {
      numbers = [];
      integers = [];
      sign = [];
      display.textContent = '';
      calculations.textContent = '';
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
      if (calculations.textContent.includes(sign[0])) {
        // to start new operation if a digit is pressed after equation was done
        if (calculations.textContent.includes('=') && numbers.length === 0 && integers.length === 0) {
          numbers = [];
          integers = [];
          num1 = undefined;
          num2 = undefined;
          num = undefined;
          operator = undefined;
          result = undefined;
          warningTab.textContent = '';
          calculations.textContent = '';
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
          // to input a new number
        } else if (num == undefined) {
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
        } else if (operator != sign[0] && integers.length === 0) {
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
        } else if (temp == result && calculations.textContent.includes(result)) {
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
          // to add digits to the rolling number
        } else {
          display.textContent += val;
          integers.push(display.textContent);
        }
      } else {
        // to add digits to the rolling number
        if (display.textContent.length <= 15) {
          displayValue = display.textContent += val;
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
    if (display.textContent == "No can't do") {
      numbers = [];
      integers = [];
      sign = [];
      display.textContent = '';
      calculations.textContent = '';
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
      if (calculations.textContent.includes(sign[0])) {
        // to start new operation if a digit is pressed after equation was done
        if (calculations.textContent.includes('=') && numbers.length === 0 && integers.length === 0) {
          numbers = [];
          integers = [];
          num1 = undefined;
          num2 = undefined;
          num = undefined;
          operator = undefined;
          result = undefined;
          warningTab.textContent = '';
          calculations.textContent = '';
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
          // to input a new number
        } else if (num == undefined) {
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
        } else if (operator != sign[0] && integers.length === 0) {
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
        } else if (temp == result && calculations.textContent.includes(result)) {
          display.textContent = '';
          display.textContent += val;
          integers.push(display.textContent);
          // to add digits to the rolling number
        } else {
          display.textContent += val;
          integers.push(display.textContent);
        }
      } else {
        // to add digits to the rolling number
        if (display.textContent.length <= 15) {
          displayValue = display.textContent += val;
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

// decimal point
keyDecimal.addEventListener('click', () => {
  const val = keyDecimal.value;
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    return;
  } else if (!display.textContent.includes('.')) {
    display.textContent += val;
  };
});

// negative/positive value
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

// operator screen input
operations.forEach((operation) => {
  operation.addEventListener('click', () => {
    if (display.textContent == "No can't do") {
      integers = [];
      numbers = [];
      sign = [];
      return;
    } else {
      temp = parseFloat(display.textContent.replace(/,/g, ''));
      if (temp == result) {
        numbers.push(result);
        calculations.textContent = result + operation.value;
        sign[0] = operation.value;
      } else
        if (typeof result == 'number' && numbers.length == 0) {
          numbers.push(result);
          toNumbers(num);
          num1 = numbers[0];
          num2 = numbers[1];
          operator = sign[0];
          operate(num1, operator, num2);
          calculations.textContent = result + operation.value;
          sign[0] = operation.value;
        } else if (typeof numbers[0] == 'number' && typeof numbers[1] == "undefined") {
          toNumbers(num);
          num1 = numbers[0];
          num2 = numbers[1];
          operator = sign[0];
          operate(num1, operator, num2);
          calculations.textContent = result + operation.value;
          sign[0] = operation.value;
        } else {
          // pushing the last element of integers array into numbers array which provides num1 and num2 for operations. This is num1
          toNumbers(num);
          calculations.textContent = num + operation.value;
          sign[0] = operation.value;
          num = undefined;
        };
    };
  });
});

//operator keyboard support
document.addEventListener('keydown', (event) => {
  if (event.key == '-' || event.key == '+' || event.key == '*' || event.key == '/') {
    if (display.textContent == "No can't do") {
      integers = [];
      numbers = [];
      sign = [];
      return;
    } else {
      temp = parseFloat(display.textContent.replace(/,/g, ''));
      if (temp == result) {
        numbers.push(result);
        calculations.textContent = result + event.key;
        sign[0] = event.key;
      } else {
        if (typeof result == 'number' && numbers.length == 0) {
          numbers.push(result);
          toNumbers(num);
          num1 = numbers[0];
          num2 = numbers[1];
          operator = sign[0];
          operate(num1, operator, num2);
          calculations.textContent = result + event.key;
          sign[0] = event.key;
        } else if (typeof numbers[0] == 'number' && typeof numbers[1] == "undefined") {
          toNumbers(num);
          num1 = numbers[0];
          num2 = numbers[1];
          operator = sign[0];
          operate(num1, operator, num2);
          calculations.textContent = result + event.key;
          sign[0] = event.key;
        } else {
          // pushing the last element of integers array into numbers array which provides num1 and num2 for operations. This is num1
          toNumbers(num);
          calculations.textContent = num + event.key;
          sign[0] = event.key;
          num = undefined;
        };
      }
    }
  } else if (event.key == 'Enter' || event.key == '=') {
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (display.textContent == "No can't do") {
      numbers = [];
      integers = [];
      sign = [];
      display.textContent = 0;
      calculations.textContent = '';
      display.textContent += val;
      integers.push(display.textContent);
    } else if (numbers[0] == undefined && num1 == undefined) {
      return;
      // for the cases of repeatedly pressed Enter to perform the same action with the result each time
    } else if (temp == result && integers.length == 0) {
      num1 = result;
      //saving operator sign 
      operator = sign[0];
      operate(num1, operator, num2);
      calculations.textContent = `${num1}${operator}${num2}=`;
      // perform operations with the result value
    } else if (calculations.textContent.includes(result)) {
      num1 = result;
      // toNumbers(num);
      num2 = num;
      operator = sign[0];
      operate(num1, operator, num2);
      calculations.textContent = `${num1}${operator}${num2}=`;
    } else {
      // assigning first two elements of numbers array
      toNumbers(num);
      num1 = numbers[0];
      num2 = numbers[1];
      //saving operator sign 
      operator = sign[0];
      operate(num1, operator, num2);
      num = undefined;
      calculations.textContent = `${num1}${operator}${num2}=`;
    }
  } else if (event.key === 'Backspace') {
    temp = parseFloat(display.textContent.replace(/,/g, ''));
    if (temp == result) {
      return;
    } else if (calculations.textContent.includes(sign[0]) && numbers[1] != undefined) {
      return;
    } else {
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
    num = undefined;
    operator = undefined;
    result = undefined;
    display.textContent = 0;
    calculations.textContent = '';
    warningTab.textContent = '';

  } else {
    return;
  };
});

keyEqual.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  // for division by 0
  if (display.textContent == "No can't do") {
    numbers = [];
    integers = [];
    sign = [];
    display.textContent = 0;
    calculations.textContent = '';
    display.textContent += val;
    integers.push(display.textContent);
  } else if (numbers[0] == undefined && num1 == undefined) {
    return;
    // for the cases of repeatedly pressed Enter to perform the same action with the result each time
  } else if (temp == result && integers.length == 0) {
    num1 = result;
    //saving operator sign 
    operator = sign[0];
    operate(num1, operator, num2);
    calculations.textContent = `${num1}${operator}${num2}=`;
    // perform operations with the result value
  } else if (calculations.textContent.includes(result)) {
    num1 = result;
    // toNumbers(num);
    num2 = num;
    operator = sign[0];
    operate(num1, operator, num2);
    calculations.textContent = `${num1}${operator}${num2}=`;
  } else {
    // assigning first two elements of numbers array
    toNumbers(num);
    num1 = numbers[0];
    num2 = numbers[1];
    //saving operator sign 
    operator = sign[0];
    operate(num1, operator, num2);
    num = undefined;
    calculations.textContent = `${num1}${operator}${num2}=`;
  }
});

backspace.addEventListener('click', () => {
  temp = parseFloat(display.textContent.replace(/,/g, ''));
  if (temp == result) {
    return;
  } else if (calculations.textContent.includes(sign[0]) && numbers[1] != undefined) {
    return;
  } else {
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
  num = undefined;
  operator = undefined;
  result = undefined;
  display.textContent = 0;
  calculations.textContent = '';
  warningTab.textContent = '';
});

// pushing the last element of integers array into numbers array which provides num1 and num2 for operations
function toNumbers(num) {
  if (typeof num == 'number') {
    numbers.push(num);
  }
};

function operate(num1, operator, num2) {
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*") {
    result = num1 * num2;
  } else if (operator == "/") {
    // for division by 0
    if (num === 0) {
      display.textContent = "No can't do";
      numbers = [];
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
    if (calculations.textContent.includes(sign[0])) {
      displayValue = result;
      display.textContent = displayValue.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 15
      });
    } else {
      displayValue = result;
      display.textContent = displayValue.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 15
      });
      calculations.textContent = `${num1}${operator}${num2}=`;
    };
  } else {
    warningTab.textContent = 'Numbers are too big. Result may not be precise.';
    display.textContent = result;
    calculations.textContent = `${num1}${operator}${num2}=`;
  };
  integers = [];
  numbers = [];
};
