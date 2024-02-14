var a = {
    name: 'a',
}

var b = a;
b.name = 'b';

console.log(a.name); // Output: "b"