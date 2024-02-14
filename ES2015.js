function* idGenerator() {
    let id = 1;
    let i = 0;
    while (true) {
        yield id += 1;
        yield i -= 1;
        if (id === 4) {
            break;
        }
    }
}

const gen = idGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// function runGenerator(g) {
//     const it = g(), go = result => {
//         if (result.done) return result.value;
//         return Promise.resolve(result.value).then(v => go(it.next(v)), err => go(it.throw(err)));
//     };
//     return go(it.next());
// }

// runGenerator(function* () {
//     const response = yield fetch('https://api.github.com/users/github');
//     const user = yield response.json();
//     console.log(user.name);  // logs: "GitHub"
// }).catch(err => console.error(err));



const person = {
    name: 'John',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    sayHelloArrow: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}
person.sayHello(); // Output: "Hello, my name is John"
person.sayHelloArrow(); // Output: "Hello, my name is undefined"