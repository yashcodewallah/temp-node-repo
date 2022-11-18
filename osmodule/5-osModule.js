const os=require('os')

//gives info about user
const user=os.userInfo()
console.log(user);


//returns the system uptime
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);
