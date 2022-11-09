function l(){
var a=Math.floor(Math.random()*100);
var b=Math.floor(Math.random()*100);
var c=Math.floor(Math.random()*100);
var d=Math.floor(Math.random()*100);
var e=Math.floor(Math.random()*100);
var f=Math.floor(Math.random()*100);
document.getElementById("e1").innerHTML=a;
document.getElementById("e2").innerHTML=b;
document.getElementById("e3").innerHTML=c;
document.getElementById("e4").innerHTML=d;
document.getElementById("e5").innerHTML=e;
document.getElementById("e6").innerHTML=f;
}

function r(){
    var audio=document.getElementById("audio");
    audio.play();

    setTimeout(function(){

        audio.pause();
        audio.currentTime = 0;
  

    },400);
}


