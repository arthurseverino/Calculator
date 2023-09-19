let output = document.querySelector('.display')
output.textContent = "loloffgl"

let clear = document.querySelector('.clear')

let clearDisplay = function(){
    output.textContent = "0"
}
clear.addEventListener('click', clearDisplay);


let nums = document.querySelectorAll('.num')

nums.forEach((num) => {
    num.addEventListener('click', () => { 
    output.textContent += num.value;
    })
})



