colorBlocks.controller('SettingsController', ['DataFactory', '$scope', function(DataFactory, $scope) {
  console.log("settings controller running");
  var self = this;
  self.specialMessage = 'This site is amazing!';
  self.colors = DataFactory.factoryColors;
  self.newColor = '';
  self.newColorObject = {};

  self.addColor = function(){
    console.log('button was clicked');
    self.colors.push({name: angular.copy(self.newColor)});
    console.log(self.colors)
  }

}]);
