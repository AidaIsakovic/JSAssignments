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
  updateScoreText();
  checkScoreForSeven();
});

// controllers
function increaseScoreByOne() {
  score++;
}
function checkScoreForSeven() {
  if (score >= 7) {
    changeScoreTextColorToGreen();
  }
}

// view
function updateScoreText () {
  textField0.innerHTML ="Your Score Is:" + score;
}
function changeScoreTextColorToGreen() {
  textField0.style.color = "green";
}
