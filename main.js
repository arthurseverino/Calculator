let prevDisplay = document.querySelector('.previousDisplay')
prevDisplay.textContent = ""

let currentDisplay = document.querySelector('.currentDisplay')
currentDisplay.textContent = "0"

//these arrow functions should call functions for clearer, more concise code 

let clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    currentDisplay.textContent = "0"
    prevDisplay.textContent = ""
    operator = ''
    firstOperand = ''
    secondOperand = ''
    operandClicked = false;

});

let deletebtn = document.querySelector('.delete');
deletebtn.addEventListener('click', () => { 
    currentDisplay.textContent.slice(0,-1);
    })

let decimal = document.querySelector('#decimal')
decimal.addEventListener('click', () => {
    if(clearCurrentDisplay){
        currentDisplay.textContent = ''
    };
    if (currentDisplay.textContent === '') currentDisplay.textContent = '0';
    if(!(currentDisplay.textContent.includes('.'))){
        currentDisplay.textContent += "."
    }
     
});


let nums = document.querySelectorAll('.num');
nums.forEach((num) => {
    num.addEventListener('click', () => {
    if(clearCurrentDisplay == true){
        currentDisplay.textContent = ''
        clearCurrentDisplay = false;
    }

    if(currentDisplay.textContent == "0"){ // || operandClicked) {
        currentDisplay.textContent = num.value 
    }
    else{
        currentDisplay.textContent += num.value;
    }
    })
})

let clearCurrentDisplay = false;

let operator = "";
let firstOperand = ''
let operands = document.querySelectorAll('.operand')
let operandClicked = false;

// if I use two different operators, there's a bug 

operands.forEach((operand) => {
    operand.addEventListener('click', () => {
        operator = operand.textContent; 
        if(operandClicked){ 
            secondOperand = currentDisplay.textContent // 3
            console.log('second operand: ' + secondOperand)
            firstOperand = operate(firstOperand,operator,secondOperand).toString() // running sum :)
            console.log('first operand: ' + firstOperand)
            currentDisplay.textContent = firstOperand 
            prevDisplay.textContent = `${firstOperand} ${operator}`
            clearCurrentDisplay = true;
        }
        else{
            firstOperand = currentDisplay.textContent // 69
            prevDisplay.textContent = `${firstOperand} ${operator} `; // 69 x
            clearCurrentDisplay = true;
            operandClicked = true;
        }
    })
 })


let secondOperand = '';

equal = document.querySelector('.equal')
equal.addEventListener('click', () => {
    secondOperand = currentDisplay.textContent 
    prevDisplay.textContent = `${firstOperand} ${operator} ${secondOperand} = ` // 69 x 3 =
    currentDisplay.textContent = operate(firstOperand, operator, secondOperand); // 207
    operator = '';
})

// display snarky message 
// Use math.round

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const divide = (a,b) => a / b;
const multiply = (a,b) => a * b


function operate(firstOperand,operator,secondOperand){
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);

    if(operator == "."){
        return add(firstOperand,secondOperand)
    }
    if(operator == "-"){
        return subtract(firstOperand,secondOperand)
    }
    if(operator == "÷"){
        return divide(firstOperand,secondOperand)
    }
    if(operator == "x"){
        return multiply(firstOperand,secondOperand)
    }
}