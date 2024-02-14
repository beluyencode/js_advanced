//Nullish Coalescing Operator (??) - ES2021
let check = null
console.log(check ?? 50) //50
console.log(check) //NULL
let a = 10
let c = 30
console.log(a ?? b ?? c ?? d) //10

//Logical Nullish Assignment (??=) - ES2021
let test = null
console.log(test &&= 50) //50
console.log(test) //50

// ||= and &&= - ES2021
// a ||= b;
// a = a || b;
// a &&= b;
// a = a && b;