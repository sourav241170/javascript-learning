// console.log(2>5);
// console.log(5>=5);
// console.log(2<5);
// console.log(2==5);
// console.log(2!=5);


/*--------AVOID THESE TYPES OF CONVERSIONS (using null/undefined)--------*/

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0); //true because equal(==) and comparisons(<, >, >=) works differentl. Comparisons converts null to number treating it as 0; Same for undefined.


console.log("2"===2); //Triple equals is used for strict check; Its doesn't auto converts the string, instead checks the datatypes too.


