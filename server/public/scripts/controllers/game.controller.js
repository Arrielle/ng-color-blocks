colorBlocks.controller('GameController',[ 'DataFactory', function(DataFactory) {

console.log('game controller running');

var self = this;
//gets the array of color objects from the data factory
self.colors = DataFactory.factoryColors;
//gets the array of player objects from the data factory
self.players = DataFactory.factoryPlayers;
//finds the most recent high score (should be the highest score)
self.score = self.players[self.players.length - 1].highscore;
//sets a new player to an empty string
self.newPlayer = '';
//sets a new highscore to false (to hide and unhide things in html)
self.newHighScore = false;


self.newScore = function(){
  console.log('button was clicked');
  self.players.push({name: angular.copy(self.newPlayer), highscore: self.currentScore})
  console.log('self.players', self.players);

}

// if (currentScore > highScore){
//   self.newHighScore == true;
// } else {
//   self.newHighScore == false;
// }

// start game
init();
self.currentScore = 0;
self.highScore = self.score;

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor.name + ' block?'
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    self.currentScore++;
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
    self.currentScore--;
  }

  if (self.currentScore > self.highScore){
    self.newHighScore = true;
  } else {
    self.newHighScore = false;
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);

//SETTINGS FUNCTIONS
