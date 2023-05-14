const os = require('os');

// get info about current user
const user = os.userInfo();
console.log(user);

// get the system uptime in seconds
console.log(`The System Uptime is: ${os.uptime()} seconds`);

// get the info about CPU
// console.log(os.cpus());

// get some other info about OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOS);