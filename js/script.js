
document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("easyToHard").addEventListener("click", setETH);

let btnExit = false;
const myBtnExit = document.getElementsByClassName("thoatButton")[0]
myBtnExit.addEventListener("mouseenter", function(){
    btnExit = true;
});
myBtnExit.addEventListener("click", function(){
    if(btnExit){
        exitGame();
        btnExit = false;
    }
});

let btnStop = false;
const myBtnStop = document.getElementsByClassName('dungButton')[0];
myBtnStop.addEventListener('mouseenter',function(){
    btnStop = true;
})
myBtnStop.addEventListener('click',function(){
    if(btnStop){
        alert('Tiếp tục');
        btnStop = false;
    }
})

function changeView(nameMenu,nameId,menu,game){
    document.getElementsByClassName(nameMenu)[0].style.display = menu;
    document.getElementById(nameId).style.display = game;
}
function startGame() {
    piece = randDomShape();
    SCORE = 90;
    gameOver = false;
    init();
    run();
    changeView("menu","game-container","none","flex")
}
function exitGame(){
        var con = confirm('Bạn có thật sự muốn thoát ?');
        if (con){
            clearInterval(interval);
            changeView("menu","game-container","flex","none")
            ETH = false;
            oldScore = 0;
        }
}
function init(){
    getShape();
    drawShapeRand();
    setTimePlayer();
    initBoard();
    drawBoard();
}
function setETH(){
    oldScore = 0;
    ETH = true;
    startGame();
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ROW = 20;
const COL = 10;
const SIZE = 30;
const COLOR = "black";
let SCORE = 0;
let ETH = false;
let oldScore;

const BlockAll = [
    [BlockZ,"red"],
    [BlockS,'yellow'],
    [BlockT,'#007fff'],
    [BlockO,'#00ff00'],
    [BlockL,'pink'],
    [BlockI,'cyan'],
    [BlockJ,'orange']
];

function drawBlock(x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SIZE,y*SIZE,SIZE,SIZE);

    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 0.5;
    ctx.strokeRect(x*SIZE,y*SIZE,SIZE,SIZE);
}

function initBoard(){
    for(r = 0;r<ROW;r++){
        board[r] = [];
        for(c=0;c<COL;c++){
            board[r][c] = COLOR;
        }
    }
}

function drawBoard(){
    for(r=0; r<ROW; r++){
        for(c=0; c<COL; c++){
            drawBlock(c,r,board[r][c]);
        }
    }
}

function randDomShape(){
    let r = Math.floor(Math.random()*BlockAll.length);
    let p = new Shape(BlockAll[r][0],BlockAll[r][1])
    colorRand = p.color;
    shapeRand = p.mainBlock;
    return p;
}
document.addEventListener('keydown', function(e){
    if(e.key == "ArrowLeft"){
        piece.moveLeft();
    }else if(e.key == "ArrowRight"){
        piece.moveRight();
    }else if(e.key == "ArrowUp"){
        piece.rotate();
    }else if(e.key == "ArrowDown"){
        piece.moveDown();
    }else if(e.key === "Space" || e.key === " "){
        piece.dropBlock();
    }
})

function run(){
    interval = setInterval(function(){
        if(!gameOver){
            piece.moveDown();
        }else{
            clearInterval(interval);
        }
    }, DELAY)
}
let board = [];
var piece;
var gameOver = false;
var interval;
