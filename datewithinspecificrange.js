const userInput=require('readline-sync');
let date =userInput.questionInt("Enter the date : ");
let month =userInput.questionInt("Enter the month : ");
let combo=0;
let res =false;
if (month >=3 && month <= 6){
    dlimit =(30+(month%2))
    if(date >= 1 && date <= dlimit){
        combo =(month*100)+date;
        if(combo >=320 && combo <=620){
            res="true";
        }
    }
}
console.log(res);