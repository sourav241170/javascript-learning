// for each loop

const coding= ["js", "ruby", "python", "Javascript"]

// coding.forEach(function (val){
//     console.log(val);
    
// })


// coding.forEach((item) => {
//     console.log(item);
    
// })


const myCoding= [
    {
        language: "javascript",
        languageFile: "js"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "python",
        languageFile: "py"
    }
]

 myCoding.forEach((item) => {
    console.log(item.language);
    
 })