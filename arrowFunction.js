const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to this website`);
    }
}

// user.welcomeMessage();
// user.username = "Sam" // we don not give hardcoded value in this case, we change the current context
// user.welcomeMessage();


// "This" keyword only works with object and not with function
function chai(){
    let username = "Hitesh"
    console.log(this.username);
}

// chai();


// Arrow Function

const chaii =()=>{
    let username = "Hitesh"
    console.log(this)
}

// chaii();


// pure arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1,num2)=> num1 + num2 // implicit function, if we not use parenthesis  then we don't use return keyword
// this technique will be used in react

const addTwo = (num1, num2)=> ({username: "hitesh"}) // if you want to give object as a parameter, you need to use parenthesis
// console.log(addTwo(3,4))
