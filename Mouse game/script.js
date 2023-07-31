let score = 0;

function getRandomAction() {
  const actions = ['Left Click', 'Right Click'];
  const randomIndex = Math.floor(Math.random() * actions.length);
  return actions[randomIndex];
}

function showRandomAction() {
    const container = document.getElementById('container')
  const bubble = document.getElementById('bubble');
  const screenWidth = 1150;
  const screenHeight = 650;
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
  } else {
    score = score - 5;
  }

  document.getElementById('score').innerText = score;
  if (score === 100) {
    showCongratulation();
  } else if (score === -10) {
    showGameOver();
  } else {
    showRandomAction();
  }
}

function showCongratulation() {
    bubble.style.display = 'none';
    document.getElementById('message').innerText = 'Congratulations!';
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('startButton').addEventListener('click', restartGame);
  }
  
  function showGameOver() {
    bubble.style.display = 'none';
    document.getElementById('message').innerText = 'Game Over !';
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('startButton').addEventListener('click', restartGame);
  }
  
  function restartGame() {
    document.location.reload(true)
  }

document.getElementById('bubble').addEventListener('contextmenu', (e) => e.preventDefault()); // Prevent the context menu from appearing on right-click.

document.getElementById('bubble').addEventListener('click', handleMouseClick);
document.getElementById('bubble').addEventListener('contextmenu', handleMouseClick);

// Initial display of the bubble action
showRandomAction();
