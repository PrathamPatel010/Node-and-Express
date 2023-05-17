const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on(('response'), (name, id) => {
    console.log(`Data received with name:${name} id:${id}`);
})

customEmitter.on(('response'), () => {
    console.log(`Some other logic here`);
})

customEmitter.emit('response', 'john', '101')