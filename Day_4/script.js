const array = [1,2,3,4,5];

const slicedindex = array.slice(1,5);
console.log(slicedindex);
console.log(array);


//NOTE REDUCE METHOD 
//NOTE used to reduce the array in to single value;

const reducedOutput = array.reduce((accumulator, el)=>{
    console.log(accumulator,el)
return accumulator + el    
},0)

console.log(reducedOutput)

//NOTE object methods

const data = {
    Name : 'Angha',
    Age : '20',
}

//Object Keys()

const objectkeys = Object.keys(data);
objectkeys.forEach((key)=>{
    console.log(`${key}: ${data[key]}`)
})

//Object Values

const objectvalues = Object.values(data);
console.log(objectvalues)

