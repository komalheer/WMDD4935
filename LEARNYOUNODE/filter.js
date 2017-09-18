let fs=require('fs') ;
let ext='.'+process.argv[3];
let pr=process.argv[2];
fs.readdir(pr,function(e,file) {
if (e){
return console.log(e);   
} 
file.forEach(function(name) {
if (require('path').extname(name)===ext) {
console.log(name);
}
});
});