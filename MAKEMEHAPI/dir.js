var hapi= require('hapi');
var inert=require('inert');
var path=require("path");
var pr=process.argv[2];
var server = new hapi.Server();
server.connection({
host: 'localhost',
port: Number(pr||8080)
});

server.register(inert, function error(e) {
    if (e){
        return console.error(e);
    };
});

server.route({
method: 'GET',
path: '/public/{index1.html}',
handler: {
directory: 
{
    path: path.join(__dirname, 'public')}
}
});
server.start(function error(e){
   if (e){
        return console.error(e);
    };
});