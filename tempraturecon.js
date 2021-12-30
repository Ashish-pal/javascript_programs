let userInput=require('readline-sync');
console.log("1. Celcuis to Farenheit\n2. Farenheit to Celcius\n");
let choice=userInput.questionInt("Enter the choice : ");
switch(choice){
    case 1:
    temp=userInput.questionInt("Enter the temparature : ");
    CtoDegF(temp);
    break;
    case 2:
        temp=userInput.questionInt("Enter the temparature : ");
        FtoDegC(temp);
        break;
}
function FtoDegC(temp) {
    if (temp < 32 || temp > 212) {
        console.log("Invalid input!");
        return;
    }
    console.log("temp is degC is: " + ((temp - 32) * (5 / 9)));
}
function CtoDegF(temp) {
	if (temp < 0 || temp > 100) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp in degF is: " + ((temp * 9 / 5) + 32));
}