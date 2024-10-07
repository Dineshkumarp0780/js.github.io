// Takes another function as argument
function applyFunction(fn, value) {
    return fn(value);
}

const square = function(x) {
    return x * x;
};

console.log(applyFunction(square, 5)); // Output: 25


// Return a function (Closure)
function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


// Takes another function as argument and returns functions

function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const add1 = function(x) { return x + 1; };
const multiply2 = function(x) { return x * 2; };

const addThenMultiply = compose(multiply2, add1);

console.log(addThenMultiply(3)); // Output: 8 (3 + 1 = 4, then 4 * 2 = 8)
