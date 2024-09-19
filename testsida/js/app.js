// looks for "text0". assigns that to the variable called "textfield"
const textField0 = document.getElementById("text0");
textField0.innerHTML = showStylizedScore(786);


function showScore(inputNumber) {
  return inputNumber * 100; //output is a number
}

function showStylizedScore(scoreInput) {
  return "Your score is: " + scoreInput * 100;
}
