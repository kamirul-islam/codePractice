let score = 0;
let lives = 6;
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Y', 'Z'];

function getRandomAlphabet() {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = 'Score: ' + score;
}

function updateLives() {
  const livesElement = document.getElementById('lives');
  livesElement.textContent = 'Lives: ' + lives;
}

function playKeyPressSound() {
  const keyPressSound = document.getElementById('keyPressSound');
  keyPressSound.currentTime = 0; // Reset the sound to start from the beginning
  keyPressSound.play();
}

function wrongKeyPressSound() {
  const keyPressSound = document.getElementById('wrongSound');
  keyPressSound.currentTime = 0; // Reset the sound to start from the beginning
  keyPressSound.play();
}

function showRandomAlphabet() {
  const alphabetElements = document.getElementsByClassName('alphabet');
  const randomAlphabet = getRandomAlphabet();

  for (const element of alphabetElements) {
    element.style.display = 'none';
  }

  document.getElementById('letter' + randomAlphabet).style.display = 'block';
}

function gameOver() {
  const gameContainer = document.getElementById('gameContainer');
  gameContainer.innerHTML = '<div>Game Over!<div style="font-size: 32px;">Final Score: ' + score +
      '</div><button onClick="document.location.reload(true)">Start New Game</button>';
  gameContainer.style.lineHeight = 80 +'px'
}
function congratulations() {
  const gameContainer = document.getElementById('gameContainer');
  gameContainer.innerHTML = '<div>Congratulations!</div><div style="font-size: 32px;">Final Score: ' + score + '</div><button onClick="document.location.reload(true)">Start New Game</button>';
  gameContainer.style.lineHeight = 80 +'px'
}

document.addEventListener('keydown', (event) => {
  const currentAlphabet = document.querySelector('.alphabet[style*="display: block;"]');
  if (currentAlphabet && event.key.toUpperCase() === currentAlphabet.textContent) {
    playKeyPressSound();
    score++;
    updateScore();
    currentAlphabet.style.display = 'none';
    if (score === 10) {
      congratulations();
    } else {
      showRandomAlphabet();
    }
  } else {
    wrongKeyPressSound()
    lives--;
    updateLives();
    if (lives === 0) {
      gameOver();
    }
  }
});

showRandomAlphabet();