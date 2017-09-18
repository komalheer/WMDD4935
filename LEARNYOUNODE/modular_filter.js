let path=require('path');
let fs=require('fs') ;
module.exports = function (direct, filter, callback) {
fs.readdir(direct, function (e, list) {
if (e) {
return callback(e);
}
list = list.filter(function (file) {
return path.extname(file)==='.' + filter;
})
callback(null, list);
})
}