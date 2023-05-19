const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`User hit the server`);
    console.log(req.method);
    console.log(req.url);
    const url = req.url;
    // Home page
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Home page</h1>');
        res.end();
    }
    // About page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About page</h1>');
        res.end();
    }
    // Error page
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Not Found</h1>');
        res.end();
    }
})

server.listen(5000);