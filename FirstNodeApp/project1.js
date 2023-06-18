const url = require('url');
const http = require('http');
const fs = require('fs');

let pageContent;   
const server = http.createServer((request, response)=>{
    let page_url = url.parse(request.url);
        page_url = page_url.href.toString(); 
    if(page_url == '/'){
         pageContent = fs.readFileSync('./view/home.html'); 
        //   console.log('Home Page');
    }else if(page_url == '/about'){
        pageContent = fs.readFileSync('./view/about.html'); 
        // console.log('About');
    }else if(page_url == '/contact'){
        pageContent = fs.readFileSync('./view/contact.html'); 
        // console.log('Contact');   
    }else{
        console.log('something wrong');
    }
    response.writeHead(200,{'content-type':'text/html'});
    response.write(pageContent);
    response.end();
}).listen('1010');