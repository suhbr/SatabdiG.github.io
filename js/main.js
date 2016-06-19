//Name:Main JS skeleton
//version 1.0


var tripApp = angular.module('tripApp', ['ngRoute']);

    tripApp.config(function($routeProvider){

       $routeProvider

           .when('/',{
               templateUrl:'partials/home.html',
               controller:'mainController'

           })

            .when('/about',{
               templateUrl:'partials/aboutus.html',
               controller:'aboutController'

           })

             .when('/contact',{
               templateUrl:'partials/contact.html',
               controller:'contactController'

           });

    });




    // create the controller and inject Angular's $scope
    tripApp.controller('mainController', function($scope) {

      // create a message to display in our view
      $scope.message = 'In Home Controller';
    });

    tripApp.controller('aboutController', function($scope) {

      // create a message to display in our view
      $scope.message = 'In about Controller';
    });

    tripApp.controller('contactController', function($scope) {

      // create a message to display in our view
      $scope.message = 'In contact Controller';
    });


