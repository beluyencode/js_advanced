// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // Thực hiện các tác vụ bất đồng bộ
//         setTimeout(() => {
//             // Giả sử dữ liệu đã được tải thành công
//             resolve('Dữ liệu đã được tải');
//         }, 2000);
//     });
// }
// const a = fetchData()
//     .then(data => {
//         console.log(data); // In ra "Dữ liệu đã được tải"
//     })
//     .catch(error => {
//         console.error(error);
//     })


//async await
// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         // Thực hiện các tác vụ bất đồng bộ
//         setTimeout(() => {
//             // Giả sử dữ liệu đã được tải thành công
//             resolve('Dữ liệu đã được tải');
//         }, 2000);
//     });
// }

// async function getData() {
//     try {
//         const data = await fetchData()
//         console.log(data); // In ra "Dữ liệu đã được tải"
//     } catch (error) {
//         console.error(error);
//     }
// }
// getData()

// console.log("Bắt đầu");

// setTimeout(function () {
//     console.log("Tác vụ bất đồng bộ đã hoàn thành");
// });

// console.log("Kết thúc");

// event loop
// setTimeout(() => {
//     // Giả sử dữ liệu đã được tải thành công
//     console.log("Dữ liệu đã được tải thành công")
// }, 1000);


// console.time();
// for (let i = 0; i < 1000000; i++) {
// }
// console.timeEnd();
