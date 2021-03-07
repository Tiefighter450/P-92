function addUsers() {
    playerName1 = localStorage.getItem("playerName1");
    playerName2 = localStorage.getItem("playerName2");
    player1Score = 0;
    player2Score = 0;
    document.getElementById("playerName1").innerHTML = playerName1 + ": ";
    document.getElementById("playerName2").innerHTML = playerName2 + ": ";
}

function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1) * parseInt(number2);
    questionNumber = "<h4>" + number1 + " X " + number2 + "</h4>";
    inputBox = "<br> Answer: <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br> <button class='btn btn-info' onclick='check()'> Check </button>";
    row = questionNumber + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    questionTurn = "player1";
    answerTurn = "player2";
}


function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    if (getAnswer == actualAnswer) {
        if (answerTurn == "player1") {
            updatePlayer1Score = player1Score + 1;
            document.getElementById("playerScore1").innerHTML = updatePlayer1Score;
        } else {
            updatePlayer2Score = player2Score + 1;
            document.getElementById("playerScore2").innerHTML = updatePlayer2Score;
        }

    }
    if (questionTurn == "player1") {
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + playerName2;
    } else {
        updatePlayer2Score = player2Score + 1;
        document.getElementById("playerQuestion").innerHTML = "Question Turn - " + playerName1;
    }
}