const GAME_PIXEL_COUNT = 40;
const SQUARE_OF_GAME_PIXEL_COUNT = Math.pow(GAME_PIXEL_COUNT, 2);

let changedTheDirOnce = false;
let totalFoodAte = 0;
let totalDistanceTravelled = 0;

const gameContainer = document.getElementById("gameContainer");

const createGameBoardPixels = () => {
  let html = "";
  for (let i = 1; i <= SQUARE_OF_GAME_PIXEL_COUNT; ++i) {
    html += `<div class="gameBoardPixel" id="pixel${i}"></div>`;
  }
  gameContainer.innerHTML = html;
};

createGameBoardPixels();

const gameBoardPixels = document.getElementsByClassName("gameBoardPixel");

const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;

let currentFoodPosition = 0;
let positionArray = [];
let snakeCurrentDirection = RIGHT_DIR;
let currentSnakeHeadPosition = SQUARE_OF_GAME_PIXEL_COUNT / 2 - 1;
let snakeLength = 5;

// Draw snake initially
const drawInitialSnake = () => {
  for (let i = 0; i < snakeLength; i++) {
    const pixel = gameBoardPixels[currentSnakeHeadPosition - i];
    pixel.classList.add("snakeBodyPixel");
    positionArray.push(pixel);
  }
};

// Create food
const createFood = () => {
  gameBoardPixels[currentFoodPosition]?.classList.remove("food");
  currentFoodPosition = Math.floor(Math.random() * SQUARE_OF_GAME_PIXEL_COUNT);
  gameBoardPixels[currentFoodPosition].classList.add("food");
};

// Change direction
const changeDirection = (newDirectionCode) => {
  if (newDirectionCode === snakeCurrentDirection || changedTheDirOnce) return;

  switch (newDirectionCode) {
    case LEFT_DIR:
      if (snakeCurrentDirection !== RIGHT_DIR) snakeCurrentDirection = newDirectionCode;
      break;
    case UP_DIR:
      if (snakeCurrentDirection !== DOWN_DIR) snakeCurrentDirection = newDirectionCode;
      break;
    case RIGHT_DIR:
      if (snakeCurrentDirection !== LEFT_DIR) snakeCurrentDirection = newDirectionCode;
      break;
    case DOWN_DIR:
      if (snakeCurrentDirection !== UP_DIR) snakeCurrentDirection = newDirectionCode;
      break;
  }

  changedTheDirOnce = true;
};

// Move snake
const moveSnake = () => {
  switch (snakeCurrentDirection) {
    case LEFT_DIR:
      --currentSnakeHeadPosition;
      if (currentSnakeHeadPosition % GAME_PIXEL_COUNT === GAME_PIXEL_COUNT - 1 || currentSnakeHeadPosition < 0)
        currentSnakeHeadPosition += GAME_PIXEL_COUNT;
      break;

    case UP_DIR:
      currentSnakeHeadPosition -= GAME_PIXEL_COUNT;
      if (currentSnakeHeadPosition < 0)
        currentSnakeHeadPosition += SQUARE_OF_GAME_PIXEL_COUNT;
      break;

    case RIGHT_DIR:
      ++currentSnakeHeadPosition;
      if (currentSnakeHeadPosition % GAME_PIXEL_COUNT === 0)
        currentSnakeHeadPosition -= GAME_PIXEL_COUNT;
      break;

    case DOWN_DIR:
      currentSnakeHeadPosition += GAME_PIXEL_COUNT;
      if (currentSnakeHeadPosition > SQUARE_OF_GAME_PIXEL_COUNT - 1)
        currentSnakeHeadPosition -= SQUARE_OF_GAME_PIXEL_COUNT;
      break;
  }

  const nextSnakeHeadPixel = gameBoardPixels[currentSnakeHeadPosition];

  if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
    clearInterval(moveSnakeInterval);
    if (!alert(`Game Over! Your Score: ${totalFoodAte}`)) window.location.reload();
  }

  nextSnakeHeadPixel.classList.add("snakeBodyPixel");
  positionArray.push(nextSnakeHeadPixel);

  if (positionArray.length > snakeLength) {
    const removeMe = positionArray.shift();
    removeMe.classList.remove("snakeBodyPixel");
  }

  changedTheDirOnce = false;

  if (currentSnakeHeadPosition === currentFoodPosition) {
    totalFoodAte++;
    document.getElementById("pointsEarned").innerHTML = totalFoodAte;
    snakeLength += 1;
    createFood();
  }
};

drawInitialSnake();
createFood();

const moveSnakeInterval = setInterval(moveSnake, 150);

addEventListener("keydown", (e) => changeDirection(e.keyCode));

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection(LEFT_DIR);
rightButton.onclick = () => changeDirection(RIGHT_DIR);
upButton.onclick = () => changeDirection(UP_DIR);
downButton.onclick = () => changeDirection(DOWN_DIR);
