const url = require('url');
const http = require('http');

http.createServer((req,res)=>{
    console.log(req.url);
    const urlObj = url.parse(req.url,true);
    console.log(urlObj);
    console.log(urlObj.query.name);
}).listen('9292');