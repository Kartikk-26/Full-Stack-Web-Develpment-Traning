const { randomInt } = require('crypto');


const otp = randomInt(100000, 1000000);  //6 digit

console.log(otp);