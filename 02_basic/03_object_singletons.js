//const tinderUser= new Object() //Singleton Object
const tinderUser= {} //Non-Singleton Object


tinderUser.id= "123abc"
tinderUser.name= "Samantha"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

//Multiple objects inside an Object
const regularUser= {
    email: "samantha@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Samantha",
            lastname: "Prabhu"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1= {1: "A", 2: "B"}
const obj2= {3: "C", 4: "D"}

// const obj3= Object.assign({}, obj1, obj2) //blank object is added so that all the merged objects went to the blank object and not the obj1

const obj3= {...obj1, ...obj2} //mostly use this as its simple
// console.log(obj3);


const users= [
    {
        id: 1,
        email: "sg@gmail.com"
    },
    {
        id: 1,
        email: "sg@gmail.com"
    },
    {
        id: 1,
        email: "sg@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


//+++++++ Destructuring ++++++++++

const course={
    courseName: "Javascript for Beginners",
    coursePrice: "999",
    courseInstructor: "James"
}

// console.log(course.courseInstructor); //Traditional

const {courseInstructor}= course
console.log(courseInstructor);

const {courseInstructor: instructor}= course //destructure
console.log(instructor);

