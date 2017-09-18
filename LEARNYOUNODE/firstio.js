var fs=require('fs') ;
let pr=process.argv[2];
var method= fs.readFileSync(pr,'utf8').split('\n').length-1;
console.log(method);