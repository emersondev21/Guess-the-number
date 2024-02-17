const results = document.getElementById('result')
const numberCorrect = document.getElementById('numberCorrect')
const userInput = document.getElementById('userInput')
const btnRetry = document.getElementById('btnRetry')
const jsConfetti = new JSConfetti({
  emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
})

let numeroAleatorio; // Declare a variável globalmente

generateNumber()

function generateNumber() {
  numeroAleatorio = Math.floor(Math.random() * 11); // O intervalo é de 0 a 100
  console.log(numeroAleatorio);
  btnRetry.style.visibility = "hidden"
  results.textContent = ""
  numberCorrect.textContent = ""
}

function guess() {
  const userGuess = parseInt(userInput.value); // Converter entrada do usuário para número
  
  if (userGuess === numeroAleatorio) {
    results.textContent = "CONGRATULATIONS, YOU WIN!!!"
    btnRetry.style.visibility = "visible"
    jsConfetti.addConfetti()
  } else {
    results.textContent = "Incorrect number '-'"
    userGuess.textContent = ""
  }
}

function retry(params) {
  generateNumber()
}