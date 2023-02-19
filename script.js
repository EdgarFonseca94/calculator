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
    return +a * +b;
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
    displayString = displayString + num;
    display.textContent = displayString;
    return display.textContent;
}
const saveCurrentDisplayValue = function() {
    values.push(displayString);
}
const callOperate = function() {
    // only calls operate if theres 2 values in value array
    saveCurrentDisplayValue();
    if(values.length < 2) {
        return;
    } else {
        console.log(operate(operator, values[0], values[1]));
    }
}
// add event listener to buttons
const numBtns = document.querySelectorAll('button.num');
const operatorBtns = document.querySelectorAll('button.operator');

let display = document.querySelector('.calculator-display');
let displayString = '';
let operator;
const values = [];

numBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        populateDisplay(e.target.innerText);
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        operator = e.target.value;
        saveCurrentDisplayValue();
        displayString = '';
        console.log(values)
    });
});