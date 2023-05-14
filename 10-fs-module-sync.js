// const fs = require('fs');
// fs.readFileSync

// we can use destructuring
const { readFileSync, writeFileSync } = require('fs');

console.log("Starting the task....");
const first = readFileSync('./Content/first.txt', 'utf8');
const second = readFileSync('./Content/second.txt', 'utf8');

console.log(`First file : ${first} Second file: ${second}`);

writeFileSync('./Content/result-sync.txt', `Here is the result : ${first} and ${second}`, { flag: 'a' })

console.log("Done with the task....");
console.log("Starting the next task....");