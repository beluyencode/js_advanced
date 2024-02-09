function outerFunction() {
    var outerVariable = 'Biến ở ngoài';

    function innerFunction() {
        console.log(outerVariable); // innerFunction có thể truy cập biến outerVariable từ outerFunction
    }

    return innerFunction; // Trả về innerFunction từ outerFunction
}

var myFunction = outerFunction(); // Gán innerFunction (cùng với closure) vào myFunction
myFunction(); // Gọi myFunction để in ra giá trị của outerVariable từ closure



//example
function createCounter() {
    var counter = 0;
    var myFunction = function () {
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}