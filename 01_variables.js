const accountId = 144553 /*Cant be changed*/
let accountEmail = "salty@gmail.com"
var accountPassword = "12345" /*Prefer not to use var; because of issue in block scope and Functional scope*/
accountCity = "Jaipur" /*We can also write like this but its not safe*/
let accountState


//changing the values
accountEmail="sgsg@gmail.com"
accountPassword="875932"
accountCity="Kolkata"
accountState="West Bengal"


/*For showing single values
console.log(accountId);
console.log(accountEmail);*/


//For showing multiple values in a table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

