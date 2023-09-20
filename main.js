let output = document.querySelector('.display')
output.textContent = "loloffgl"

let clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    output.textContent = "0"
});

let nums = document.querySelectorAll('.num');
nums.forEach((num) => {
    num.addEventListener('click', () => {
    if(output.textContent == "0") {
        output.textContent = num.value
    }
    else{
        output.textContent += num.value;
    }
    })
})

let decimal = document.querySelector('#decimal')
decimal.addEventListener('click', () => {
   // if("." in output.textContent == true){}
        output.textContent += "."
});

const add = function (a, b) {
    return a + b;
  };
  
const subtract = function (a, b) {
    return a - b;
  };
const divide = (a,b) => {a / b}
const multiply = (a,b) => {a * b} 



let num1 = parseInt(output.textContent)

let operator = "";

let operands = document.querySelectorAll('.operand')
operands.forEach((operand) => {
    operands.addEventListener('click', () =>{operator = operand.id})
 })

let num2 = parseInt(output.textContent)
        //everything from operand index to equal sign index

//we're passing in 2 integers, 1 string
//and returning the string "result" for display
function operate(num1,operator,num2){
    let result = ""
    if(operator == "add"){
        result = add(num1,num2).toString()
    }
    if(operator == "subtract"){
        result = subtract(num1,num2).toString()
    }
    if(operator == "÷"){
        result = divide(num1,num2).toString()
    }
    if(operator == "multiply"){
        result = multiply(num1,num2).toString()
    }
    output.textContent = result;
}

//WHENEVER EQUAL IS CLICKED, call operate
equal = document.querySelector('.equal')
equal.addEventListener('click', operate(num1, operator, num2))

// once click on decimal 

//i should have another variable for the display value besides output i think 




