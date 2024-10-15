
function reversed(arr){
let array=""
for(let i= arr.length-1;i>=0;i--){
    array+=arr[i]
}
    return array.split('')
}
console.log(reversed(['p','a','r','s','a']))



let num =[11,13,15,17,19,21,23,25,27,29]

 let newarrayreduce = num.reduce((h1,h2)=>{
    return h1+h2;
 })
 console.log(newarrayreduce);

 
