console.log('Just a start....');

// This will be offloaded, as it is asynchronous code
setInterval(() => {
    console.log('Hello There...');
}, 1000)

// This will be executed, when it is done executing, asynchronous code will be executed
console.log("I will run first");