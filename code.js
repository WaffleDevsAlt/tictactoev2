var turn = "X"
var win = " "
var bgc = "#33ff33"
var winsets = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [1, 5, 9],
  [3, 5, 7],
  [3, 6, 9]
]

$(".ttbutton").click(function() {
  if (this.id.includes("a")) {
    return;
  }
  if ($(`#${this.id}a`).html() == "‏‏‎ ‎" && win == " ") {
    console.log("a")
    $(`#${this.id}a`).html(turn)
    turnSet()
  }
  winLogic()
})

$("#reset").click(function() {
  for (var i = 1; i <= 9; i++) {
    $(`#${i}`).css("background-color", "black");
    $(`#${i}a`).html("‏‏‎ ‎")
  }
  turn = "X"
  win = " "
  $("#result").html("It's " + turn + "'s Turn!")
  $("#result").css("left", "45%");
})

function winLogic() {
  for (var i = 0; i < winsets.length; i++) {
    if ($("#" + winsets[i][0] + "a").html() == "X" && $("#" + winsets[i][1] + "a").html() == "X" && $("#" + winsets[i][2] + "a").html() == "X") {

      $("#" + winsets[i][0]).css("background-color", bgc);
      $("#" + winsets[i][1]).css("background-color", bgc);
      $("#" + winsets[i][2]).css("background-color", bgc);
      winner("X")
    } else if ($("#" + winsets[i][0] + "a").html() == "O" && $("#" + winsets[i][1] + "a").html() == "O" && $("#" + winsets[i][2] + "a").html() == "O") {
      $("#" + winsets[i][0]).css("background-color", bgc);
      $("#" + winsets[i][1]).css("background-color", bgc);
      $("#" + winsets[i][2]).css("background-color", bgc);
      winner("O")
    } else if ($("#1a").html() != "‏‏‎ ‎" && $("#2a").html() != "‏‏‎ ‎" && $("#3a").html() != "‏‏‎ ‎" && $("#4a").html() != "‏‏‎ ‎" && $("#5a").html() != "‏‏‎ ‎" && $("#6a").html() != "‏‏‎ ‎" && $("#7a").html() != "‏‏‎ ‎" && $("#8a").html() != "‏‏‎ ‎" && $("#9a").html() != "‏‏‎ ‎") {
      winner("tie")
    }
  }
}

function turnSet() {
  if (turn == "X") {
    turn = "O"
  } else turn = "X"
  $("#result").html("It's " + turn + "'s Turn!")
}

function winner(x) {
  win = x
  if (x == "X") {
    $("#result").html("X Won!")
    $("#result").css("left", "calc(100vw/2 - 55px)");
  } else if (x == "O") {
    $("#result").html("O Won!")
    $("#result").css("left", "calc(100vw/2 - 50px)");
  } else if (x == "tie") {
    $("#result").html("It's a tie!")
    $("#result").css("left", "calc(100vw/2 - 55px)");
    $(`div`).css("border:", "1px solid #ff0000");
  }
}
