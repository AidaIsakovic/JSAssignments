// Assignment

const birthYear = 2010;
const currentYear = 2024;
const favoriteNumber = 21;

let ageOfPerson = currentYear - birthYear;
console.log(ageOfPerson);

// Save to a let variable named isChild, when the age is from 0 till 10.
let isChild = (ageOfPerson >= 0) && (ageOfPerson <= 10);

// Save to a let variable named isTeenager, when the age is from 11 to 17
let isTeenager = (ageOfPerson >= 11) && (ageOfPerson <= 17);

// Save to a let variable named isAdult, when the age is 18 or more.
let isAdult =  ageOfPerson >= 18;

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);

if (isChild) {
  console.log ("you are a child")
}
else if (isTeenager) {
  console.log ("you are a teenager")
}
else if (isAdult) {
  console.log ("you are an adult")
}

console.log(favoriteNumber);

if (favoriteNumber > ageOfPerson) { // FALSE
  console.log("Favorite Number is Greater");
}
else if (favoriteNumber === ageOfPerson) {
  console.log("They are the same!")
}
else {
  console.log("Age is Greater");
}
if (favoriteNumber % 2 === 0) {
  console.log("Favorite number is Even")
}
else {
  console.log("Favorite number is Odd")
}
favoriteNumber % 2 === 0 ? console.log("Favorite number is Even"):console.log("Favorite number is Odd");
