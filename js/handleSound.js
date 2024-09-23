const hoverSound = document.getElementById('hoverHover');
document.getElementById('sound').addEventListener('click',changSound);
document.getElementById('music').addEventListener('click',changSound2);
document.getElementById('startButton').addEventListener('mouseenter',playMoveSound);
document.getElementById('easyToHard').addEventListener('mouseenter',playMoveSound);
document.getElementById('levelButton').addEventListener('mouseenter',playMoveSound);
document.getElementById('sound').addEventListener('mouseenter',playMoveSound);
document.getElementById('music').addEventListener('mouseenter',playMoveSound);
document.getElementById('instructionsButton').addEventListener('mouseenter',playMoveSound);

function changSound(){
    rotateSound();
    if(SOUND === 'ON'){
        SOUND = 'OFF';
        document.querySelector('#onSound').textContent = SOUND;
    }else{
        SOUND = 'ON';
        document.querySelector('#onSound').textContent = SOUND;
    }
}
function changSound2(){
    rotateSound();
    const musicGame = document.getElementById('musicGame');
    if(MUSIC === 'ON'){
        MUSIC = 'OFF';
        document.querySelector('#onMusic').textContent = MUSIC;
        musicGame.pause();
    }else{
        MUSIC = 'ON';
        document.querySelector('#onMusic').textContent = MUSIC;
        musicGame.play();
        musicGame.volume = 0.2;
    }
}
function playMoveSound() {
    if(SOUND ==='ON'){
        hoverSound.play();
    }
}
function moveSound(){
    document.getElementById('moveSound').play();
}
function rotateSound(){
    document.getElementById('rotateSound').play();
}
function dropSound(){
    document.getElementById('dropSound').play();
}
function removeSound(){
    document.getElementById('removeSound').play();
}
function endGameSound(){
    document.getElementById('endSound').play();
}

var SOUND = 'ON';
var MUSIC = 'OFF';
