document.getElementById("XacNhanButton2").addEventListener("click",confi2);
document.getElementById("instructionsButton").addEventListener("click", openLevel2);

function confi2(){
    changeView2("menu","howPlay","flex","none");
}

function openLevel2(){
    playMoveSound();
    changeView2("menu","howPlay","none","flex");
    
}


