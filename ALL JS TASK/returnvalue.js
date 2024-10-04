function printPerson(firstname,lastname){
    const name =firstname+' '+lastname;   //return is used to stop the execution phase.
    console.log(name)
    return name; 

}

let fullname = printPerson('DineshKumar','P')

console.log(fullname)

