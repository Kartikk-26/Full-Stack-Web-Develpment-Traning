const prompt = require("prompt-sync")()

const Array = prompt("Enter the elements seprated by comma(,) : ");

let arr = Array.split(',');

let uppercaseArr = arr.map(str=> str.trim().toUpperCase());

console.log(uppercaseArr)