let userInput=require('readline-sync');
let n=userInput.questionInt("Enter the Number : ");
for(let i=2;i<=n/2;i++){
    if ((n%i)==0) {
        console.log(n+" is not a prime number");
        return;
    }
}
console.log(n+" is a prime number");