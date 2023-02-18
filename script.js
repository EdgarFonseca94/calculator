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
    switch(operator.toString) {
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
    displayValue.textContent = displayValue.textContent + num;
}

// add event listener to buttons
const numBtns = document.querySelectorAll('button.num');
const operatorBtns = document.querySelectorAll('button.operator');

let displayValue = document.querySelector('.calculator-display');
let operator;
let value1;

numBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if(operator === undefined) {
            populateDisplay(e.target.innerText);
        } else {
            displayValue.textContent = '';
            populateDisplay(e.target.innerText);
        }
    });
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        operator = e.target.innerText;
        value1 = displayValue.textContent;
        console.log(operator);
        console.log(value1);
    });
});
