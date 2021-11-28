// we have 4 built in modules os, path, http, fs
//1-os module , 2-path , 3-file system module, 4-http
//fs async
const {readFile,writeFile}=require('fs') 

console.log('start here')

readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
    console.log(err)
    return
}
const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile('./content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})

console.log('starting next task')