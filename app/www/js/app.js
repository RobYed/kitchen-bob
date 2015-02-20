// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngMaterial', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {


  $mdThemingProvider.theme('default')
    .primaryColor('lime')
    .accentColor('lime');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive

  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'NavCtrl'
  })

// Home tab - always shown at first

  .state('home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })


// Create new recipe and add ingredients and preparation details

  .state('recipe-add', {
      url: '/recipe/add/',
      views: {
        'recipe-add': {
          templateUrl: 'templates/recipe-add.html',
          controller: 'RecipeAddCtrl'
        }
      }
  })
  .state('recipe-add-ingredients', {
      url: '/recipe/add/ingredients/',
      views: {
        'recipe-add-ingredients': {
          templateUrl: 'templates/recipe-add-ingredients.html',
          controller: 'RecipeAddIngredientsCtrl'
        }
      }
  })
  .state('recipe-add-preparation', {
      url: '/recipe/add/preparation/',
      views: {
        'recipe-add-preparation': {
          templateUrl: 'templates/recipe-add-preparation.html',
          controller: 'RecipeAddPreparationCtrl'
        }
      }
  })
    

// Show recipe details and start cooking

  .state('recipe-detail', {
    url: '/recipe/detail/:recipeId',
    views: {
      'recipe-detail': {
        templateUrl: 'templates/recipe-detail.html',
        controller: 'RecipeDetailCtrl'
      }
    }
  })
  .state('recipe-shoppinglist', {
    url: '/recipe/shoppinglist/:recipeId',
    views: {
      'recipe-shoppinglist': {
        templateUrl: 'templates/recipe-shoppinglist.html',
        controller: 'RecipeShoppinglistCtrl'
      }
    }
  })
  .state('recipe-preparation', {
    url: '/recipe/preparation/:recipeId',
    views: {
      'recipe-preparation': {
        templateUrl: 'templates/recipe-preparation.html',
        controller: 'RecipePreparationCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});
