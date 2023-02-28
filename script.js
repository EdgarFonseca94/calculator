const add = function (a,b) {
    return +a + +b;
}
const subtract = function (a,b) {
    return +a - +b;
}
const multiply = function (a,b) {
    return +a * +b;
}
const divide = function (a,b) {
    if(b === 0) {
        return "undefined";
    }
    return +a / +b;
}
const operate = function (operator, a, b) {
    switch(operator) {
        case "+": 
            return add(a,b);
        case "-": 
            return subtract(a,b);
        case "*": 
            return multiply(a,b);
        case "/": 
            return divide(a,b);
    }
}
const populateDisplay = function(num) {
    // need to check that first value is not 0
    // this way theres no hanging 0 infront
    if(displayString === "0") {
        displayString = "" + num;
    } else {
        displayString = displayString + num;
    }
    display.textContent = displayString;
    return display.textContent;
}
const saveCurrentDisplayValue = function() {
    values.push(displayString);
}
const AC = function() {
    // clear all variables and clear display
    displayString = "";
    display.textContent = "0";
    operator = undefined;
    values = [];
}
const clearDisplay = function() {
    displayString = "";
}
const callOperate = function() {
    // only calls operate if theres 2 values in value array
    saveCurrentDisplayValue();
    if(values.length < 2) {
        return;
    } else {
        clearDisplay();
        operateResult = operate(operator, values[0], values[1]);
        populateDisplay(operateResult);
        values[0] = operateResult;

    }
}
// add event listener to buttons
const numBtns = document.querySelectorAll('button.num');
const operatorBtns = document.querySelectorAll('button.operator');

// Start by displaying 0 value
let display = document.querySelector('.calculator-display');
let displayString = "0";
display.textContent = displayString;

// initiate variable/array to hold values
let operator;
let values = [];

// each time number button clicked populate displayed
numBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        populateDisplay(e.target.innerText);
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        operator = e.target.value;
        saveCurrentDisplayValue();
        clearDisplay();
        console.log(values)
    });
});