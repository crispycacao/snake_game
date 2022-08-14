import { getDirection } from "./input.js";

//web game
//snake game
let newBody = 0;
let addBodyAmount = 1;
let a = true;



export const SNAKE_SPEED = 5; // 뱀의 속도

export const snakeBody = [ // 뱀 몸의 좌표를 저장하는 리스트
    { x: 18, y: 11 },
    { x: 19, y: 11 },
    { x: 20, y: 11 },
]

export function update() {
    var direction = getDirection();
    var new_x = snakeBody[0].x + direction.x;
    var new_y = snakeBody[0].y + direction.y;
    addBody();
    snakeBody.unshift({x: new_x, y: new_y});
    snakeBody.pop();
    //push/pop : 배열의 맨 끝 추가/삭제
    //unshift/shift : 배열의 맨 앞 추가/삭제
}

export function draw(gameBoard) { 
    snakeBody.forEach(position => { // 뱀 몸통들을 그리기 위한 forEach문
        const snakeElement = document.createElement('div'); // div태그를 만든다
        snakeElement.style.gridRowStart = position.y; // div태그의 x, y 를 설정한다.
        snakeElement.style.gridColumnStart = position.x;
        snakeElement.classList.add('snake'); // div태그의 클래스 이름을 snake로 설정한다.
        gameBoard.appendChild(snakeElement); // 최종적으로 gameBoard에 div태그를 추가
    });
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    for(let i=1; i<snakeBody.length; i++){
        if(snakeBody[i].x == snakeBody[0].x && snakeBody[i].y == snakeBody[0].y){
            alert("Game Over");
            alert(`Score : ${snakeBody.length - 3}`);
            location.href="./snake_game.html";
            a = false;
            break
        } else {
            a = true;
        }
    }
    return a;
}

export function expandSnake(amount) { // 뱀의 길이를 늘이는 함수
    newBody += amount;
}

export function detectSnake(vertex, { ignoreHead = false } = {}) { // 뱀이 특정 좌표와 겹치는지 확인하는 함수 ( ignoreHead옵션이 없다면 false로 설정.)
    return equalPositions(vertex, snakeBody[0]);
}

function equalPositions(vertex1, vertex2) {
    if(vertex1.x == vertex2.x && vertex1.y == vertex2.y){
        expandSnake(addBodyAmount);
        return true;
    } else {
        return false;
    }
}

function addBody() {
    for(newBody; newBody>0; newBody--){
        snakeBody.push(snakeBody[-1]);
    }
    if(snakeBody.length >= 400){
        alert("YOU WIN!!");
        
    }
}
