let userInput=require('readline-sync');
let n=userInput.questionInt("Enter the power value : ");
for (let index = 1; index <=n; index++){
   P=2**index;
   console.log("2 ^"+index+"= "+P);
}