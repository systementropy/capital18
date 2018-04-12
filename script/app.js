
var app = angular.module("myApp", 
      ['ngRoute','slickCarousel','duParallax','swipe','youtube-embed']
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


app.controller('MainCtrl', ['$rootScope','$scope','$window',function($rootScope,$scope,$window) {
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
   function init(){
      $scope.theBestVideo = 'Z_s5jS6amHg';
      var w = angular.element($window);
      var wWid=w.width();
      var wHig=w.height();
      // console.log(wHig/wWid);
      if (wHig/wWid>=0.5625) {
         // var vidHeight= $(window).height(); 
         // var vidWidth= (vidHeight*16)/9;
         // $('.videoBg').css('width', vidWidth);  
         $scope.pHigh=parseInt(wHig);
         $scope.pWid=parseInt((wWid*16)/9);
      }else{
         $scope.pWid=parseInt(w.width());
         $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));
      }

      $scope.playerVars = {
          'autoplay': 1,
          'controls': 0, 
          'rel' : 0,
          'showinfo':0,
          'fs' : 0,
          'loop': 1,
          'mute':1
      };
      $scope.enableYT=true;
      $scope.$on('youtube.player.ended', function ($event, player) {
        player.playVideo();
      });
   };
   init();
   
}]);

app.controller('aboutN18Ctrl', ['$rootScope','$scope','parallaxHelper','$window',function($rootScope,$scope,parallaxHelper,$window) {
   $rootScope.showWhich=false;
   $rootScope.headerShade=true;
   $rootScope.tabNum='tab01';
   // /console.log($(window).width());
   var vOffset = $(window).height()*0.75;
   if ($(window).width()<1000) {

      $rootScope.headerShade=false;
      $scope.transY = parallaxHelper.createAnimator(0.4, 30, -10, (0-vOffset));
   }
   function init(){
      $scope.data=[
          {'img':"/images/resized/CNBC-TV18.gif",'href':"",'class':''},
          {'img':"/images/resized/CNBC-Awaaz.gif",'href':"",'class':''},
          {'img':"/images/resized/CNN-News-18.gif",'href':"",'class':''},
          {'img':"/images/resized/NEWS18-India.gif",'href':"",'class':''},
          {'img':"/images/resized/News18Urdu.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18Rajasthan.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18BiharJharkhand.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18MPChattisgarh.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18UPandUK.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18TamilnaduLogo.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18Bangla.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18KannadaLogo.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18Gujarati.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/News18Odiya.png",'href':"",'class':'portfolioItem'},
          {'img':"/images/resized/MonetControl.gif",'href':"",'class':''},
          {'img':"/images/resized/NEWS18-com.gif",'href':"",'class':''},
          {'img':"/images/resized/Firstpost.gif",'href':"",'class':''},
          {'img':"/images/resized/CNBCTV18-Logo.png",'href':"",'class':'portfolioItemCNBC'},
          {'img':"/images/resized/incom.gif",'href':"",'class':''},
          {'img':"/images/resized/Toppers.gif",'href':"",'class':''},
          {'img':"/images/resized/Forbes.gif",'href':"",'class':''},
          {'img':"/images/resized/BI.gif",'href':"",'class':''},
          {'img':"/images/resized/BP.gif",'href':"",'class':''},
          {'img':"/images/resized/overdrive.gif",'href':"",'class':''},
          {'img':"/images/resized/colors.gif",'href':"",'class':''},
          {'img':"/images/resized/colors-Infinity.gif",'href':"",'class':''},
          {'img':"/images/resized/Colors_udiya.gif",'href':"",'class':''},
          {'img':"/images/resized/colors-Bangla.gif",'href':"",'class':''},
          {'img':"/images/resized/colors-Gujarati.gif",'href':"",'class':''},
          {'img':"/images/resized/colors-Kannad.gif",'href':"",'class':''},
          {'img':"/images/resized/Colors-Marathi.png",'href':"",'class':''},
          {'img':"/images/resized/colors-SUPER.gif",'href':"",'class':''},
          {'img':"/images/resized/rishtey.gif",'href':"",'class':''},
          {'img':"/images/resized/Rishtey-gold.gif",'href':"",'class':''},
          {'img':"/images/resized/Rishtey-CINEPLEX.gif",'href':"",'class':''},
          {'img':"/images/resized/History-TV.gif",'href':"",'class':''},
          {'img':"/images/resized/fyi.gif",'href':"",'class':''},
          {'img':"/images/resized/nicklodeon.gif",'href':"",'class':''},
          {'img':"/images/resized/sonic.gif",'href':"",'class':''},
          {'img':"/images/resized/Nick-Jr.gif",'href':"",'class':''},
          {'img':"/images/resized/MTV.gif",'href':"",'class':''},
          {'img':"/images/resized/MBeats.gif",'href':"",'class':''},
          {'img':"/images/resized/MTV-Indies.gif",'href':"",'class':''},
          {'img':"/images/resized/VH1.gif",'href':"",'class':''},
          {'img':"/images/resized/CC.gif",'href':"",'class':''},
          {'img':"/images/resized/viacom.gif",'href':"",'class':''},
          {'img':"/images/resized/india_cast.png",'href':"",'class':''}
      ];
      $scope.theBestVideo = 'fEC3VqzRvwg';
      var w = angular.element($window);
      var wWid=w.width();
      var wHig=w.height();
      console.log(wHig/wWid);
      if (wHig/wWid>=0.5625) {
         // var vidHeight= $(window).height(); 
         // var vidWidth= (vidHeight*16)/9;
         // $('.videoBg').css('width', vidWidth);  
         $scope.pHigh=parseInt(wHig);
         $scope.pWid=parseInt((wWid*16)/9);
      }else{
         $scope.pWid=parseInt(w.width());
         $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));
      }
      // $scope.pWid=parseInt(w.width());
      // $scope.pHigh=parseInt(((parseInt(w.width())*9)/16));

      $scope.playerVars = {
          'autoplay': 1,
          'controls': 0, 
          'rel' : 0,
          'showinfo':0,
          'fs' : 0,
          'loop': 1,
          'mute':1
      };
      $scope.enableYT=true;
      $scope.$on('youtube.player.ended', function ($event, player) {
         player.seekTo(53.8);
         player.pauseVideo();
        //player.playVideo();
      });
   };
   init();

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