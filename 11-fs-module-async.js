// const fs = require('fs');

// we can use destructuring
const { readFile, writeFile } = require('fs');

console.log("Starting the task....");
// Demonstrating callback hell
readFile('./Content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./Content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./Content/result-async.txt', `${first} and ${second}`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            result = "File written successfully";
            console.log(result);
            console.log("Done with the task....");
        });
    })
})
console.log("Starting the next task....");