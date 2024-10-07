 let a =11;

 let oddOrEven =(a) => a%2==0? "Even" : "Odd" ;

 console.log(oddOrEven(3));

//call back...

function operation(op, a, b){
   return op(a,b); 
}

let add =(a,b) => a+b;
let sub =(a,b) => a-b;

console.log(operation(sub,10,7));