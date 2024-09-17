let inputNumberOne = 0;

function multiplyBySelf(numberToMultiply) {
return numberToMultiply * numberToMultiply;
}

console.log(multiplyBySelf(4));

//Write a function that has 2 numbers as parameters and averages them and returns the result.
// Input: 2, 6
// Output: 4
function average(firstNumber, secondNumber) {
  return (firstNumber+secondNumber) / 2;
}
console.log(average(2, 6));

function welcome(firstName, lastName) {
  return "Welcome " + firstName + lastName;
}
console.log(welcome("Aida", " Isakovic"));

//Write a function that has no parameters and returns a random number from 0 to 2.
// Input: NIL
// Output: 0, 2, 0, 1, 0, 2 (random each time it is run)


function randomNumber() {
  return Math.floor(Math.random() * 3);
}

console.log(randomNumber());

//Write a function that has 1 number as a parameter and returns the result like this:
// Input: 0. Output: A.
// Input: 1. Output: B.
// Input: 2. Output: C

function convertNumbersToLetters(number) {
  if (number === 0)
  return "A"

  else if (number === 1)
    return "B"
  else (number === 2)
    return "C"
}
console.log(convertNumbersToLetters(0));
console.log(convertNumbersToLetters(1));
console.log(convertNumbersToLetters(2));


function evaluateResult(firstNumber, secondNumber) {
 if (firstNumber === secondNumber)
   return "Both numbers are equal!";

 else if (firstNumber > secondNumber)
   return "First number is greater!";

 if (firstNumber < secondNumber)
   return "Second number is greater!";
}
console.log(evaluateResult(1, 1));
console.log(evaluateResult(3, 2));
console.log(evaluateResult(3, 4));


