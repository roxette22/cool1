// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngSanitize'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tabs',{
            url:'/tabs',
            abstract:true,
            templateUrl:'templates/tabs.html'
        })
    
          
        .state('tabs.home',{
            url:'/home',
            views:{
                'home-tab':{
                    templateUrl:'templates/home.html'
                }  
            }
        })
    
    
     .state('tabs.menu',{
            url:'/menu',
            views:{
                'menu-tab':{
                    templateUrl:'templates/menu.html',
                    controller:'PageController'
                     
                }  
            }
        })
    
    .state('tabs.pages',{
            url:'/menu/:id',
            views:{
                'menu-tab':{
                    templateUrl:'templates/pages.html',
                    controller:'PageController'
                }
            }
        
    })
    
    .state('tabs.details',{
            url:'/menu/:id/:subid',
            views:{
                'menu-tab':{
                    templateUrl:'templates/details.html',
                    controller:'PageController'
                }
            }
        
    })
    
    
    
    
    
        .state('tabs.maps',{
            url:'/maps',
            views:{
                'map-tab':{
                    templateUrl:'templates/maps.html',
                    controller:'TestController'
                }  
            }
        })
    
   
        $urlRouterProvider.otherwise('/tabs/home');
})


.controller('PageController', ['$scope', '$http', '$state',

    function ($scope, $http, $state) {
        $http.get('js/data.json').success(function (data) {
            $scope.pages = data;
           $scope.whichpage= $state.params.id;  
            $scope.whichpageid = $state.params.subid;
        });

}])


.controller('TestController', ['$scope', '$http','$sce',

    function ($scope, $http) {
        $http.get('js/page-data.json').success(function (data) {
            $scope.tests = data;
                            
        });

}]);
