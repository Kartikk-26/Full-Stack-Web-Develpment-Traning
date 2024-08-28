const prompt = require("prompt-sync")()


//Front Pattern 
const rows = parseInt(prompt("Enter the number of rows : "));

for(let i=1;i<=rows;i++){
    let row = "";
    for(j=1;j<=i;j++){
        row += "* ";
    }
    console.log(row);
}

//
// const prompt = require("prompt-sync")()

// const rows = parseInt(prompt("Enter the number of rows : "));

// for(let i=rows;i>=1;i--){
//     let row = "";
//     for(j=i;j>=1;j--){
//         row += "* ";
//     }
//     console.log(row);
// }
