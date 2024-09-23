//Create an array to count the occurrences of random numbers ○
// Roll 10 000 times for a number between 0 and 10 by using

let randomNumberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
// Use a 'FOOR LOOP' to READ a VALUE in an ARRAY
for (let i = 0; i < 10000; i++) {
  let randomNumber = getRandomInt (10);
  randomNumberCount[randomNumber] +=1;
}
console.log(randomNumberCount);

for (let i = 0; i < randomNumberCount.length; i++) {
  console.log(" I rolled " + i + " " +randomNumberCount[i] + " times. ");
}

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}
