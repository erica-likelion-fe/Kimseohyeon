const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const inputField = document.querySelector('input[name="number"]');
const checkButton = document.querySelector('button');
const attemptsLabel = document.querySelector('label[for="attempts"]');
const messageBox = document.getElementById('message');

checkButton.addEventListener('click', () => {
  const userGuess = Number(inputField.value);


  attempts++;

  if (userGuess < answer) {
    messageBox.textContent = "UP!";
  } else if (userGuess > answer) {
    messageBox.textContent = "DOWN!";
  } else {
    messageBox.textContent = `정답입니다! ${answer}`;
    checkButton.disabled = true;
    return;
  }

  if (attempts === maxAttempts) {
    messageBox.textContent = `실패! 정답은 ${answer}.`;
    checkButton.disabled = true;
  }

  attemptsLabel.textContent = `남은 기회: ${maxAttempts - attempts}`;
});
