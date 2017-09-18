var hapi= require('hapi');
var inert=require('inert');
var path=require("path");
var pr=process.argv[2];
var server = new hapi.Server({
connections: {
routes: {
files: {
relativeTo: __dirname}
}
}
});
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
path: '/',
handler: {
file: path.join(__dirname, 'index.html')
}
});
server.start(function error(e){
   if (e){
        return console.error(e);
    };
});