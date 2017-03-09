colorBlocks.controller('ScoreController',[ 'DataFactory', function(DataFactory) {

console.log('score controller running');
var self = this;
self.playersObjectArray = DataFactory.factoryPlayers;
self.playerArray = [];
self.playerObject = {};

console.log(self.playersObjectArray);

//player object needs
//user input name
//current score

// self.playerObjectFunction = function(inname, inscore){
//   self.playerObject = {
//     name: inname,
//     score: inscore
//   }
//   console.log(self.playerObject);
//   self.playerArray.push({name: angular.copy(self.newColor)})
// }


}]);
