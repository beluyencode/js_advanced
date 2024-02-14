var a = {
    name: 'a',
}

var b = a;
b.name = 'b';

console.log(a.name); // Output: "b"

var arr = [{ name: 'a' }, { name: 'b' }];

var arr2 = [...arr];
arr2[0].name = 'c';


console.log(arr[0].name); // Output: "c"