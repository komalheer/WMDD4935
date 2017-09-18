let hapi = require('hapi');
let server = new hapi.Server();
let pr=process.argv[2];
server.connection({
host: 'localhost',
port: Number(pr||8080)
});

server.route({
method: 'GET', path: '/',handler: (request, reply) => {
reply('Hello hapi')
}
});
server.start((e) => {
if (e)
{
    return console.error(e);
}
});