'use strict';

angular.module('ServiceLocatorApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
					'header': {
                        templateUrl : 'views/header.html',
						controller : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'UserController'
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            // route for the menu page
            .state('app.requestPage', {
                url: 'requestsPage/:SPId',
                views: {
                    'content@': {
                        templateUrl : 'views/requestsPage.html',
                        controller  : 'BookingRequestController'
                    }
                }
            })

            // route for the service provider details page
            .state('app.serviceProviderdetails', {
                url: 'serviceProviderdetails/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/ServiceProvider.html',
                        controller  : 'SPDetailController'
                   }
                }
            })
	;
    
        $urlRouterProvider.otherwise('/');
    })
;
