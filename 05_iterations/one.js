// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop: ${j} and Inner Loop 2: ${i}`);
        // console.log(i + "*" + j+ '='+ i*j);
        
    }
}


let myArray= ["Flash", "Superman", "Batman", "Wonderwoman"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index==5) {
        console.log(`Detected 5`);
        // break
        continue
    }
    console.log(`Value of i is ${index}`);
    
    
}