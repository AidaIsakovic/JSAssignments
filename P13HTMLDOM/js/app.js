// reference text0 and assign it to the variable called "textfiel0"
const textField0 = document.getElementById("text0");
// take "textfield0" and change it to Aida
textField0.innerHTML = average(4, 13)
textField0.innerHTML = multiplyBySelf(6);
textField0.innerHTML = randomNumber(3).toString();

//reference header5 and assign it to the variable called headertext5
const headerText5 = document.getElementById("header5");
// take headertext5 and change it to this is ma website
headerText5.innerHTML = "this is ma website"
// take headertext5, access its style, access its color and change it
headerText5.style.color = "pink";

const button0 = document.getElementById("button0");
button0.addEventListener("Press here sugar", ()=>{})
button0.style.color = "indigo";

function multiplyBySelf(numberToMultiply) {
  return numberToMultiply * numberToMultiply;
}

function average(firstNumber, secondNumber) {
  return (firstNumber+secondNumber) / 2;
}
function randomNumber() {
  return Math.floor(Math.random() * 3);
}
