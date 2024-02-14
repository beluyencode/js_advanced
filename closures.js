//var
function outerFunction() {
    var outerVariable = 'Biến ở ngoài';

    function innerFunction() {
        console.log(outerVariable); // innerFunction có thể truy cập biến outerVariable từ outerFunction
    }

    return innerFunction; // Trả về innerFunction từ outerFunction
}

var myFunction = outerFunction(); // Gán innerFunction (cùng với closure) vào myFunction
myFunction(); // Gọi myFunction để in ra giá trị của outerVariable từ closure

//let
// function printNumbers() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log(i); // Lỗi: i không tồn tại ở đây vì i chỉ có phạm vi trong vòng lặp
// }

// printNumbers();

