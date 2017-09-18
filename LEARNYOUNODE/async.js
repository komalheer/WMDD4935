var fs=require('fs') ;
fs.readFile(process.argv[2],'utf8',function(e,call){
if (e) {
return console.log(e);
} 
const ans = call.split('\n').length-1;
console.log(ans);    
});