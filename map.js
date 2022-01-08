let map = new Map();
while (true) {
    let dice = Math.floor(Math.random() * 6 + 1);
    if (!map.has(dice)) {
        map.set(dice, 1);
    } else {
        let freq = map.get(dice);
        if (freq >= 10) {
            break;
        } else {
            map.set(dice, freq + 1);
        }
    }
}
console.log(map);
function getKey(val) {
    return [...map].find(([key, value]) => val === value)[0];
}
let minRollValue = Math.min(...map.values());
let maxRollValue = Math.max(...map.values());
console.log(getKey(minRollValue) + " is minimum rolled value for  " + minRollValue + " times");
console.log(getKey(maxRollValue) + " maximum rolled value for " + maxRollValue + " times");



//let birthMonthMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
//for (let i = 0; i < 50; i++) {
 //   let birthGenerator = Math.floor(Math.random() * 12) + 1;
 //   let count = birthMonthMap.get(birthGenerator);
//    birthMonthMap.set(birthGenerator, ++count);
//}
//console.log(birthMonthMap);


//let map = new Map();
for (let person = 1; person <= 50; person++) 
{
    let birthMonth = Math.floor(Math.random() * 11);
    birthMonth++;
    if (map.has(birthMonth)) 
    {
        map.get(birthMonth).push(person);
    }
    else 
    {
        map.set(birthMonth, [person]);
    }
}
for (let [key, value] of map) 
{
    console.log('People with birthday in month ' + key + ' : ' + String(value));
}
