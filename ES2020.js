import('./lib.js')
    .then(module => {
        console.log(module);
    }) //returns 11
    .catch(error => console.log(error));



//Promise.allSettled
Promise.allSettled([
    Promise.reject('✗'),
    Promise.reject('✗'),
    Promise.resolve('✓'),
    Promise.reject('✗'),
]).then(function (value) {
    console.log(`You win at life`, value)
}).catch(function (value) {
    console.log(`You lose at life`, value)
})