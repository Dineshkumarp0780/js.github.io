const person1 ={
    name:"Dinesh",
    gender:"male",
}

const person2 ={
    name:"Dineshkumar",
    gender:23,
}

function printPerson(gender,name){     //name is a parameter here..
    console.log(gender);
    console.log(name);
}

printPerson(person1.gender,person1.name);     //value is arugment (ex:person1.name,person2....).
printPerson(person2.gender,person2.name);     // receiver is parameter.
