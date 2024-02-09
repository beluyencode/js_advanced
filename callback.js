//Exemple 1
function test(count, callback) {
    count += 1;
    callback(count)
}

test(1, (res) => {
    console.log(res)
})

//Exemple 2
// Hàm bất đồng bộ
function doSomethingAsync(callback) {
    setTimeout(function () {
        console.log("Thực hiện xong công việc bất đồng bộ!");
        callback(); // Gọi callback để thông báo rằng công việc đã hoàn thành
    }, 2000);
}

// Callback function được truyền vào và sẽ được gọi sau khi công việc bất đồng bộ hoàn thành
function afterAsync() {
    console.log("Đã gọi callback!");
}

// Gọi hàm bất đồng bộ và truyền callback function vào
doSomethingAsync(afterAsync);