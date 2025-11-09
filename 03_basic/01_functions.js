function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "s")

function addTwoNumbers(number1, number2){
     let result= number1 + number2
     return result
}

const result= addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Salty"));



function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a Username");
        return
    }
    else{
    return `${username} just logged in`
    }
}

// console.log(loginUserMessage());



//++++++++++++ Shopping Cart total Amount +++++++++++
function calculateCartPrice(...num1){ // "..." is use for both Rest and spread. In this case, it is Rest which converts all the numbers to an array.
    return num1
}
// console.log(calculateCartPrice(200, 400, 600));

const user={
    userName: "Sourav",
    price: 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and the price is ${anyObject.price}`);
    
}

handleObject(user)