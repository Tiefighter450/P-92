function ready1() {
    playerName1 = document.getElementById("player1_name_input").value;
    localStorage.setItem("playerName1", playerName1);
    document.getElementById("div2").style.display = "block";
    document.getElementById("div1").style.display = "none";
}
function ready2() {
    playerName2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("playerName2", playerName2);
    document.getElementById("div2").style.display = "none";
    document.getElementById("button1").style.display = "block";
}
function go() {
    window.location = "gamepage.html";
}