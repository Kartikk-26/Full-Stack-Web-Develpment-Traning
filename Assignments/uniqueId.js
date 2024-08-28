//Generate a unique id which has characters A to Z uppercase and a to z lowercase and I want to enter numbers from 1 to 10

function generateUniqueID(length){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = "";

    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random()*characters.length);
        uniqueId += characters[randomIndex];
    }
    
    return uniqueId;
}

const idLength = 12;
const uniqueId = generateUniqueID(idLength);
console.log(uniqueId);