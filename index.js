// console.log("Yash Purwar");

const accountId = 251198
let accountMail = "yashpurwar251198@gmail.com"
var accountName = "Yash"

// accountId = 2; // not allowed

/*
prefer not to use "var" because of issue in block scope and functional scope
*/



accountMail = "nayan251198@gmail.com"
accountName = "Nayan"
// console.log(accountId);
// console.table([accountId, accountMail, accountName])
// console.log(typeof null);


let score = "33";
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = 30
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33;
let converInString = String(someNumber);
// console.log(converInString);
// console.log(typeof converInString);



//  ********************** Operations *************************
let value = 3;
let negValue = -value;
// console.log(negValue);


let str1 = "Hello"
let str2 = " hitesh"
// console.log(str1 + str2);
// console.log(1 + 1 + "2")
// console.log("2"<1);


// declaring a symbol datatype
const id = Symbol("123");
const anotherId  = Symbol("123");
// console.log(id === anotherId);


// Reference type variable
// Array, Objects, functions

const heros = ["yash", "suyash", "nitish", "prakhar"];
const myObj = {
    name: "yash",
    age: "20",
}

const myFunc = function(){
    // console.log("hello world");
}

// console.log(typeof myFunc) // object function
// console.log(typeof anotherId);



// new way for declaring a string
const gameName = new String('yashdotcom');
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));


const num = 400;
// console.log(num);
// console.log(typeof num);

const nums = new Number(400);
// console.log(nums);
// console.log(typeof nums);

// console.log(nums.toString());
// console.log(typeof nums);


const hundred = 100000000000000;
// console.log(hundred.toLocaleString('en-IN'));




// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // only changes the negative value
// console.log(Math.round(3.4));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.4));
// console.log(Math.min(2,4,5,3,63,9));
// console.log(Math.max(2,4,5,3,63,9));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10)+1);

let min = 10;
let max = 20;

// console.log(Math.floor(Math.random()*(max - min + 1)) + min);

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let mybirthDate = new Date("2004-07-04"); // YY-MM-DD Format
// console.log(mybirthDate.toLocaleString());



let timeStamps = Date.now();
// console.log(timeStamps);
// console.log(myCreatedDate.getTime());

// convert the millisecond value in the seconds

// console.log(Math.floor(Date.now()/1000))

let favDate = myCreatedDate.toLocaleString('default', {
    weekday: "long"
})


console.log(favDate)