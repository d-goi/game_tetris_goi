const canvaRand = document.getElementById("canvasRand");
const ctxRand = canvaRand.getContext("2d");

function drawRandBlock(x,y,color){
    ctxRand.fillStyle = color;
    ctxRand.fillRect(x*SIZE,y*SIZE,SIZE,SIZE);

    ctxRand.strokeStyle = '#333333';
    ctxRand.lineWidth = 0.5;
    ctxRand.strokeRect(x*SIZE,y*SIZE,SIZE,SIZE);
}

function drawShapeRand(){
    for(let r = 0;r <ROW_R; r++){
        for(let c=0; c<COL_R; c++){
            drawRandBlock(c,r,'white');
            
        }
    }
    for(let r = 0;r <shapeRand.length; r++){
        for(let c=0; c<shapeRand[r].length; c++){
            if(shapeRand[r][c]){
                drawRandBlock(c,r,colorRand);
            }
        }
    }
}
function getShape(){
    shapeNext = randDomShape();
}
var ROW_R = 2;
var COL_R = 4;
var colorRand;
var shapeRand;
var shapeNext;
var isShapeNext;