let btn=document.querySelector(".button")
let gamest=document.querySelector(".gameStatement");
let gameBoard=document.querySelector(".board")
let gamePlay=false;
let turn="X";
let allcell=document.querySelectorAll(".cell");
let victoryAudio = new Audio("./vicAud.mp3");
let clickAudio = new Audio("./click12.aac");
let wrongAudio = new Audio("./wrongclick.wav");
let tieAudio = new Audio("./tie.mp3");
let gameStart = new Audio("./gamestart.mp3");
let count=0;
btn.addEventListener("click",function(){
    if (gamePlay == false) {
        gamest.innerHTML = "Player X's turn "
        btn.innerHTML = "Reset";
        gameStart.play();
        count = 0;
        turn = "X";
    } else {
        gamest.innerHTML = "";
        btn.innerHTML = "Start"
    }
    clearGrid();
    gamePlay = !gamePlay;
   
})
function clearGrid() {
    for (let i=0;i<allcell.length; i++) {
        allcell[i].innerHTML="";
    }
}

//event deligation 
gameBoard.addEventListener("click",function(event){
    if (gamePlay == true && event.target.innerHTML == "") {

        let myCell = event.target;
        count++;
        clickAudio.play();
        if (turn == "X") {
            myCell.innerHTML = turn;
            myCell.style.color = "black";
            turn = "0";

        } else {
            myCell.innerHTML = turn;
            myCell.style.color = 'red';
            turn = "X";
        }
        gamest.innerHTML = `Player ${turn}'s turn `
        let output = checkWinner();
        if (output == 2) {
            gamest.innerHTML = "Player X wins the Game";
            victoryAudio.play();
            restartGame()
        } else if (output == 1) {
            gamest.innerHTML = "Player 0 wins the Game";
            victoryAudio.play();
            restartGame()
        } else if (count == 9) {
            gamest.innerHTML = "TIE";
          tieAudio.play();
            restartGame()
        }

    }
    else {
        wrongAudio.play();
    }

    
})

function checkWinner() {
    console.log("check win");

    if (
        (allcell[0].innerHTML == "X" &&
            allcell[1].innerHTML == "X" &&
            allcell[2].innerHTML == "X") ||
        (allcell[3].innerHTML == "X" &&
            allcell[4].innerHTML == "X" &&
            allcell[5].innerHTML == "X") ||
        (allcell[6].innerHTML == "X" &&
            allcell[7].innerHTML == "X" &&
            allcell[8].innerHTML == "X") ||
        (allcell[0].innerHTML == "X" &&
            allcell[3].innerHTML == "X" &&
            allcell[6].innerHTML == "X") ||
        (allcell[1].innerHTML == "X" &&
            allcell[4].innerHTML == "X" &&
            allcell[7].innerHTML == "X") ||
        (allcell[2].innerHTML == "X" &&
            allcell[5].innerHTML == "X" &&
            allcell[8].innerHTML == "X") ||
        (allcell[0].innerHTML == "X" &&
            allcell[4].innerHTML == "X" &&
            allcell[8].innerHTML == "X") ||
        (allcell[2].innerHTML == "X" &&
            allcell[4].innerHTML == "X" &&
            allcell[6].innerHTML == "X")
    ) {
        return 2;
    } else if (
        (allcell[0].innerHTML == "0" &&
            allcell[1].innerHTML == "0" &&
            allcell[2].innerHTML == "0") ||
        (allcell[3].innerHTML == "0" &&
            allcell[4].innerHTML == "0" &&
            allcell[5].innerHTML == "0") ||
        (allcell[6].innerHTML == "0" &&
            allcell[7].innerHTML == "0" &&
            allcell[8].innerHTML == "0") ||
        (allcell[0].innerHTML == "0" &&
            allcell[3].innerHTML == "0" &&
            allcell[6].innerHTML == "0") ||
        (allcell[1].innerHTML == "0" &&
            allcell[4].innerHTML == "0" &&
            allcell[7].innerHTML == "0") ||
        (allcell[2].innerHTML == "0" &&
            allcell[5].innerHTML == "0" &&
            allcell[8].innerHTML == "0") ||
        (allcell[0].innerHTML == "0" &&
            allcell[4].innerHTML == "0" &&
            allcell[8].innerHTML == "0") ||
        (allcell[2].innerHTML == "0" &&
            allcell[4].innerHTML == "0" &&
            allcell[6].innerHTML == "0")
    ) {
        return 1;
    } else {
        return 0;
    }

}
function restartGame() {
    btn.innerHTML = "Game is Starting ... ";
    btn.disabled = true;
    gameBoard.classList.add("disabled");

    setTimeout(function () {
        clearGrid();
        btn.disabled = false;
        gameBoard.classList.remove("disabled");
        btn.click();
    }, 3000);
}