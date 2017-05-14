'use strict';

angular.module('ServiceLocatorApp',[])
//userController is used to display all the service providers on the Home.html
.controller('UserController', ['$scope','$stateParams', 'serviceLocatorFactory' , function($scope, $stateParams, serviceLocatorFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            
            $scope.showMenu = false;
            $scope.message = "Loading ...";
									   
			$scope.serviceProviders = [];
			
			$scope.serviceProviders = serviceLocatorFactory.getUsers().query(
				function(response) {
                    $scope.serviceProviders = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

            $scope.select = function(setServiceType) {
                $scope.tab = setServiceType;
                
                if (setServiceType === 2) {
                    $scope.filtText = "Plumber";
                }
                else if (setServiceType === 3) {
                    $scope.filtText = "Electrician";
                }
                else if (setServiceType === 4) {
                    $scope.filtText = "Gardener";
                }
                else {
                    $scope.filtText = "Transporter";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

//SPDetailController to fetch the service provider's details to display on ServiceProvider.html 
.controller('SPDetailController', ['$scope','$stateParams', 'serviceLocatorFactory' , function($scope, $stateParams, serviceLocatorFactory) {
            
            $scope.message = "Loading ...";
									   
			$scope.serviceProvider = {};
			
			$scope.serviceProvider = serviceLocatorFactory.getUsers().get({id:parseInt($stateParams.id,10 )})
			.$promise.then(
				function(response){
					$scope.serviceProvider = response;
				},
				function(response) {
					$scope.message = "Error: "+response.status + " " + response.statusText;
				}
			);
						
        }])

//BookingRequestController to display all the requests on the requestsPage.html
.controller('BookingRequestController', ['$scope','$stateParams', 'BookingRequestFactory', function($scope, $stateParams, BookingRequestFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            
            $scope.showReq = false;
            $scope.message = "Loading ...";
	
			$scope.activeRequests = BookingRequestFactory.getBookingRequests().get({custUserid: parseInt($stateParams.custid,10)});
	
           $scope.spActiveRequests = BookingRequestFactory.getBookingRequests().get({spUserid:parseInt($stateParams.id,10)});
	$scope.custActiveRequests = BookingRequestFactory.getBookingRequests().get({custUserid:parseInt($stateParams.id,10)});
                                    
           $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])
	/*.controller('LoginController',['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService' ,function($scope, $rootScope, AUTH_EVENTS, AuthService){
			$scope.credentials = {
								username: '',
								password: ''
								};
			$scope.login = function (credentials) {
				AuthService.login(credentials)
					.then(function (user) {
						$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
						$scope.setCurrentUser(user);
					}, function () {
					$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
				});
		  };

		}])
	.controller('ApplicationController', function ($scope,
													   USER_ROLES,
													   AuthService) {
		  $scope.currentUser = null;
		  $scope.userRoles = USER_ROLES;
		  $scope.isAuthorized = AuthService.isAuthorized;

		  $scope.setCurrentUser = function (user) {
			$scope.currentUser = user;
		  };
		})*/

//HeaderController is used to help the header and its login logout profile functionality
.controller('HeaderController', ['$scope', '$state', '$rootScope', 'ngDialog', 'AuthFactory', function ($scope, $state, $rootScope, ngDialog, AuthFactory) {

    $scope.loggedIn = false;
    $scope.username = '';
    
    if(AuthFactory.isAuthenticated()) {
        $scope.loggedIn = true;
        $scope.username = AuthFactory.getUsername();
    }
        
    $scope.openLogin = function () {
        ngDialog.open({ template: 'views/login.html', scope: $scope, className: 'ngdialog-theme-default', controller:"LoginController" });
    };
    
    $scope.logOut = function() {
       AuthFactory.logout();
        $scope.loggedIn = false;
        $scope.username = '';
    };
    
    $rootScope.$on('login:Successful', function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
        
    $rootScope.$on('registration:Successful', function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
    
    $scope.stateis = function(curstate) {
       return $state.is(curstate);  
    };
    
}])

.controller('LoginController', ['$scope', 'ngDialog', '$localStorage', 'AuthFactory', function ($scope, ngDialog, $localStorage, AuthFactory) {
    
    $scope.loginData = $localStorage.getObject('userinfo','{}');
    
    $scope.doLogin = function() {
        if($scope.rememberMe){
           $localStorage.storeObject('userinfo',$scope.loginData);
		}
        AuthFactory.login($scope.loginData);

        ngDialog.close();

    };
            
    $scope.openRegister = function () {
        ngDialog.open({ template: 'views/register.html', scope: $scope, className: 'ngdialog-theme-default', controller:"RegisterController" });
    };
    
}])

.controller('RegisterController', ['$scope', 'ngDialog', '$localStorage', 'AuthFactory', function ($scope, ngDialog, $localStorage, AuthFactory) {
    
    $scope.register={};
    $scope.loginData={};
    
    $scope.doRegister = function() {
        console.log('Doing registration', $scope.registration);

        AuthFactory.register($scope.registration);
        
        ngDialog.close();

    };
}])
;