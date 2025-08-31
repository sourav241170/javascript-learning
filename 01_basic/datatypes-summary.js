/*
Return typeOf variables in JavaScript:

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       
       
*/

/******************* Stack and Heap Memory **********************/

// Stack memory is used in all Primitive dataTypes (Doesn't change the original value)
// Heap memory is used in all Non- primitive dataTypes (changes the original value)


//++++ STACK Example ++++++
// let myName= "Sourav"
// let inGameName= myName

// inGameName= "Salty"

// console.log(inGameName);
// console.log(myName);


//+++++ Heap Example +++++
let userOne= {
       email: "abc@gmail.com",
       name: "Salty",
       upi: "abc@oksbi"
}

let userTwo= userOne

userTwo.email= "salty@gmail.com"

console.log(userTwo);
console.log(userOne);

