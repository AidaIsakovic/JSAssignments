// uppgift 1
//for (let i = 0; i < 13; i++) {

//console.log(getRandomInt(6) + 1);
//}
//function getRandomInt(max) {
  //return Math.floor(Math.random() * max);
//}


//uppgift 2
//let startNumber =1;
//let endNumber =1024;

//for (let i = 1; i <= 1024; i *= 2) {
  //console.log(i);
//}


// uppgift 3
//for (let i = 10; i >= 0; i--) {
//console.log(i);
//}


//uppgift 4
//function power(firstNumber, exponent){
  //let result = firstNumber;
  //for (let i = 1; i < exponent; i++) {
//result *= firstNumber;
  //}
  //return result;
//}
//console.log(power(4, 24));

//Goal:
// ○Output: 999 green bottles hanging on the wall. 999 green bottles hanging on the wall.
// ○Output: And if one green bottle, should accidentally fall, there will be 998 green bottles hanging on the wall.
// ○Output... Until 0 bottles are remaining.
// ●Instructions
// :○Refactor the code with the new knowledge that you have learned to recreate the same verse but use a for loop to decrease the number of bottles from 99 to 0.

for (let i = 999; i <= 0; i--) {
  console.log(i + "green Bottles hanging on the wall." + "green Bottles hanging on the wall. And if one green bottle, should accidentally fall, there will be" + i + "green bottles hanging on the wall.");
}

