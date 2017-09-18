let h=require('http');
let map=require('through2-map');
let pr=process.argv[2];

let create=h.createServer(function (request, outstream)
{
  if(request.method!=='POST')
  {
    return outstream.end('send me a post\n')
  }

  request.pipe(map(function(chunk)
  {
    return chunk.toString().toUpperCase()
  })).pipe(outstream)
})
create.listen(Number(pr));