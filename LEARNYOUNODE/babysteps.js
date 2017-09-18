let sum=0;
let pr=process.argv;
for(let i=2;i<pr.length;i++){
sum = sum + Number(pr[i]);
}
 console.log(sum);