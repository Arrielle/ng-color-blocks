colorBlocks.controller('SettingsController', ['DataFactory', function(DataFactory, $scope) {
  console.log("settings controller running");
  var self = this;
  self.specialMessage = 'This site is amazing!';
  self.colors = DataFactory.factoryColors;
  self.newColor = '';
  self.colorObject = {};
  // $scope.colors = self.colors;
  // $scope.scopeColor = ['blue'];
  // convertArrayToObject(self.colors);

  self.addColor = function(){
    console.log('button was clicked');
    self.colors.push(angular.copy(self.newColor));
    console.log(self.colors)

  }

  // function convertArrayToObject(colorArray){
  //   for (var i = 0; i < colorArray.length; i++) {
  //     var newColorObject = {
  //       name: colorArray[i]
  //   };
  //   console.log(newColorObject);
  // }

}]);
