var min = 0;
var sec = 0;
var msec = 0;
var interval;


var minute =  document.getElementById("min");
var second = document.getElementById("sec");
var milisecond =  document.getElementById("msec");

function timer(){
    msec++;
    milisecond.innerHTML = msec;
    if(msec >= 100){
        sec++;
        second.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++;
        minute.innerHTML = min;
        sec = 0;
    }
}


function start(){
     interval = setInterval(timer, 10);
     if(msec >= 0 ){
        document.getElementById("disabled").disabled = "true";
         
     }
}
   

function pause(){
    clearInterval(interval);
    document.getElementById("disabled").disabled = false;
}

function reset(){

    min = 0;
    sec = 0;
    msec = 0;
    
    minute.innerHTML = min;
    second.innerHTML = sec;
    milisecond.innerHTML = msec;
    pause();
   
    document.getElementById("disabled").disabled = false;
}
