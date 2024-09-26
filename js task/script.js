console.log("//variables....")
//==>var

var a= 5;
console.log(a);
//------------------------------//
var a= 10;
var a= 15;
console.log(a);
a=30;
console.log(a);
//-------------------------------//
//==>let
function let(){
    let a=40;
    console.log(a);
    a=35
    console.log(a);
}
let();

//----------------------//
//==>const

const d=95;
console.log(d);
//---------------------------------//

console.log("//----DATA TYPES.........")
function dtypes(){
    let a=18;
    console.log(typeof(a));

    //--------------------//
    let b="dhoni";
    console.log(typeof(b));
    //--------------------//
    let c= true;
    console.log(typeof(c));
    //--------------------//
    let i= null;
    console.log(i);
    
//--------------------//
let e;
console.log(typeof(e));

}

dtypes();

//--------------------------------------------------------------------------------------//
console.log("------- synchronous & asynchronous ------------------")
console.log("------- synchronous------------------")
function synchronous(){
    console.log("dhoni")
    console.log("sachin")
    console.log("virat")
    console.log("rohit")
    console.log("yuvaraj")
    console.log("pant")
    console.log("ABD")
    console.log("Smith")
}
synchronous();
 

 
console.log("------- Asynchronous ------------------")
function asyn(){
function Asynchronous(){
    console.log("dhoni")
    console.log("sachin")
    console.log("virat")
    function greet() {
        console.log("Hello Everyone!");
      }
      
      setTimeout(greet, 3000);

    console.log("dinesh")
    console.log("kumar")
    console.log("siva")
    console.log("kumar")
    console.log("besant")
}
  Asynchronous();
}
asyn()

console.log(vr);
  