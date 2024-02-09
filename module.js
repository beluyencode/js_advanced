class MyModule {
    // Biến và hàm private
    #privateVariable = 'Biến private';

    #privateFunction() {
        console.log('Hàm private');
    }

    // Biến và hàm public
    publicVariable = 'Biến public';

    publicFunction() {
        console.log('Hàm public');
        // Gọi hàm private
        this.#privateFunction();
    }
}

// Sử dụng Module
const myModuleInstance = new MyModule();

console.log(myModuleInstance.publicVariable); // Biến public
myModuleInstance.publicFunction(); // Hàm public, Hàm private
