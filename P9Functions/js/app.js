//We can define a function like this
//makeLasagna();

//function makeLasagna() {
  //console.log("Fry meat.");
  //console.log("Cut onions.");
  //console.log("Fry onions.");
  //console.log("Add tomato sauce.");
  //console.log("Add spices.");
  //console.log("Boil.");
//}
//And invoke it (use) like this:
//makeLasagna();
//Then your code would look like:
//console.log("Time for breakfast.");
//if(isHungry) {makeLasagna();
//}
//console.log("Time for lunch.");
//if(isHungry) {makeLasagna();
//}

//walk three steps forward.
walkThreeStepsForward();
// then turn around and walk three steps forward
turnAround();
walkThreeStepsForward();
// then turn left and walk three steps forward.
turnLeft();
walkThreeStepsForward();
// then turn left and walk one step forward.
turnLeft();
stepForward();
// then turn around and walk one step forward
turnAround();
stepForward();

function stepForward() {
  console.log("Move Forward");
}
function turnRight() {
  console.log("Turn Right");
}
function turnLeft() {
  turnRight();
    turnRight();
    turnRight();
}
function walkThreeStepsForward() {
  stepForward();
  stepForward();
  stepForward();
}
function turnAround() {
  turnRight();
  turnRight();
}

