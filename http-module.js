// we have 4 built in modules os, path, http, fs
//1-os module , 2-path , 3-file system module, 4-http
//http

const http = require('http')
const server =http.createServer((req,res) => {

if (req.url === '/') {
    res.end('Welcome to our home page')
  } if (req.url === '/about') {
    res.end('Here is our short history')
  } 
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  
})

server.listen(5000)