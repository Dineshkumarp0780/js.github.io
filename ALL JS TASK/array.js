const person1 ={
    name:"Dinesh",
    gender:"male",
}

const person2 ={
    name:"Dineshkumar",
    gender:23,
}

function printName(...arg){     
    console.log(arg);
}

printName(person1.gender, person2.gender,"dk");     
     

