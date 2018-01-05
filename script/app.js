
var app = angular.module("myApp", 
      ['ngRoute','slickCarousel','duParallax','swipe']
   ).config(
      ['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
   
         $routeProvider
         .when('/', {
         templateUrl: '/views/main.html', controller: 'MainCtrl'
         })
         .when('/aboutN18', {
         templateUrl: '/views/aboutN18.html', controller: 'aboutN18Ctrl'
         })
         .when('/whyCapital18', {
         templateUrl: '/views/whyCapital18.html', controller: 'whyCapital18Ctrl'
         })
         .when('/vertical', {
         templateUrl: '/views/vertical.html', controller: 'verticalCtrl'
         })
         .when('/team', {
         templateUrl: '/views/team.html', controller: 'teamCtrl'
         })
         .when('/contact', {
         templateUrl: '/views/contact.html', controller: 'contactCtrl'
         })
         .when('/client', {
         templateUrl: '/views/client.html', controller: 'clientCtrl'
         })
         .when('/cover', {
         templateUrl: '/views/mobCover.html', controller: 'coverCtrl'
         })
         .when('/faq', {
         templateUrl: '/views/faq.html', controller: 'faqCtrl'
         })
         .otherwise({
         redirectTo: '/'
         });

         $locationProvider.html5Mode({ enabled: true, requireBase: true });

}]).run(['$rootScope', function($rootScope) {
    
}]);


app.controller('MainCtrl', ['$rootScope','$scope',function($rootScope,$scope) {
   $rootScope.headerShade=true;
   $rootScope.tabNum='tab00';
   $rootScope.showWhich=true;
   $scope.showWhichLeft=1;
   $scope.redirectFunc = function(event){
      $rootScope.showWhich=!$rootScope.showWhich;
      if ($rootScope.showWhich==true) {
         $rootScope.showWhichLeft=1;
      }else{

      }
      

   };
   $scope.swpLeft = function(event){
      //console.log($scope.showWhichLeft);
      $scope.noSwipeTop=true;
      if ($scope.showWhichLeft<7) {
         
         $scope.showWhichLeft=$scope.showWhichLeft+1;   
         //console.log('left: '+$scope.showWhichLeft);
      }
      
   };
   $scope.swpRght = function(event){
      if ($scope.showWhichLeft>1) {

         $scope.showWhichLeft=$scope.showWhichLeft-1;   
         //console.log('right: '+$scope.showWhichLeft);
      }
      
   };
   
}]);

app.controller('aboutN18Ctrl', ['$rootScope','$scope','parallaxHelper',function($rootScope,$scope,parallaxHelper) {
   $rootScope.showWhich=false;
   $rootScope.headerShade=true;
   $rootScope.tabNum='tab01';
   // /console.log($(window).width());
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {

      $rootScope.headerShade=false;
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
   }
   
}]);

app.controller('verticalCtrl', ['$rootScope','$scope','parallaxHelper',function($rootScope,$scope,parallaxHelper) {
   $rootScope.showWhich=false;
   $rootScope.headerShade=false;
   $rootScope.tabNum='tab03';
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
   }
}]);
app.controller('whyCapital18Ctrl', ['$rootScope','$scope','parallaxHelper',function($rootScope,$scope,parallaxHelper) {
   $rootScope.showWhich=false;
   $rootScope.headerShade=false;
   $rootScope.tabNum='tab02';

}]);
app.controller('teamCtrl', ['$rootScope','$scope','$timeout','parallaxHelper',function($rootScope,$scope,$timeout,parallaxHelper) {
   $rootScope.showWhich=false;
   $rootScope.headerActive=false;
   $rootScope.liLeft=false;
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
   }
   $timeout(function(){
      $rootScope.liLeft=true;
   },1500);
   $timeout(function(){
      $rootScope.headerActive=true;
   },1500);
   
   
   $rootScope.headerShade=false;
   $rootScope.tabNum='tab05';
}]);
app.controller('contactCtrl', ['$rootScope','$scope','$timeout','parallaxHelper',function($rootScope,$scope,$timeout,parallaxHelper) {
   $rootScope.showWhich=false;
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
   }
   $rootScope.headerActive=false;
   $timeout(function(){
      $rootScope.headerActive=true;
   },1500);
   $rootScope.headerShade=false;
   $rootScope.tabNum='tab06';
}]);
app.controller('clientCtrl', ['$rootScope','$scope','$timeout','parallaxHelper',function($rootScope,$scope,$timeout,parallaxHelper) {
   $rootScope.showWhich=false;
   $rootScope.headerActive=false;
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
      $scope.ops = parallaxHelper.createAnimator(0.4, 0, 1, (0-vOffset));
   }
   $timeout(function(){
      $rootScope.headerActive=true;
   },1500);
   $rootScope.headerShade=false;
   $rootScope.tabNum='tab04';
}]);
app.controller('coverCtrl', ['$rootScope','$scope','parallaxHelper',function($rootScope,$scope,parallaxHelper) {
   $rootScope.showWhich=false;
   $rootScope.headerShade=false;
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
   }
   $rootScope.tabNum='tab00';
}]);
app.controller('faqCtrl', ['$rootScope','$scope','parallaxHelper',function($rootScope,$scope,parallaxHelper) {
   $rootScope.showWhich=false;
   $rootScope.headerShade=false;
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
   }
   $rootScope.tabNum='tab00';
}]);