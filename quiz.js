var sign = "×";
var achance = "player1";
var qchance = "player2";
var signs = ["×", "÷", "+", "-"];
var scoreone = 0;
var scoretwo = 0;

function load() {
    document.getElementById('n1').value = Math.floor(Math.random() * 20) + 1;
    document.getElementById('n2').value = Math.floor(Math.random() * 20) + 1;
    document.getElementById('options').value = signs[Math.floor(Math.random() * 4)];
    playerone = localStorage.getItem("player1");
    document.getElementById('player1name').innerHTML = playerone + ": ";
    playertwo = localStorage.getItem("player2");
    document.getElementById('player2name').innerHTML = playertwo + ": ";
    document.getElementById('question').innerHTML = playerone;
    document.getElementById('answer').innerHTML = playertwo;

}
setInterval(change, 100);
setInterval(score, 100);

function change() {
    sign = document.getElementById('options').value;
}

function enter() {
    var noone = document.getElementById('n1').value;
    var notwo = document.getElementById('n2').value;
    if (sign === "×") {
        answer = parseInt(noone) * parseInt(notwo);
        question = noone + " × " + notwo;
    } else if (sign === "÷") {
        answer = parseInt(noone) / parseInt(notwo);
        question = noone + " ÷ " + notwo;
    } else if (sign === "-") {
        answer = parseInt(noone) - parseInt(notwo);
        question = noone + " - " + notwo;
    } else if (sign === "+") {
        answer = parseInt(noone) + parseInt(notwo);
        question = noone + " + " + notwo;
    }

    if (achance === "player1") {
        achance = 'player2';
        document.getElementById('answer').innerHTML = playertwo;
    } else {
        achance = 'player1'
        document.getElementById('answer').innerHTML = playerone;
    }
    if (qchance === "player1") {
        qchance = 'player2';
        document.getElementById('question').innerHTML = playertwo;
    } else {
        qchance = 'player1'
        document.getElementById('question').innerHTML = playerone;
    }
    var ask = window.prompt(document.getElementById('answer').innerHTML + ", write your answer for " + question);
    if (ask == answer) {
        setTimeout(function () {
            console.log('correct!');
            window.alert('Hurray! Correct answer');
        }, 500);

    } else if (ask != answer) {
        setTimeout(function () {
            console.log('wrong!');
            window.alert('Oh no! Wrong answer');
        }, 500);

    }
    if (achance == "player1") {
        scoreone += 1
        console.log(scoreone);
    } else if (achance == "player2") {
        scoretwo -= 1
        console.log(scoretwo);
    }
    document.getElementById('n1').value = Math.floor(Math.random() * 20) + 1;
    document.getElementById('n2').value = Math.floor(Math.random() * 20) + 1;
    document.getElementById('options').value = signs[Math.floor(Math.random() * 4)]
}

function score() {
    document.getElementById('player1score').innerHTML = scoreone;
    document.getElementById('player2score').innerHTML = scoretwo;
}
