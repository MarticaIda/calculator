# Calculator project based of The Odin Project requirements. 

### My final result: 

* It performs the basic four operations, and behaves as a Windows or Android calculator (mostly).

 * It takes the result of a previous operation to act as a first operand in the next operation.

* It continues calculations when the user presses operator button bypassing equal button.

* It can repeatedly perform an operation.

* It reverses negativity / positivity.

* It operates with floating point numbers.

* It handles large (or long) numbers as well as a regular windows calculator.

* It erases the last entered digit (backspace function).

* It clears the display and all the variable for a new operation.

* It warns the user about impossibility of dividing by 0, then a new operation can be performed.

* It has full keyboard support (except positivity/negativity of numbers, which Windows calculator doesn't have either for keyboard).

* It displays the result with place value commas.

# I could not figure one last thing:

How to display input with place value commas as in Windows calculator.


## The Odin Project requirements:

   Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators (add, subtract, multiply, divide).

    Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

    Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.

    There should also be a display for the calculator. 

    Add a “clear” button.

    Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

    Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

    You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.

    You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

## Gotchas

- [x] Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.

- [x] Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

- [x] You should round answers with long decimals so that they don’t overflow the screen.

- [x] Pressing = before entering all of the numbers or an operator could cause problems!

- [x] Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”.

- [x] Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

## Extra Credit

- [x] Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display).

- [x] Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.

- [x] Add a “backspace” button, so the user can undo if they click the wrong number.

- [x] Add keyboard support!
