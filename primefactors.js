let userInput=require('readline-sync');
let number=userInput.questionInt("Enter the Number : ");
for (let i = 2; i <= number/2; i++) {
	while (number % i == 0) {
		console.log(i);
        number /= i;
	}
}
if (number != 1) {
	console.log(number);
}