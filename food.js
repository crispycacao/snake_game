import { detectSnake, snakeBody } from "./snake.js";
import { randomGridPosition } from "./grid.js";
let foodPosition = {x: 18, y: 18};


export function update() {
    if(detectSnake(foodPosition)){
        getRandomPosition();
    }
}

export function draw(gameBoard) { 
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = foodPosition.y;
    foodElement.style.gridColumnStart = foodPosition.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomPosition() {
    foodPosition = randomGridPosition();
    snakeBody.forEach(i => {
        if(i.x == foodPosition.x && i.y == foodPosition.y){
            getRandomPosition();
        }
    });
}