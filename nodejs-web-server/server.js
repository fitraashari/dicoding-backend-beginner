const http = require('http');
const port = 3000;
const host = 'localhost';
const requestListener = (request,response)=>{
    response.setHeader('Content-Type','text/html');
    const {method,url} = request;

    if (url==='/') {
        if (method==='GET') {
            response.statusCode = 200;
            response.end('Ini adalah home page');
        }else{
            response.statusCode = 400;
            response.end(`Halaman tidak dapat diakses dengan ${method} request`);

        }
    }else if(url==='/about'){
        if (method==='GET') {
            response.statusCode = 200;
            response.end(`Hlo! Ini adalah halaman about`)
        }else if (method==='POST') {
            response.statusCode = 200;
            let body = [];
            request.on('data',(chunk)=>{
                body.push(chunk);
            })
            request.on('end',(chunk)=>{
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body)
                response.end(`Halo, ${name} ini adalah halaman about`)
            })
        }else{
            response.statusCode = 400;
            response.end(`Halaman tidak dapat diakses dengan ${method} request`)

        }
    }else{
        response.statusCode = 404;
        response.end(`Halaman tidak ditemukan!`)

    }

    
}
const server = http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`Server sedang berjalan di http://${host}:${port}`)
});