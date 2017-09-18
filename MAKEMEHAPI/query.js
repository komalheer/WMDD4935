var hapi = require('hapi');
var vision = require('vision');
var path = require('path');
var pr=process.argv[2];

var server = new hapi.Server();

server.connection({
host: 'localhost',
port: Number(pr||8080)
});
server.register(vision,function error(e) {
    if (e){
    console.error(e);
        
    }
});

server.views({
engines: {
html: require('handlebars')
},
path: path.join(__dirname,'template')
});

server.route({
method: 'GET',
path: '/',
handler: {
view: 'index.html'
}
});

server.start(function error(e){
    if (e){
        return console.error(e)
    };
});