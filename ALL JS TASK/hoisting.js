//hoisting
// JavaScript Hoisting refers to the 
// process whereby the interpreter appears
// to move the declaration of functions, 
// variables or classes to the top of their
// scope, prior to execution of the code...

console.log(findProduct(4,7)) 

function findProduct(a,b){
    return a*b
}


console.log(findProduct)
console.log(typeof findProduct)