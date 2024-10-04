const person1 ={
    name:"Dinesh",
    gender:"male",
}

const person2 ={
    name:"Dineshkumar",
    gender:23,
}

function printName(gender){     //name is a parameter here..
    console.log(gender);
}

printName(person1.gender);     //value is arugment.
printName(person2.gender);     // receiver is parameter.

