const person1 ={
    name:"Dinesh",
    gender:"male",
}

const person2 ={
    name:"Dineshkumar",
    gender:23,
}

function printPerson(person={ name:"dineshajith",gender:23}){     // how to set the default value instead of undefined....
    console.log(person.gender);
    console.log(person.name);
}

printPerson(person1);     // parameter empty is undefined...

