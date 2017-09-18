var h=require("http");
var bl=require("bl");
var result=[];
var count=0;
function print() 
{
for (var i=0;i<3;i++)
{
console.log(result[i]);
}
}
function get (i) {
h.get(process.argv[2 + i], function (response)
{
response.pipe(bl(function (e,data)
{
if(e) {
return console.log(e);
}
result[i]=data.toString();
count++;
if (count===3) 
{
print();
}
}));
});
}
for(var i=0;i<3;i++)
{
get(i);
}