// Function Expressions

var bookStore = function() {
    console.log("monday test");
}

bookStore();

let cinema = function(actor) {
    console.log(`BEST MOVIE ${actor}}!`);
}

const multiplyFE = function(numberOne,numberTwo) {
    return numberOne*numberTwo;
}

actor('Ajith');
multiplyFE(5,6);

// no parameter 

const sayGoodbye = function() {
    return 'Goodbye!';
};

console.log(sayGoodbye()); // Output: Goodbye!
