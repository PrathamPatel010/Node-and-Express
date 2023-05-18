const { writeFileSync } = require('fs');

for (let i = 0; i < 1000; i++) {
    writeFileSync('./Content/big.txt', `Hello There ${i}\n`, { flag: 'a' });
}