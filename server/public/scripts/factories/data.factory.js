colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  // var colors = ['red', 'blue', 'magenta', 'green', 'pink'];

  var colors = [{name:'red'}, {name: 'blue'}, {name: 'magenta'}, {name: 'green'}, {name: 'pink'}];


  return {
    factoryColors: colors
  }
}]);
