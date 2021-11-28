// we have 4 built in modules os, http,
//os 
//info about current user
const os = require('os')
const user = os.userInfo()
console.log(user)
//method returns the system uptime
system_uptime=os.uptime()
console.log(system_uptime)

//object that summing up some info about my os

const cuurentOS={
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(cuurentOS)