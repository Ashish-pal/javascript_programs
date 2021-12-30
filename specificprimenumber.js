let userInput=require('readline-sync');
let startNumber = userInput.questionInt("Enter starting number: ");
let endNumber = userInput.questionInt("Enter ending number: ");
for (let i = startNumber; i <= endNumber; i++) {
	let prime = true;
	for (let j = 2; j <= i/2; j++) {
		if (i % j == 0) {
			prime = false;
			break;
		}
	}
	if (prime && i != 1) {
		console.log(i);
	}
}