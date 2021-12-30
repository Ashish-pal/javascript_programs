const userInput=require('readline-sync');
let a=userInput.questionInt("Enter the number-1  : ");
let b=userInput.questionInt("Enter the number-2  : ");
let c=userInput.questionInt("Enter the number-3  : ");
outputValues=[];
one=a+b*c;
outputValues.push(one);
two=a%b+c;
outputValues.push(two);
three=c+a/b;
outputValues.push(three);
four=a*b+c;
outputValues.push(four);
console.log(outputValues);
maxValue=outputValues[0];
minValue=outputValues[0];
for (let index = 0; index < outputValues.length; index++) {
    if (outputValues[index] > maxValue)
    maxValue=outputValues[index]
    if(outputValues[index] < minValue)
    minValue=outputValues[index]    
}
console.log("Maximum value "+maxValue);
console.log("Minimum value "+minValue);