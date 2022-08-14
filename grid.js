import { snakeBody } from "./snake.js";

const GRID_SIZE = 20;

export function randomGridPosition() {
    return { x : Math.floor(Math.random()*20) + 1, y : Math.floor(Math.random()*20) + 1 };
}

export function outsideGrid(vertex) {
    if(vertex.x > GRID_SIZE || vertex.x < 1 || vertex.y < 1 || vertex.y > GRID_SIZE){
        alert("Game Over");
        alert(`Score : ${snakeBody.length - 3}`);
        location.href="./snake_game.html";
        return false;
    } else {
        return true;
    }
}