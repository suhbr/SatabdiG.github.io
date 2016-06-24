//Name:Main JS skeleton
//version 1.0

$(window).load(function () {
    $('<img/>').attr('src', 'css/Pictures/mapbackground.jpg').load(function() {
    $(this).remove(); // prevent memory leaks as @benweet suggested
   $('body').css('background-image', 'url(css/Pictures/mapbackground.jpg)');
        });
    $('#poster').click(function(){this.paused?this.play():this.pause();
    
        //Display big transparent button
    
    
    });
});



function myfunc()
{
    ga('send','event','Submit button','click','buttonclick');
    var emailid=$("#email").val();

    if(emailid != '')
    {
        if(!isValidEmailAddress(emailid))
            {
                 $("#textnow").css("color","#ff4d4d");
                $("#textnow").text("Please enter a valid email address");

            }
        else
        {
             $("#textnow").css("color","#8181F7");
            $("#textnow").text("Thank you for the message");
             ga('send','event','Submit done','click','buttonclick');
            $("#myform").submit();

        }

    }
    else
    {
         console.log(emailid);
          $("#textnow").css("color","#ff4d4d");
         $("#textnow").text("Please enter a email id");
    }

}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

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
      $scope.message = '';


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


