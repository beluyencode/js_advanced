// Định nghĩa một "class" (hàm tạo) Person
// private 
class Person {
    // #name (private);
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Tạo một instance (thể hiện) của Person
var person1 = new Person('John', 30);
var person2 = new Person('Alice', 25);

console.log(person1.name); // Output: Person { name: 'John', age: 30 }
console.log(person2); // Output: Person { name: 'Alice', age: 25 }
