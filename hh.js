let elapsedTime = 24;
function writeTime(){
 document.getElementById("time1").textContent = '残り時間:' + elapsedTime + '時間';
}
writeTime();

const timerId = setInterval(function(){
 elapsedTime--;
 writeTime();
 if(elapsedTime === 0){
 clearInterval(timerId);
}
},1000);

function proc(){
document.getElementById("tts").
pause;
document.getElementById("tts").load;
document.getElementById("tts").play;
}