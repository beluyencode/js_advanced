// 1. First-Class Functions
const greet = function (name) {
    return `Xin chào, ${name}!`;
};
console.log(greet('John')); // Xin chào, John!

// 2. Pure Functions
function add(a, b) {
    return a + b;
}
console.log(add(3, 5)); // 8

// 3. Immutable Data
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 4. Higher-Order Functions
function operate(func, a, b) {
    return func(a, b);
}
function add(a, b) {
    return a + b;
}
console.log(operate(add, 3, 4)); // 7

// 5. Function Composition
function addOne(num) {
    return num + 1;
}
function double(num) {
    return num * 2;
}
const compose = (func1, func2) => data => func1(func2(data));
const addOneAndDouble = compose(double, addOne);
console.log(addOneAndDouble(5)); // 12 (5 + 1 = 6, 6 * 2 = 12)

// 6. Recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// 7. Closures
function createCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
