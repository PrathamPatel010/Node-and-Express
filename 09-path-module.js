// The path module in Node.js provides utilities for working with file paths and directory paths. 
// It offers functions to manipulate and interact with file and directory paths in a platform-independent way, regardless of the underlying operating system.
const path = require('path');

// path separator
console.log(path.sep);

// to connect the multiple segments of paths into single path
const filePath = path.join('/Content', 'subfolder', 'test.txt');
console.log(filePath);

// get the base file
const base = path.basename(filePath);
console.log(base);

// to get the absolute path to the file 
const absolute = path.resolve(__dirname, 'Content', 'subfolder', 'test.txt');
console.log(absolute);