const prompt = require("prompt-sync")()

const userNum = prompt("Enter a number : ")

if(userNum%2==0){
    console.log(userNum + " is even number")
}
else if(userNum%2==1){
    console.log(userNum + " is odd number")
}
else{
    console.log("Invalid input")
}

