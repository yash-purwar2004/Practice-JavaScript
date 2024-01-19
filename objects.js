// singleton
// object.create


// object literals

const mySym = Symbol("Key1");

// non singleton object
const JsUser = {
    name: "Yash",
    "full name": "Yash Purwar",
    [mySym]: "chaabi kaha hai", // This syntax is used for symbol, when we use symbol inside object
    age: 20,
    location: "Localhost5173",
    email: "yashpurwar.251198@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // this one is good, when we use object in production
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser["full name"] = "Yash Gupta"
// console.log(JsUser["full name"])

// Object.freeze(JsUser); // No changes will be executed after this line

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello, JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); // this keyword is used to access the properties of same object
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// singleton object
const tinderUser = new Object();

tinderUser.id = "abc123"
tinderUser.name = "Yash"
tinderUser.age = "20"

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nayan",
            lastname: "purwar"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2) // Combine all the objects obj1, obj2, we use parenthesis, because by using this we combine more than two objects, because parenthesis acts as a target and all the values to left side of parenthesis acts as a source
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "yash@dotcom"
    },
    {
        id: 1,
        email: "yash@dotcom"
    },
    {
        id: 1,
        email: "yash@dotcom"
    }
]

user[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser)) // this method will used when we work with database, so we implement loop on these keys to find the perfect result
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // In this method, each key value pair of abject, converted into an array
// console.log(tinderUser.hasOwnProperty("age")) // this method is used to check, whether the properties exist or not


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseinstructor: "Nayan",
}
// course.courseinstructor // This method is good but when we want to write clear and concise code, we use another method which is given below

const {courseinstructor} = course; // also known as object destructuring
console.log(courseinstructor);