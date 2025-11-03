const name= "Sourav"
const repoCount= 50

//console.log(name+ repoCount+ " value"); OLD Method

console.log(`Hello, My name is ${name} and my Repo Count is ${repoCount}`); // Always try to use this

const gameName= String('sourav.g')
console.log(gameName[0]);
console.log(gameName[2]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('v'));

const newString= gameName.substring(0,5)
console.log(newString);

const anotherString= gameName.slice(-8, 2)
console.log(anotherString);


const removeExtra= "    SouravG    "
console.log(removeExtra);
console.log(removeExtra.trim());


const url= "https://souravdigital.com/blog/atlas%20vs%20comet"
console.log(url.replace(/%20/g, '-'));


