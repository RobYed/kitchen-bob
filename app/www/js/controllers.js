angular.module('starter.controllers', [])

.controller('NavCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
  
  $scope.viewTitle = "Kitchen Bob";
  
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

}])

.controller('HomeCtrl', function($scope, $mdSidenav) {
  $scope.viewTitle = "Kitchen Bob";
})

.controller('RecipeAddCtrl', function($scope) {
  $scope.viewTitle = "Add a new recipe";
})

.controller('RecipeAddIngredientsCtrl', function($scope) {
  $scope.viewTitle = "Add a new recipe";
})

.controller('RecipeAddPreparationCtrl', function($scope) {
  $scope.viewTitle = "Add a new recipe";
})

.controller('RecipeDetailCtrl', function($scope) {
  $scope.viewTitle = "Add a new recipe";
})

.controller('RecipeShoppinglistCtrl', function($scope) {
  $scope.viewTitle = "Add a new recipe";
})

.controller('RecipePreparationCtrl', function($scope) {
  $scope.viewTitle = "Add a new recipe";
});








