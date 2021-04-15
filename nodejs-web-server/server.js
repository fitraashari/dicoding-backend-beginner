const http = require('http');
const port = 3000;
const host = 'localhost';
const requestListener = (request,response)=>{
    response.setHeader('Content-Type','text/html');
    response.statusCode = 200;
    const {method} = request;
    if (method==='GET') {
        response.end('<h1>Ini GET</h1>')
        
    }
    if (method==='POST') {
        // response.end('<h1>Ini POST</h1>')
        let body = [];
        request.on('data',(chunk)=>{
            body.push(chunk);
        })
        request.on('end',(chunk)=>{
            body = Buffer.concat(body).toString();
            const {name} = JSON.parse(body)
            response.end(`<h1>Hai ${name}</h1>`);
        })
        
    }
    if (method==='PUT') {
        response.end('<h1>Ini PUT</h1>')
        
    }
    if (method==='DELETE') {
        response.end('<h1>Ini DELETE</h1>')
        
    }
    
}
const server = http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`Server sedang berjalan di http://${host}:${port}`)
});