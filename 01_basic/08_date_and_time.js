let myDate= new Date()

// console.log(typeof myDate);


// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate= new Date(2025, 0, 15)
// console.log(myCreatedDate.toDateString());

let myCreatedDate= new Date("01-05-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());

//console.log(Date.now()); //For displaying time in MilliSeconds
//console.log(Date.now()/1000); //For displaying time in Seconds
//console.log(Math.floor(Date.now()/1000)); //For displaying time in Seconds without decimals


let newDate= new Date()
console.log(
    newDate.toLocaleString('default',{
    weekday: "long"
})
);
