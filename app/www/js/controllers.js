angular.module('starter.controllers', [])


.controller('HomeCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  
  $scope.viewTitle = "Kitchen Bob";
  
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

}])

.controller('RecipeAddCtrl', function($scope) {
  $scope.viewTitle = "Add a new recipe";
})

.controller('RecipeAddIngredientsCtrl', function($scope) {
  
})

.controller('RecipeAddPreparationCtrl', function($scope) {
  
})

.controller('RecipeDetailCtrl', function($scope) {
  
})

.controller('RecipeShoppinglistCtrl', function($scope) {
  
})

.controller('RecipePreparationCtrl', function($scope) {
  
});








