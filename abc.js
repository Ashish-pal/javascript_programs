//uc1
function getRandomNumber1() {
  return Math.floor(Math.random() * 10);
 }
 console.log(getRandomNumber1());

//uc2
 function getRandomNumber2() {
  return Math.floor((Math.random() * 6)+1);
 }
 console.log(getRandomNumber2());

//uc3
function getdice1() {
  return Math.floor((Math.random() * 6)+1);
  }

function getdice2() {
      return Math.floor((Math.random() * 6)+1);
  }
 
function getRandomAddition(){
  var add;
  add = getdice1() + getdice2() ;
  return add;
  }      
  console.log(getRandomAddition());

//uc4

function getrandom1() {
  return Math.floor(Math.random() * 100);
  }

function getrandom2() {
      return Math.floor(Math.random() * 100);
  }

function getrandom3() {
      return Math.floor(Math.random() * 100);
  }

function getrandom4() {
      return Math.floor(Math.random() * 100);
  }

function getrandom5() {
      return Math.floor(Math.random() * 100);
  }

function getRandomAddition(){
  var add;
  add = getrandom1() + getrandom2() + getrandom3() + getrandom4() + getrandom5() ;
  return add;
  }      
  console.log(getRandomAddition());

function getRandomAverage(){
      var avg;
      var n=5;
      avg = (getRandomAddition())/n ;
      return avg;
      }      
      console.log(getRandomAverage());

//uc5

function areaRectangle(width, length)
{
let area = width * length;
return area;
}
// Driver program
let width = 60;
let length = 40;
console.log("Area = " + areaRectangle(width, length) + " meter square ");

//uc5of

function unitConversion() {
  let ft1 = 12;
  let feet = 12*42;
  return feet;
let area = 60*40;
return area;
let plot = area/43560*25;
return plot;
}
console.log(unitConversion());