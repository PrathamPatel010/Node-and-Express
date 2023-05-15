const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFile('./Content/first.txt', 'utf-8');
        const second = await readFile('./Content/second.txt', 'utf8');
        await writeFile('./async-patterns/result-await.txt', `This is awesome ${first} ${second}`);
        console.log(`${first} ${second}`);
    } catch (error) {
        console.log(error);
    }
}

start();



// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }


// getText('./Cont1ent/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

// readFile('./Content/first.txt', 'utf8', (err, data) => {
//     if (err) {
//         return;
//     } else {
//         console.log(data);
//     }
// })