// The `http` module in Node.js provides functionality to create HTTP servers and make HTTP requests.
// It allows you to handle incoming HTTP requests, send HTTP responses, and interact with the HTTP protocol, including methods like GET, POST, and more.
const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write("Hello!Welcome to our home page");
    // res.end();

    if (req.url == '/') {
        res.end("Hello! Welcome to our home page");
    }
    if (req.url == '/about') {
        res.end("Here is a brief history about us");
    }
    res.end(` <h1>OOPS!</h1> <p>It seems that page you're looking for is not present</p> <a href="/">Go back Home</a>`);
})

server.listen(5000);