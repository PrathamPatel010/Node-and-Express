const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./Content/big.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./Content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })
    fileStream.on('error', (err) => {
        console.log(err);
    })
}).listen(5000);