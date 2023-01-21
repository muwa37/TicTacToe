let players = ['x', 'o'],
  activePlayer = 0,
  fieldSize = +prompt('Выберите размер поля');
  moveCount = 0,
  waitingPlayer = 1;
  board = [];

for ( let i = 0; i < fieldSize; i++ ) {
  board.push( [] );
  for ( let j = 0; j < fieldSize; j++ ) {
    board[i][j] = '';
  }
}

function startGame () {
  board = [];
  for ( let i = 0; i < fieldSize; i++ ) {
    board.push( [] );
    for ( let j = 0; j < fieldSize; j++ ) {
      board[i][j] = '';
  }
}
  renderBoard( board );
  moveCount = 0;
  activePlayer = 0;
}

function checkForWin ( board ) {
  //parsing board
  for ( let i = 0; i < fieldSize; i++ ) {
    for ( let j = 0; j < fieldSize; j++) {
      //finding last 'x' or 'o'
      if ( board[i][j] === players[waitingPlayer] ) {
        //checking for row
        if ( j < ( fieldSize - 2 ) ) {
          if ( ( board[i][j] === board[i][j+1] ) && ( board[i][j+2] === board[i][j] ) ) {
            showWinner( waitingPlayer );
          }
        }
        //checking for column
        if ( i < ( fieldSize - 2 ) ) {
          if ( ( board[i][j] === board[i+1][j] ) && ( board[i+2][j] === board[i][j] ) ) {
            showWinner( waitingPlayer );
          }
        }
        //checking for diagonal left to right
        if ( ( i < ( fieldSize - 2 ) ) && ( j < ( fieldSize - 2 ) ) ) {
          if ( ( board[i][i] === board[i+1][j+1] ) && ( board[i+2][j+2] === board[i][j] ) ) {
            showWinner( waitingPlayer );
          }
        }
        //checking for diagonal right to left
        if ( ( i >= 2 ) && ( j < ( fieldSize - 2 ) ) ) {
          if ( ( board[i][j] === board[i-1][j+1] ) && ( board[i-2][j+2] === board[i][j] ) ) {
            showWinner( waitingPlayer );
          }
        }
      }
    }
  }
  
}

function click ( rowNum, colNum ) {
  if ( moveCount % 2 === 0 ) {
    board[rowNum][colNum] = players[activePlayer];
    activePlayer = 1;
    waitingPlayer = 0;
  } else {
    board[rowNum][colNum] = players[activePlayer];
    activePlayer = 0;
    waitingPlayer = 1;
  }
  renderBoard( board );
  moveCount++;
  if ( moveCount > 4 ) checkForWin( board );
  if ( moveCount === ( fieldSize * fieldSize ) ) {
    alert ('Ничья!');
    startGame();
  }
}