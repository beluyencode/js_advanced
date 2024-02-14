await Promise.resolve(console.log("🎉"))

class Anonystick {
    name = 'Tips javascript';
    #age = 37;
    static isBlog = true;
}
new Anonystick().age; // undefined
new Anonystick().name; // 'Tips javascript'
Anonystick.isBlog // true;