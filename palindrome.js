let userInput=require('readline-sync');
let number =userInput.questionInt("Enter the Number : ");
function reverseNum(number) {
    let r = number.toString().split('').reverse().join('');
    return r;
}
if (reverseNum(number)==number) {
    console.log("Given number is palindrome!");
}
else {
    console.log("Given number is not palindrome!");
}