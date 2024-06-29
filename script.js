const board = document.querySelector('.game-board');
const squares = document.querySelectorAll('.board'); 
const players = ['X', 'O'];
let currentplayer = players[0];
const endmessage = document.querySelector('.text'); 
const restartbtn = document.querySelector('.restartbtn');
const winning_combo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameOver = false;

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', (e) => {
        if (squares[i].textContent !== '' || gameOver) {
            return;
        }
        squares[i].textContent = currentplayer;
        if (checkWin(currentplayer)) {
            endmessage.textContent = `Game over ${currentplayer} wins!`;
            gameOver = true;
            return;
        }
        if (checkTie()) {
            endmessage.textContent = 'Game is tied!';
            gameOver = true;
            return;
        }
        currentplayer = (currentplayer === players[0]) ? players[1] : players[0];
        endmessage.textContent = `${currentplayer}'s turn`;
    });
}

function checkWin(currentplayer) {
    for (let i = 0; i < winning_combo.length; i++) {
        const [a, b, c] = winning_combo[i];
        if (squares[a].textContent === currentplayer && squares[b].textContent === currentplayer && squares[c].textContent === currentplayer) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;
        }
    }
    return true;
}

restartbtn.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
    endmessage.textContent = "X's turn";
    currentplayer = players[0];
    gameOver = false;
});
