//if else statements

// const temperature= 48
// if(temperature<50){
//     console.log("Temperatue is Less than 50");
// } else{
//     console.log("Temperature is Greater than 50");
// }

// !=  --> Not equals
// ==  --> Equals
// === --> Strict equals


// Checking multiple instances

// const balance= 5000
// if(balance<500){
//     console.log("Balance is less than 500");
// }else if(balance<750){
//     console.log("Balance is less than 750");
// }else if(balance<900){
//     console.log("Balance is less than 900");
// }else{
//     console.log("Balance is not less than 5000");
// }


// Checking multiple conditions

const userLoggedIn= true
const debitCard= true
const googleLogin= false
const emailLogin= true

if(userLoggedIn && debitCard){  // "&&" is used to check both are correct
    console.log("Allowed to purchase Item");
}

if(googleLogin || emailLogin){   // "||" is used to check either this or that
    if(googleLogin){
        console.log("Logged in with Google");
    }else{
        console.log("Logged in with Email");
    }
}
    
