//Function Declarations
    
// 1. Without argument and without return type

function logGreeting() {
    console.log('Hello, world!');
}

logGreeting(); // Output: Hello, world!


// 2.With argument/parameters and without return type

function incrementCounter(counter) {
    counter.value += 1;
    console.log(`Counter updated: ${counter.value}`);
}

const myCounter = { value: 0 };
incrementCounter(myCounter); // Output: Counter updated: 1
incrementCounter(myCounter); // Output: Counter updated: 2


// 3.With return type and with arguments/parameters

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('DK')); // Output: Hello, DK!

// Without argument and with return type

function getRandomNumber() {
    return Math.floor(Math.random() * 100); // Returns a random number between 0 and 99
}

console.log(getRandomNumber()); // Output: A random number (e.g., 42)
