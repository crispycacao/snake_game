import { snakeBody } from "./snake.js";


let inputDirection     = { x: -1, y: 0 }; // 현재 입력받는 방향의 변화량
let prevInputDirection = { x: -1, y: 0 }; // 이전 입력 방향의 변화량


window.addEventListener('keydown', event => {
    //console.log(event.key);
    if(event.key == 'ArrowUp' && prevInputDirection.y != 1 && snakeBody[0].x != snakeBody[1].x) {
        inputDirection.x = 0, inputDirection.y = -1;
        //console.log('up');
    } else if(event.key == 'ArrowDown' && prevInputDirection.y != -1 && snakeBody[0].x != snakeBody[1].x) {
        inputDirection.x = 0, inputDirection.y = 1;
        //console.log('down');
    } else if(event.key == 'ArrowRight' && prevInputDirection.x != -1 && snakeBody[0].y != snakeBody[1].y) {
        inputDirection.x = 1, inputDirection.y = 0;
        //console.log('right');
    } else if(event.key == 'ArrowLeft' && prevInputDirection.x != 1 && snakeBody[0].y != snakeBody[1].y) {
        inputDirection.x = -1, inputDirection.y = 0;
        //console.log('left');
    }
});

export function getDirection() {
    prevInputDirection = inputDirection;
    return inputDirection;
}