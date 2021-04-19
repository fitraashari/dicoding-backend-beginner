const hapi = require('@hapi/hapi');
const routes = require('./route');
const init = async ()=>{
    const server = hapi.server({
        port:3000,
        host:'localhost'
    })
    server.route(routes);
    await server.start();
    console.log(`Server berjalan di ${server.info.uri}`)
}
init();