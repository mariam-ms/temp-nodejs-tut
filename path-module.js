// we have 4 built in modules os, path, http,
//1-os 
//2-path
const path = require ('path')
console.log(path.sep)
//commands to
const filepath=path.join('content/subfolder/test.txt')
console.log(filepath)

const base=path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)