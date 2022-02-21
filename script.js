let backGroundMusic = new Audio("");
let turnMusic = new Audio("");
let gameOverMusic = new Audio("");
let turn = "X";
let gameOver = false;

const ChangeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const CheckWinner = () => {
    let boxText = document.getElementsByClassName("box-text");
    let win = [
        [0 ,1, 2, 5, 5, 0, 5, 10, 0],
        [3, 4, 5, 5, 15, 0, 5, 30, 0],
        [6, 7, 8, 5, 25, 0, 5, 50, 0],
        [0, 3, 6, -5, 5, 90, -15, 30, 90],
        [1, 4, 7, 5, 15, 90, 5, 30, 90],
        [2, 5, 8, 15, 15 ,90, 25, 30, 90],
        [0, 4, 8, 5, 15, 45, 5, 30, 45],
        [2, 4, 6, 5, 15, 135, 5, 30, 135]
    ]
    win.forEach(element => {
        if((boxText[element[0]].innerText === boxText[element[1]].innerText) && (boxText[element[2]].innerText === boxText[element[1]].innerText) && (boxText[element[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[element[0]].innerText + " Won";
            gameOver = true;
            document.querySelector(".image-box").getElementsByTagName("img")[0].style.width = "100%";
            let maxWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

            if(maxWidth <= 940) {
                document.querySelector(".line").style.width = "50vw";
                document.querySelector(".line").style.transform = `translate(${element[6]}vw, ${element[7]}vw) rotate(${element[8]}deg)`;
            }
            else {
                document.querySelector(".line").style.width = "20vw";
                document.querySelector(".line").style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`;
            }
        }
    })
}

//backGroundMusic.play();
let box = document.getElementsByClassName("box");
Array.from(box).forEach(element => {
    let boxText = element.querySelector(".box-text");
    element.addEventListener("click", () => {
        if(boxText.innerText === "") {
            boxText.innerText = turn;
            turn = ChangeTurn();
            //turnMusic.play();
            CheckWinner();
            if(!gameOver) {
                document.getElementsByClassName("info")[0].innerText = `Turn For ${turn}`;
            }
        }
    })
})

//let reset = document.getElementsByClassName("button");
reset.addEventListener("click", () => {
    let boxText = document.querySelectorAll(".box-text");
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("info")[0].innerText = `Turn For ${turn}`;
    document.querySelector(".image-box").getElementsByTagName("img")[0].style.width = "0";
})
