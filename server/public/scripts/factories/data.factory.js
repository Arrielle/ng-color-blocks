colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  // var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

  var colors = [{name:'red'}, {name: 'hidden'}, {name: 'magenta'}, {name: 'green'}, {name: 'pink'}];
  var players = [{name:'Arrielle', highscore: 9}, {name: 'Jen', highscore: 4}];

  return {
    factoryColors: colors,
    factoryPlayers: players
  }
}]);
