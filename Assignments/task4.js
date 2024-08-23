const prompt = require("prompt-sync")()

const operation = prompt('Enter operation (+, -, *, /): ');
const num1 = parseInt(prompt("Enter the First Number : "))
const num2 = parseInt(prompt("Enter the Second Number : "))
const num3 = parseInt(prompt("Enter the Third Number : "))

if(operation=='+'){
    console.log(num1 + num2 + num3)
}
else if(operation=='-'){
    console.log(num1 - num2 - num3)
}
else if(operation=='*'){
    console.log(num1 * num2 * num3)
}
else if(operation=='/'){
    console.log(num1 / num2 / num3)
}
else{
    console.log("Invalid Entry")
}