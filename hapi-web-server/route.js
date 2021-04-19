const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request,h)=>{
            return `Homepage`;
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request,h)=>{
            return `Halaman tidak dapat diakses dengan method tersebut`;
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request,h)=>{
            const {name="stranger"} = request.params;
            return `Hallo ${name} selamat datang`;
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request,h)=>{
            return `About Page`;
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (request,h)=>{
            return `Halaman tidak dapat diakses dengan method tersebut`;
        }
    },
    
    {
        method: '*',
        path: '/{any*}',
        handler: (request,h)=>{
            return `Halaman tidak ditemukan`;
        }
    },
]
module.exports = routes;