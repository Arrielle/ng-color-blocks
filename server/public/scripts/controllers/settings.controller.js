colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory, $scope) {
  console.log("settings controller running");
  var self = this;
  self.specialMessage = 'This site is amazing!';
  self.colors = DataFactory.factoryColors;

  self.newColor = '';


  self.addColor = function(){
    console.log('button was clicked');
    self.colors.push(angular.copy(self.newColor));
    console.log(self.colors)

  }

}]);
