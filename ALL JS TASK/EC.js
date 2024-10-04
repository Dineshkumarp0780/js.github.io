

function getResult(){
  
  let a=100;
 a = a + a;

 console.log(a);
}
getResult();

/* creation phase
FunctionExecutionContext:{
  LexicalEnvironment:{
    EnvironmentRecord:{
    type:Declarative:
    a:undefined;
    }
    outer:GCE;
    thisBinding:getResult();
    }
  }
}
//* 
/*Execution phase
FunctionExecutionContext:{
  LexicalEnvironment:{
    EnvironmentRecord:{
    type:Declarative:
    a:100;
    }
    outer:GCE;
    thisBinding:getResult();
    }
  }

*/
