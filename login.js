function enter() {
    localStorage.clear();
    playerone = document.getElementById("player1").value;
    localStorage.setItem("player1", playerone);
    playerone = document.getElementById("player2").value;
    localStorage.setItem("player2", playerone);

    window.location = "quiz.html";
}
