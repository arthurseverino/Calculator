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

    if(currentDisplay.textContent == "0"){ 
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
console.log(operandClicked);


// if I use two different operators, there's a bug 
// if you just click an operand repeatedly, without pressing anything else it shouldn't be calcuclating 
// why doesn't my addition work ever 
// also delete doesn't work lol

operands.forEach((operand) => {
    operand.addEventListener('click', () => {
        operator = operand.textContent; 
        console.log('operator just clicked: ' + operator) // is our operator updating correctly everytime its clicked? 
        if(operandClicked){ 
            secondOperand = currentDisplay.textContent // 3
            firstOperand = operate(firstOperand,operator,secondOperand).toString() // running sum :)
            console.log('first operand: ' + firstOperand)
            console.log('second operand: ' + secondOperand)
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

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const divide = (a,b) => {
    if(b === 0){
        alert('You cant divide by 0!');
        return 0;
    }
    return a / b;
};
const multiply = (a,b) => a * b;


function operate(firstOperand,operator,secondOperand){
    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);

    if(operator == "."){
        return Math.round(add(firstOperand,secondOperand))
    }
    if(operator == "-"){
        return Math.round(subtract(firstOperand,secondOperand))
    }
    if(operator == "÷"){
        return Math.round(divide(firstOperand,secondOperand))
    }
    if(operator == "x"){
        return Math.round(multiply(firstOperand,secondOperand))
    }
}