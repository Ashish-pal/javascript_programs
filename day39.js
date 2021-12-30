const ARRAY_LENGTH = 10
const randArray10 = []
for (i = 0; i < 10; i++) {
    randArray10.push(Math.floor(Math.random() * (999 - 100 + 1) + 100));
}
console.log(randArray10);


//without sorting second smallest
function secondSmallest() {
    let min = randArray10[0];
    let secondMin = randArray10[1];
    for (let i = 0; i < ARRAY_LENGTH; i++) { //run first time array
        if (randArray10[i] < min) {
            secondMin = min;
            min = randArray10[i];
        }
    }
    for (let i = 0; i < ARRAY_LENGTH; i++) { //run second time array
        if (randArray10[i] < secondMin && randArray10[i] != min) {
            secondMin = randArray10[i];
        }
    }
    return secondMin;
}
console.log(secondSmallest());


//without sorting second largest
function secondLargest() {
    let max = randArray10[0];
    let secondMax = randArray10[1];
    for (let i = 0; i < ARRAY_LENGTH; i++) {//run first time array
        if (randArray10[i] > max) {
            secondMax = max;
            max = randArray10[i];
        }
    }
    for (let i = 0; i < ARRAY_LENGTH; i++) { //run second time array
        if (randArray10[i] > secondMax && randArray10[i] != max) {
            secondMax = randArray10[i];
        }
    }
    return secondMax;
}
console.log(secondLargest());


//sort array and then find second largest and second smallest
for (let i = 0; i < ARRAY_LENGTH; i++) {
    for (let j = i + 1; j < ARRAY_LENGTH; j++) {
        if (randArray10[i] > randArray10[j]) {
            let temp = randArray10[i];
            randArray10[i] = randArray10[j];
            randArray10[j] = temp;
        }
    }
}
console.log("With Sorting Second Largest:" + randArray10[ARRAY_LENGTH - 2]);
console.log("With Sorting Second Smallest:" + randArray10[1]);


//using Brute force method
let givenArray = new Array(1, 2, 4, -3, -1, 5, 6);
for (let i = 0; i < givenArray.length; i++) {
    for (let j = i + 1; j < givenArray.length; j++) {
        for (let k = j + 1; k < givenArray.length; k++) {
            if (givenArray[i] + givenArray[j] + givenArray[k] == 0) {
                console.log("Numbers found : " + givenArray[i] + "," + givenArray[j] + " and " + givenArray[k]);
            }
        }
    }
}

//using sorting method
let firstElement;
let startIndex;
let endIndex;
let currentSum;

givenArray.sort();

for (let i = 0; i < givenArray.length; i++) {
    firstElement = givenArray[i];

    startIndex = i + 1;
    endIndex = givenArray.length - 1;

    while (startIndex < endIndex) {
        currentSum = givenArray[startIndex] + givenArray[endIndex];
        if (currentSum + firstElement == 0) {
            console.log("Found three elements: " + firstElement + "," + givenArray[startIndex] + " and " + givenArray[endIndex]);
            startIndex++;
            endIndex--;
        } else if (currentSum + firstElement < 0) {
            startIndex++;
        } else {
            endIndex--;
        }
    }
}

//repeated twice digit
const repeatArray = [];
for(let i = 1; i<100;i++){
if (i%11 == 0){
repeatArray.push(i);
}
}
for(let i=0; i<repeatArray.length; i++){
console.log("Numbers found : " + repeatArray[i]);
}


