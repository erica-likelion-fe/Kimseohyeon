const answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

console.log("1부터 100 사이의 숫자를 맞춰보세요!");

while (attempts < maxAttempts) {
  const input = prompt("숫자를 입력하세요:");
  const num = Number(input);
  attempts++;

  if (num < answer) {
    alert("UP!");
  } else if (num > answer) {
    alert("DOWN!");
  } else if (num === answer) {
    alert("축하합니다! 정답입니다.");
    break;
  }

  if (attempts === maxAttempts) {
    alert("실패! 시도 횟수를 초과했습니다.");
  }
}
