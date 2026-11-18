
/*------------- Constants --------------------------------*/


/*--------- Variables (state) ----------------------------*/
let currentPlayer = 'X'
let isGameOver = false
let moveCount = 0
const resetBtn = document.getElementById('reset')


/*----- Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')

const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')


/*------------- Functions --------------------------------*/

// Display the first player's turn
messageEl.textContent = `It's ${currentPlayer}'s turn`

// Check if the current player wins
function checkWinner() {
    if (
        (sqr0El.textContent === currentPlayer && sqr1El.textContent === currentPlayer && sqr2El.textContent === currentPlayer) ||
        (sqr3El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr5El.textContent === currentPlayer) ||
        (sqr6El.textContent === currentPlayer && sqr7El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
        (sqr0El.textContent === currentPlayer && sqr3El.textContent === currentPlayer && sqr6El.textContent === currentPlayer) ||
        (sqr1El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr7El.textContent === currentPlayer) ||
        (sqr2El.textContent === currentPlayer && sqr5El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
        (sqr0El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr8El.textContent === currentPlayer) ||
        (sqr2El.textContent === currentPlayer && sqr4El.textContent === currentPlayer && sqr6El.textContent === currentPlayer)
    ) {
        messageEl.textContent = `${currentPlayer} wins!`
        isGameOver = true
        return true
    }

    return false
}

// Check if the game is a tie
function checkTie() {
    if (moveCount === 9) {
        messageEl.textContent = "It's a Tie!"
        isGameOver = true
        return true
    }

    return false
}

// Change the current player
function switchPlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }

    messageEl.textContent = `It's ${currentPlayer}'s turn`
}


/*---------- Event Listeners -----------------------------*/

sqr0El.addEventListener('click', () => {
    if (sqr0El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr0El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr1El.addEventListener('click', () => {
    if (sqr1El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr1El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr2El.addEventListener('click', () => {
    if (sqr2El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr2El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr3El.addEventListener('click', () => {
    if (sqr3El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr3El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr4El.addEventListener('click', () => {
    if (sqr4El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr4El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr5El.addEventListener('click', () => {
    if (sqr5El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr5El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr6El.addEventListener('click', () => {
    if (sqr6El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr6El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr7El.addEventListener('click', () => {
    if (sqr7El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr7El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})


sqr8El.addEventListener('click', () => {
    if (sqr8El.textContent !== '' || isGameOver === true) {
        console.log('the square is not empty')
        return
    } else {
        sqr8El.textContent = currentPlayer
        moveCount++

        if (checkWinner()) return
        if (checkTie()) return

        switchPlayer()
    }
})
function resetGame() {
 
    sqr0El.textContent = ''
    sqr1El.textContent = ''
    sqr2El.textContent = ''
    sqr3El.textContent = ''
    sqr4El.textContent = ''
    sqr5El.textContent = ''
    sqr6El.textContent = ''
    sqr7El.textContent = ''
    sqr8El.textContent = ''

    currentPlayer = 'X'
    isGameOver = false
    moveCount = 0

    messageEl.textContent = `It's ${currentPlayer}'s turn`
}
resetBtn.addEventListener('click', resetGame)