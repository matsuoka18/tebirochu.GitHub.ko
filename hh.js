let elapsedTime = 24;
function writeTime(){
 document.getElementById("time1").textContent = '残り時間:' + elapsedTime + '分';
}
writeTime();

const timerId = setInterval(function(){
 elapsedTime--;
 writeTime();
 if(elapsedTime === 0){
 clearInterval(timerId);
}
},60000);

function proc(){
document.getElementById("tts").
pause;
document.getElementById("tts").load;
document.getElementById("tts").play;
}
