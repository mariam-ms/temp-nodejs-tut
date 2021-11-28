//import a function and variable from other modules by "require"
const sayHi = require('./utils')
const names = require('./names')
const data =require('./alternative-data')
require('./func')

//examine the stuff from other modules
sayHi('susan')
sayHi(names.Perry)
sayHi(names.Camela)
console.log(names)
console.log(data)