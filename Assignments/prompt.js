const prompt = require("prompt-sync")()




const userNum = prompt("Enter number:- ")

if(userNum>0){
    console.log("Positive number")
}
else if(userNum<0){
    console.log("Negative number")
}
else{
    console.log("Zero")
}