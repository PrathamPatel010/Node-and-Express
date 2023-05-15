// In the provided code, the server.listen() method is called to start the HTTP server and have it listen on port 5000. 
// When server.listen() is invoked,  it starts the process of setting up the server and binding it to the specified port.
// However, this operation is non - blocking, meaning it doesn 't halt the execution of the rest of the code.

// As a result, the event loop in Node.js continues to process other tasks while the server is being set up 
// and starts listening for incoming connections.In the meantime, the code execution proceeds to the next line after server.listen(), 
// which is the console.log('Server listening on port:5000....') statement.

// Therefore, when you run this code, you might see the "Server listening on port:5000...." message printed before any incoming requests are handled. 
// This is because the event loop handles the console.log() statement while the server is being set up asynchronously in the background.

// Once the server is ready and starts receiving requests, the provided callback function (req, res) => {...} will be executed for each request, 
// and the corresponding "Request event" message will be logged
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request event');
    res.end('Hello World');
})

server.listen(5000, () => {
    console.log('Server listening on port:5000....');
})