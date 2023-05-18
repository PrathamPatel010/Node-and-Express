const { createReadStream } = require('fs');

const stream = createReadStream('./Content/big.txt', 'utf8');

stream.on('data', (res) => {
    console.log(res);
})
stream.on('error', (err) => {
    console.log(err);
})