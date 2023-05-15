const { readFile } = require('fs');
console.log("Starting the first task....");

// Notice, how event loop will offload the asynchronous code and will run the immediate code.
readFile('./Content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res);
})
console.log("Starting with the next task....");

// this will be executed first, after this is finished executing, response of asynchronous code will be printed.
for (let i = 0; i < 10000; i++) {
    console.log("Random tasks....");
}