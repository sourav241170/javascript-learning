const mySym= Symbol ("key1")

const JsUser= {
    name: "Sourav",
    age: 24,
    mySym: "mykey1",
    [mySym]: "mykey1", //correct way to use Symbol syntax
    location: "Kolkata",
    email: "souravg@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);


JsUser.email= "souravg@hotmail.com" //change values
// Object.freeze(JsUser) // Lock the object
JsUser.email= "souravghosh@hotmail.com"

// console.log(JsUser);


//++++++++ Functions +++++++++

JsUser.greeting= function(){
    console.log("Hello User!");
}
JsUser.greetingTwo= function(){
    console.log(`Hello, ${this.name}`);
    console.log(`Your Email ID is: ${this.email}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
