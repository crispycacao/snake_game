import { SNAKE_SPEED ,update as updateSnake, draw as drawSnake, snakeIntersection, getSnakeHead } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js'; 
import { outsideGrid } from './grid.js';


let lastRenderTime = 0; // 마지막으로 랜더링한 시간
let isPlaying = false;


const gameBoard = document.getElementById('game-board'); // id이름이 'game-board'인 게임판을 가져온다.


function main(currentTime) { // main은 계속 loop
    if(isPlaying){
        window.requestAnimationFrame(main); // render되기 전에 main함수를 호출하고 랜더링 함
        
        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; // 마지막 랜더링으로부터 지난 시간 계산
        if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // 너무 빠른 간격으로 랜더링 된 프레임은 return하여 속도를 유지한다.

        lastRenderTime = currentTime; // lastRenderTime을 갱신한다.
        //console.log(currentTime); // currentTime을 log에서 확인해본다.
        //console.log(secondsSinceLastRender); // secondsSinceLastRender를 확인하여 몇초마다 랜더링되는지 확인한다.

        
        upate();
        draw();
        isPlaying = snakeIntersection();
        if(isPlaying){
            isPlaying = outsideGrid(getSnakeHead());
        }
    }
}

function upate(){
    gameBoard.innerHTML = "";
    updateSnake();
    updateFood();
}

function draw(){
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

export function gameOver(){
    
}

if(!isPlaying){
    alert("Game Start");
    isPlaying = true;
    window.requestAnimationFrame(main);
}
