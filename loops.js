// for of loop
// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5];
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    //console.log(greet);
}



// Map
const map = new Map();
map.set("IN", "India");
map.set("IN", "India");
map.set("PAK", "Pakistan");
map.set("FR", "France");

// console.log(map);
// Destructuring of Array to obtain a value
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}



// Objects
const myObj = {
    "game1" : "NFS",
    "game2" : "Spiderman"
};

// Object are nor iterable in this method, we use another method to do this

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }




// for in loop

const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby on Rails",
    swift : "Swift by Apple"
};

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}


const array = [1,2,3,4,5]
for (const key in array) {
    // console.log(array[key]);
}




// For Each loop

const coding = ["Python", "Java", "C++", "Ruby"];

coding.forEach((val, index, arr) => {
    // console.log(val, index, arr);
})


const myCoding = [
    {
        languageName: "Java",
        languageFileName: "java"
    },

    {
        languageName: "Javascript",
        languageFileName: "js"
    },

    {
        languageName: "C++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((val)=>{
    // console.log(val.languageFileName);
})

// Note:- For Each loop does not return any value


//Filter

const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter( (val)=>{
    return val>5;
});

// console.log(newNums)
// filter is used to return the value, because forEach loop do not return any value


// Map

const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = myNumbers.map( (val)=>{
    return val+10;
})

// console.log(newNumbers)

// Note:- Chaining is when you used two, three methods simultaneously


// Reduce

const arrays = [1,2,3,4,5];
const intialVal = 0;

const myTotal = arrays.reduce((acc, currval)=>{
    return acc + currval;
}, 0); // Here 0 is initial value
console.log(myTotal);

// This method is used when we make add to cart section

const courses = [
    {
        itemName : "C++ course",
        price : 500
    },

    {
        itemName : "C course",
        price : 500
    },

    {
        itemName : "Java course",
        price : 1500
    },

    {
        itemName : "Ruby course",
        price : 5000
    }
];

const Total = courses.reduce((acc, item)=>{
    return acc + item.price;
}, 0); // Here 0 is initial value
console.log(Total);