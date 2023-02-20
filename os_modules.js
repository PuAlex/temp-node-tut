const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method returns the sytem uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const current_OS = {
    name: os.type(),
    release: os.release(),
    total_mem: os.totalmem(),
    free_mem: os.freemem()
}

console.log(current_OS);