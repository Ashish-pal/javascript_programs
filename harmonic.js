let userInput=require('readline-sync');
let n=userInput.questionInt("Enter the nth value: ");
arr=[];
for (var i = 1; i <=n; i++) {
    arr+=" "+(1+"/"+i+" +")+" ";
}
console.log(arr);