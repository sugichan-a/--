t = 0;
var value = document.getElementById("myid")

function myfun(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    value.innerHTML = hours + ":" + minutes + ":" + seconds;
}
// myfun();
 t=setInterval(myfun,500);