const score= 400
console.log(score);


const balance= new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber= 128.87589
console.log(otherNumber.toPrecision(3));


const hundreds= 100000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++ Maths +++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));

// console.log(Math.min(2, 3, 8, 7, 9, 4));
// console.log(Math.max(2, 3, 8, 7, 9, 4));

console.log(Math.random()); //value between 0 and 1
console.log(Math.random()*10); //Values between 1 and 10 but could be 0
console.log((Math.random()*10)+1); //Values between 1 and 0
console.log(Math.floor(Math.random()*10)+1); //Round off to minimum value

const min= 10
const max= 20

//Get a number between 10 and 20.
console.log(Math.floor(Math.random()*(max-min+1))+min);



