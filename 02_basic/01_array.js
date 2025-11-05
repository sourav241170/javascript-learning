//Arrays

const myArr= [0, 1, 2, 3, 4, 5, 6, 7]
const myHeroes= ["Ironman", "Spiderman", "Thor", "Loki"]

const myArr2= new Array("Ironman", "Spiderman", "Thor", "Loki")

// console.log(myArr[2]);
// console.log(myHeroes[2]);
// console.log(myArr2[1]);

// Array Methods

// myArr.push(6, 8)
// myArr.pop()

myArr.unshift(9) //add an element at the start of an array
// console.log(myArr);

myArr.shift() //remove an element from the start of an array
// console.log(myArr);

const newArray= myArr.join() //Changes the type
// console.log(newArray);
// console.log(typeof newArray);

//Slice and Splice
//Slice makes a copy of the mentioned range from the original Array without changing the original Array
//Splice deletes the range from the original Array


// console.log("A", myArr);

// const myNew1= myArr.slice(1,5)
// console.log(myArr);
// console.log("Slice", myNew1);

// const myNew2= myArr.splice(1,5)
// console.log(myArr);
// console.log("Splice", myNew2);



const marvelHeroes= ["Ironman", "Spiderman", "Thor", "Loki"]
const DCHeroes= ["Superman", "Flash", "Batman"]

// marvelHeroes.push(DCHeroes) //Pushes the array DCHeroes as a single element
// console.log(marvelHeroes);

// const Heroes= marvelHeroes.concat(DCHeroes) //Merges the arrays
// console.log(Heroes);

const allHeroes= [...marvelHeroes, ...DCHeroes] // Mostly use this as this has no limitation
// console.log(allHeroes);


const newArray2= [1, 2, [3, 4, [5, 6]]]
const flatArray= newArray2.flat(Infinity) //Flat an array with multiple depths
console.log(flatArray);

console.log(Array.from("Sourav")); //Converts to an Array

let score1= 100
let score2= 200
let score3= 300
console.log(Array.of(score1, score2, score3));
