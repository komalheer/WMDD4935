let hapi=require('hapi');
let server=new hapi.Server();
let pr=process.argv[2];
server.connection({
host: 'localhost',
port: Number(pr||8080)
});

server.route({
method:'GET',
path:'/{name}',
handler:function handle(request, reply)
{
reply('Hello '+ encodeURIComponent(request.params.name));
}
});

server.start((e) => {
if (e){
return console.error(e)
        ;
    }
});