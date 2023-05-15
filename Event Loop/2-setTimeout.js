console.log('first');

// Even if waiting time is 0ms, this task will be offloaded and synchronous code will be executed first. 
setTimeout(() => {
    console.log('second')
}, 0)

// after this synchronous code is finished executed, event loop will execute asynchronous code.
console.log('third');