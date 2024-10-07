// Basic function

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // Output: 20


//with call back

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function(num) {
    return num * num;
});

console.log(squared); // Output: [1, 4, 9, 16, 25]
