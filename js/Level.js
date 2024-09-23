document.getElementById("levelButton").addEventListener("click", openLevel);
document.getElementById("XacNhanButton").addEventListener("click",confi);

document.getElementById("giamButton").addEventListener("click",reduceLevel);
document.getElementById("tangButton").addEventListener("click",increaseLevel);

function changeView2(nameMenu,nameId,menu,game){
    document.getElementsByClassName(nameMenu)[0].style.display = menu;
    document.getElementById(nameId).style.display = game;
}
function confi(){
    setDelay();
    changeView2("menu","levelSelector","flex","none");
}

function openLevel(){
    changeView2("menu","levelSelector","none","block");
}
function increaseLevel(){
    moveSound();
    if(LEVEL < 6){
        LEVEL++;
        document.querySelector("#selectLevel").textContent = LEVEL;
    }
}
function reduceLevel(){
    moveSound();
    if(LEVEL > 1){
        LEVEL--;
        document.querySelector("#selectLevel").textContent = LEVEL;
    }
}
function setDelay(){
    DELAY = 600 - ((LEVEL - 1) * 100);
    document.querySelector("#level").textContent = LEVEL;
}
var LEVEL = 1;
var DELAY = 600;


