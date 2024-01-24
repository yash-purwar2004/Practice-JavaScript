// Immediately Invoked Function Expression (IIFE)
// (function age(){
//     console.log(`DB Connected`);
// })();

// In IIFE function is invoked, but we use semicolon at the end of function to stop execution
// () First parenthesis is used for function definition
// () second parenthesis is used for function execution

let yash = 24;

(function aurCode(){
    // named IIFE
    console.log(`DB Connected Two`);
})();

// ( (name)=>{
//     console.log(`DB Connected Three ${name}`);
// })("Yash Purwar");