var pr = 0;
var p;
var dots;
function enter() {
    document.getElementById('loading').style.visibility = "visible";
    localStorage.clear();
    playerone = document.getElementById("player1").value;
    localStorage.setItem("player1", playerone);
    playerone = document.getElementById("player2").value;
    localStorage.setItem("player2", playerone);
load();

    
}
function load() {

setInterval(function () {
    
pr += Math.floor(Math.random() * 4);
document.getElementById('p').value = pr;
p = document.getElementById('p').value;
if (p == 100) {
    setTimeout(function() {
        window.location = "quiz.html";
    }, 500);
   
}
}, 250);


}