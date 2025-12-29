// Rules of the "Rock, Paper, Scissors" game:
//
// Rock beats Scissors
// Scissors beat Paper
// Paper beats Rock
// Two identical moves are a draw.
//
// You will be given valid moves of two players.
// Return:
// "Player 1 won!" if player 1 wins
// "Player 2 won!" if player 2 wins
// "Draw!" if both choose the same move

const rps = (player1, player2) => {
  if (player1 === 'rock') {
    if (player2 === 'rock') return 'Draw!';
    if (player2 === 'paper') return 'Player 2 won!';
    if (player2 === 'scissors') return 'Player 1 won!';
  }

  if (player1 === 'paper') {
    if (player2 === 'rock') return 'Player 1 won!';
    if (player2 === 'paper') return 'Draw!';
    if (player2 === 'scissors') return 'Player 2 won!';
  }

  if (player1 === 'scissors') {
    if (player2 === 'rock') return 'Player 2 won!';
    if (player2 === 'paper') return 'Player 1 won!';
    if (player2 === 'scissors') return 'Draw!';
  }
};
