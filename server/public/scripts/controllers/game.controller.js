colorBlocks.controller('GameController',[ 'DataFactory', function(DataFactory) {

console.log('game controller running');

var self = this;
self.colors = DataFactory.factoryColors;

// start game
init();
self.currentScore = 0;

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
    console.log(self.currentScore);
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
    self.currentScore--;
    console.log(self.currentScore);
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);

//SETTINGS FUNCTIONS
