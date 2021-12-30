var number=[];
for(i=1;i<=5;i++) {
    let randomValue=Math.floor(Math.random() * 101)+100;
    number.push(randomValue);
}
console.log("Random generated numbers are: "+number);
maxValue=number[0];
minValue=number[0];
for (let index = 0; index < number.length; index++) {
    if (number[index] > maxValue)
    maxValue=number[index]
    if(number[index] < minValue)
    minValue=number[index]    
}
console.log("Maximum value "+maxValue);
console.log("Minimum value "+minValue);