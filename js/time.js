function updateSeconds() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const time = document.getElementById("time");
    time.innerHTML = ` ${hours}:${minutes}:${seconds}`;

    secon++;
    if(secon == 60){
        min++;
        secon =0;
    }
    if(min == 60){
        hou++;
        min=0;
    }
    const time2 = document.getElementById("time2");
    time2.innerHTML = ` ${hou}:${min}:${secon}`;
  }
  setInterval(updateSeconds, 1000);

  function setTimePlayer(){
    secon = 0;
    min = 0;
    hou = 0;
  }
  var secon;
  var min;
  var hou;

