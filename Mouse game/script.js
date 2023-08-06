let score = 0;
let right = 0;
let wrong = 0;
const bubble = document.getElementById('bubble');
const start = document.getElementById('startGame');

function getRandomAction() {
  const actions = ['Left Click', 'Right Click'];
  const randomIndex = Math.floor(Math.random() * actions.length);
  return actions[randomIndex];
}

function showRandomAction() {
  start.style.display = 'none'
  bubble.style.display = 'inline-block'
  const container = document.getElementById('container')
  const screenWidth = container.clientWidth - 70;
  const screenHeight = container.clientHeight - 70;
  const bubbleWidth = bubble.offsetWidth;
  const bubbleHeight = bubble.offsetHeight;
  console.log(bubbleWidth)

  // Calculate random positions for the bubble within the visible screen area
  const randomX = Math.random() * (screenWidth - bubbleWidth);
  const randomY = Math.random() * (screenHeight - bubbleHeight);

  bubble.style.left = randomX + 'px';
  bubble.style.top = randomY + 'px';
  bubble.innerText = getRandomAction();
}

function handleMouseClick(event) {
  const clickedAction = event.target.innerText;
  const isLeftClick = (event.which === 1 || event.button === 0);

  if (
    (clickedAction === 'Left Click' && isLeftClick) ||
    (clickedAction === 'Right Click' && !isLeftClick)
  ) {
    score = score + 10;
    right ++
    playRightSound()
  } else {
    score = score - 5;
    wrong ++
    playWrongSound()
  }

  document.getElementById('score').innerText = score;
  document.getElementById('right').innerHTML = right;
  document.getElementById('wrong').innerHTML = wrong;
  if (score > 99) {
    showCongratulation();
  } else if (score < -9) {
    showGameOver();
  } else {
    showRandomAction();
  }
}

function showCongratulation() {
  bubble.style.display = 'none';
  document.getElementById('message').innerText = 'Congratulations!';
  document.getElementById('message').style.display = 'block';
  document.getElementById('startButton').style.display = 'block';
  document.getElementById('startButton').addEventListener('click', restartGame);
}

function showGameOver() {
  bubble.style.display = 'none';
  document.getElementById('message').innerText = 'Game Over !';
  document.getElementById('message').style.display = 'block';
  document.getElementById('startButton').style.display = 'block';
  document.getElementById('startButton').addEventListener('click', restartGame);
}

function startGame() {
  bubble.style.display = 'none'
}

function restartGame() {
  score = 0;
  right = 0;
  wrong = 0;
  document.getElementById('score').innerText = score;
  document.getElementById('right').innerHTML = right;
  document.getElementById('wrong').innerHTML = wrong;
  document.getElementById('message').style.display = 'none';
  document.getElementById('startButton').style.display = 'none';
  showRandomAction()
}

function playRightSound() {
  const keyPressSound = document.getElementById('clickSound');
  keyPressSound.currentTime = 0; // Reset the sound to start from the beginning
  keyPressSound.play();
}

function playWrongSound() {
  const keyPressSound = document.getElementById('wrongSound');
  keyPressSound.currentTime = 0; // Reset the sound to start from the beginning
  keyPressSound.play();
}
function handleEnterKey(event) {
  // Check if the pressed key is Enter (keyCode 13) or Enter (code "Enter")
  if (event.key === "Enter" || event.keyCode === 13) {
    handleMouseClick();
  }
}

bubble.addEventListener('contextmenu', (e) => e.preventDefault()); // Prevent the context menu from appearing on right-click.

bubble.addEventListener('click', handleMouseClick);
bubble.addEventListener('contextmenu', handleMouseClick);
start.addEventListener('click', showRandomAction)
// Initial display of the bubble action;
startGame()
