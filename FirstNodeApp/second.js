const http = require('http');

const server = http.createServer((req,resp)=>{
  resp.writeHead(200,{'content-type' : 'text/html'});
  resp.write('<h1>This is my first node app</h1>');
  resp.write('<p>Node is very powerfull server side scripting lngauge...</p>');
  resp.write('<button> click if you are Agree</button>');
  resp.end('<p> Thank you</p>');
}).listen(9898);
// or 
// server.listen(9898);