//Name:Main JS skeleton
//version 1.0

var count=0;

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




     // View Controller
    tripApp.controller('mainController', function($scope) {
      $scope.message = 'In Home Controller';
      });


     // About Controller
    tripApp.controller('aboutController', function($scope) {
      $scope.message = 'In about Controller';
         $scope.SendInfo=function () {
          $scope.message="Hello There";
      }
    });

    // Contact  Controller
    tripApp.controller('contactController', function($scope) {
        
        if(count>1) {
                 $scope.message = "Thank you for your message";
            }


    });


