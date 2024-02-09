// var Singleton = (function () {
//     var instance; // Biến private chứa thể hiện duy nhất của Singleton

//     function createInstance() {
//         // Triển khai logic tạo thể hiện của Singleton ở đây
//         return {
//             method1: function () {
//                 console.log("Phương thức 1 của Singleton");
//             },
//             method2: function () {
//                 console.log("Phương thức 2 của Singleton");
//             }
//         };
//     }

//     return {
//         // Phương thức để có được thể hiện duy nhất của Singleton
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// })();

// // Sử dụng Singleton
// var singletonInstance1 = Singleton.getInstance();
// var singletonInstance2 = Singleton.getInstance();

// console.log(singletonInstance1 === singletonInstance2); // Kết quả sẽ là true vì cả hai đều là cùng một thể hiện của Singleton

// singletonInstance1.method1(); // Gọi phương thức từ Singleton


class Singleton {
    static a = 1;
    constructor() {
        // Kiểm tra xem thể hiện đã tồn tại chưa
        if (!Singleton.instance) {
            // Nếu chưa, tạo một thể hiện mới
            Singleton.instance = this;
        }
        // Trả về thể hiện đã tồn tại nếu đã được tạo trước đó
        return Singleton.instance;
    }
    static test() {
        console.log(123123);
    }
    // Các phương thức của Singleton
    method1() {
        console.log("Phương thức 1 của Singleton");
    }

    method2() {
        console.log("Phương thức 2 của Singleton");
    }
}

// Sử dụng Singleton
const singletonInstance1 = new Singleton();
// const singletonInstance2 = new Singleton();
console.log(Singleton.a);
// console.log(singletonInstance1 === singletonInstance2); // Kết quả sẽ là true vì cả hai đều là cùng một thể hiện của Singleton


