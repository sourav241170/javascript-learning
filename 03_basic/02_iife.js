// Immediately Invoked Function Expressions (IIFE)
// This is used to get rid of the pollution from the global scope. 


// function database(){
//     console.log(`DB Connected`);
// }
// database()

//OR

(function database(){
    console.log(`DB Connected`);
})();