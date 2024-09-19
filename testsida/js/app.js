// Document elements
// looks for "text0". assigns that to the variable called "textfield"
const textField0 = document.getElementById("text0");

//BUTTONS
const increaseScoreButton = document.getElementById("button0");
//Internal Variables
let score = 0;

// process (what is going to happen in what sequence?)
increaseScoreButton.addEventListener("click", () => {
  increaseScoreByOne();

});


// controllers

function increaseScoreByOne() {
  score++;
  updateScoreText(score);
}

// The view
function updateScoreText (newText) {
  textField0.innerHTML = newText;
}
