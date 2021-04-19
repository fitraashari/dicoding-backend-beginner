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
            const {lang} = request.query;
            if (lang==="id") {
                return `Hai ${name} selamat datang`;
            }
            return `Hallo ${name} welcome`;
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request,h)=>{
            const {username, password} = request.payload;
            const response = h.response('success')
            response.type('text/plain');
            return response;
            // return `Welcome ${username}!`;
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