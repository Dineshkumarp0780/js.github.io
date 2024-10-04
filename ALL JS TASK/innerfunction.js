function getfullname(firstname,lastname){

    function joint(name1,name2){
        const name= name1+' '+name2;
        return name;
    }

    const fullname = joint(firstname,lastname);
    return fullname;
}

let fullname = getfullname("sivakumar","Frontend sir")

console.log(fullname);