// const myNumbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNumbers.map((nums)=> nums+ 10)
// console.log(newNums);


//------------ Reduce ----------------

const myNums= [1, 2, 3]

// const myTotal= myNums.reduce(function(accumulator, currentValue){
//     console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`); // Just to view the Accoumulator and Current Value
//     return accumulator+currentValue
// }, 0)

// The same reduce function writen in arrow form-->
const myTotal= myNums.reduce( (accumulator, currentValue) => accumulator+currentValue, 0 )

// console.log(myTotal);


const shoppingCart=[
    {
        itemName: "JS-Course",
        price: 899
    },
    {
        itemName: "py-Course",
        price: 799
    },
    {
        itemName: "Web Dev",
        price: 1099
    },
    {
        itemName: "App Dev",
        price: 5099
    }
]

const totalCart= shoppingCart.reduce ( (accumulator, item) => accumulator+item.price, 0 );
console.log(`Total Cart Value is ${totalCart}`);


