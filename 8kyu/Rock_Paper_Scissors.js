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
console.log(rps('rock', 'scissors'));   // Player 1 won!
console.log(rps('scissors', 'paper'));  // Player 1 won!
console.log(rps('paper', 'rock'));      // Player 1 won!

console.log(rps('scissors', 'rock'));   // Player 2 won!
console.log(rps('paper', 'scissors'));  // Player 2 won!
console.log(rps('rock', 'paper'));      // Player 2 won!

console.log(rps('rock', 'rock'));       // Draw!
console.log(rps('paper', 'paper'));     // Draw!
console.log(rps('scissors', 'scissors'));// Draw!