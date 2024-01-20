function sayMyName(){
    console.log("Y")
    console.log("A")
    console.log("S")
    console.log("H")
}

// sayMyName();


// function addNumber(number1, number2){
//     console.log(number1 + number2);
// }

// addNumber(20,30);
// let result = addNumber(4,5);
// console.log(result) // because this will not return any statement

function addNumber(number1, number2){
    // return number1 + number2
    let result = number1 + number2;
    return result; // no code will be executed after return statement
}

let result = addNumber(20,30);
// console.log("Result: ", result);

function loginUserName(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

let store = loginUserName("Yash"); // when we not pass any value the result is undefined
// console.log(store);


// when you don't know, how many parameters will you take
function calculatePrice(...num){ // this rest method will be used, when you make a cart
    return num;
}

// console.log(calculatePrice(100, 200, 300, 400)); // this will give an array, so by using a loop we will add the prices

const user = {
    username: "Hitesh",
    price: 199
}

function handleObject(anyObject){
    // console.log(`My name is ${anyObject.username} and my aukad is ${anyObject.price}`)
}

handleObject(user);
handleObject({
    username: "Sam",
    price: 199
})


const newArray = [200, 300, 400, 500];
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(newArray))


// when you create a function inside a function

function one(){  // in nested function child function easily access the variable of parent function
    const username  = "yash"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two();
}

one();





// ++++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++
function addone(num){
    return num+1;
}

addone(5);


// another method

const addtwo = function(num){
    return num + 2;
}

addtwo(7);
