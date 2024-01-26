const myArray = [1,2,3,4,5];
const yourArray = ["Marvel", "Shaktiman"];
const arr2 = new Array(1,2,3,4,5);

// console.log(typeof myArray);
// console.log(myArray[3]);


// array methods
myArray.push(6);
myArray.push(7);
myArray.pop(); // remove last value

myArray.unshift(0) // add the value at the firat index of an array
myArray.shift() // removes the value at the first index of an array
// console.log(myArray);

// console.log(myArray.includes(9)); // datatype of this output is boolean
// console.log(myArray.indexOf(5)); // datatype of this output is number


const newArr = myArray.join(); // bind the array and converts it into a string
// console.log(myArray); // return a object
// console.log(newArr); // returns a string 


// slice, splice

// console.log("A", myArray);
const myn1 = myArray.slice(1,3);

// console.log(myn1);
// console.log("B", myArray);


const myn2 = myArray.splice(1,3); // splice removes the given portion in an original array, and also change in the original array
// console.log("C", myArray);
// console.log(myn2);


const marvel_heros = ["thor", "spideman", "ironman"];
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros[3][1]);

let supArr = marvel_heros.concat(dc_heros);
// console.log(supArr);

const all_new_heroes = [...marvel_heros, ...dc_heros]; // in this method we can join two or more arrays
// console.log(all_new_heroes);

const anotherArray = [1,2,3,[4,5,6],7,8,9,[10,11,[12,13,14]]];
const real_Another_Array = anotherArray.flat(2); // Returns a new array with all sub-array 
//elements concatenated into it recursively up to the specified depth.
// console.log(real_Another_Array);

console.log(Array.from("Yash_Purwar"))// convert given value in an array
console.log(Array.from({name:"yash"})); // interesting case for interview purpose, you should tell them which type of array you want either keys or value.


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));