let game = [
    ["","",""],
    ["","",""],
    ["","",""],

];

let player = "0";

function play(x, y) {
    if (player == "X") {
        player = "0";
    } else {
        player = "X"
    }

    game[x][y] = player;
    document.getElementById(`${x}${y}`).innerText = player;

    if (game[0][0] == player && game[0][1] == player && game[0][2] == player)
}