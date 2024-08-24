const prompt = require("prompt-sync")();

console.log("Choose Your Job Type Given Below -> \n1 : Government Job\n2 : Business\n3 : Private Job");

const operation = parseFloat(prompt('Enter Your Choice : '));

if(operation=='1'){
    const salary = parseFloat(prompt('Enter Your Salary : '));
    if(salary>='50000'){
        console.log("You are eligible for a loan");
    }
    else{
        console.log("You are not eligible for a loan");
    }
}

else if(operation=='2'){
    const turnover = parseFloat(prompt('Enter Your yearly turnover : '));
    if(salary>='2000000'){
        console.log("You are eligible for a loan");
    }
    else{
        console.log("You are not eligible for a loan");
    }
}

else if(operation=='3'){
    console.log("You are not eligible for a loan")
}

else{
    console.log("Invalid Choice");
}