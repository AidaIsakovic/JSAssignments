//Goal:
  //Output:You are a child: False
//Output:You are a teenager: False
//output:You are an adult: True

//Instructions:
//Start with a variable■const birthYear = 2000;○
//Do a few age-checks:■Save to a letvariable named isChild, when the age is from 0 till 10
// .■Save to a letvariable named isTeenager, when the age is from 11 to 17
// ■Save to a letvariable named isAdult, when the age is 18 or more.
// ○Then, print them all to the console.○
// Try with different birth years and account for edge cases (if birthYear is 2030?)

//const birthYear = 2000;
//const currentYear = 2024;
//const ageOfPerson = currentYear - birthYear;

// 10 or lower
//let isChild = ageOfPerson <=10;

// 11 and above. 17 and less
//let isTeenager = (ageOfPerson >=11) && (ageOfPerson<= 17);

// 18 and more
//let isAdult = ageOfPerson >=18 ; //true

//console.log(isChild);
//console.log(isTeenager);
//console.log(isAdult);

let heightFromGround = 0;
let playerTouchGround = heightFromGround === 0;
let playerHasJetPack = false;

if (playerTouchGround) {
console.log("player can jump!");
console.log("player is on the ground!");
}

  if (playerTouchGround){
console.log("player is on the ground!");
console.log("player can jump!");
}

else if (playerHasJetPack) {
  // runs when playes has jetpack = true
console.log("player can jet away!");
}

else {
   console.log("player is NOT on the ground!");
   console.log("player CANNOT jump!");
}

