let userInput=require('readline-sync');
let n=userInput.questionInt("Enter the Number : ");
factorial=1;
for(i=1;i<=n;i++) {
factorial=factorial*i;
}
console.log(factorial);