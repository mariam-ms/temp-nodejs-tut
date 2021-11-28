// we have 4 built in modules os, path, http,
//1-os module , 2-path , 3-file system module, 
//fs
const {readFileSync,writeFileSync}=require('fs') 
/* previous line is same as 

const fs = require('fs')
fs.readfilesync
*/
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

//write method
writeFileSync('./content/third.txt',`the result :${first},${second}`,{flag :'a'})