//closures.. is a features where an inner function has access to the outer function's variables even after the outer function has executed..

function outer(name){
    let outerVariable = 'score double century'
    function inner(){
        let innerVariable = 'Duckout'
        console.log('inner variable',innerVariable)
        console.log('outer variable',outerVariable)
        console.log('hello',name)
    }
    return inner
}   

let call1 = outer('DineshKumar P')
call1()

let call2 = outer('Cricket Player')
call2()
call1()