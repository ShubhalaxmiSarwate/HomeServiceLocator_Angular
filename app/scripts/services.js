'use strict';

angular.module('ServiceLocatorApp', [])
        .constant("baseURL","http://localhost:3000/")
		.constant('AUTH_EVENTS', {
		  loginSuccess: 'auth-login-success',
		  loginFailed: 'auth-login-failed',
		  logoutSuccess: 'auth-logout-success',
		  sessionTimeout: 'auth-session-timeout',
		  notAuthenticated: 'auth-not-authenticated',
		  notAuthorized: 'auth-not-authorized'
		})
		.constant('USER_ROLES', {
		  all: '*',
		  admin: 'admin',
		  editor: 'editor',
		  guest: 'guest'
		})
        .service('serviceLocatorFactory', ['$resource', 'baseURL',function($resource,baseURL) {    
           /* var endusers = [
                         {
							id: '1',
							userFname: 'Alex',
							userLname:'Conner',
							image: 'images/profile.png',
							streetAddress: 'CentralBahnstrasse 3',
							city: 'Basel',
							postalCode: '4051',
							country: 'Switzerland',
							emailAddress: 'AC@gmail.com',
							password: 'Alex',
							phoneNumber: '+799469874',
							profileType: 'S',
							status: 'A',
							companyName: 'AC Maler AG',
							companyStreetAddress: 'CentralBahnstrasse 3',
							companyCity: 'Basel',
							companyPostalCode: '4051',
							companyCountry: 'Switzerland',
							companyPhoneNumber: '+654789321',
							description: 'The AG company.',
							hourlyRate: '10.00',
							availibilityStatus: 'A',
							custRating: 3,
							serviceProvided: 'Plumber',
							 comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }                                                          ]
                        },
						{
							id: '2',
							userFname: 'Simon',
							userLname:'Puhar',
							image: 'images/profile.png',
							streetAddress: 'Claragraben 31',
							city: 'Basel',
							postalCode: '4058',
							country: 'Switzerland',
							emailAddress: 'SP@gmail.com',
							password: 'sp',
							phoneNumber: '+321456987',
							profileType: 'S',
							status: 'A',
							companyName: 'SP Housekeeping',
							companyStreetAddress: 'Claragraben 31',
							companyCity: 'Basel',
							companyPostalCode: '4058',
							companyCountry: 'Switzerland',
							companyPhoneNumber: '+321456987',
							description: 'Complete Housekeeping solution for you',
							hourlyRate: '15.00',
							availibilityStatus: 'A',
							custRating: 4,
							serviceProvided: 'Gardener',
							comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the work, living in conFusion no more!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get the help everytime!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }                                                          ]
                        },
						{
							id: '3',
							userFname: 'Mattew',
							userLname:'Heree',
							image: 'images/profile.png',
							streetAddress: 'Hammerstrasse 177',
							city: 'Basel',
							postalCode: '4057',
							country: 'Switzerland',
							emailAddress: 'mh@gmail.com',
							password: 'mh',
							phoneNumber: '+56321456321',
							profileType: 'S',
							status: 'A',
							companyName: 'Mattew AG',
							companyStreetAddress: 'Hammerstrasse 177',
							companyCity: 'Basel',
							companyPostalCode: '4057',
							companyCountry: 'Switzerland',
							companyPhoneNumber: '+654123698',
							description: 'Electrician helper',
							hourlyRate: '20.00',
							availibilityStatus: 'A',
							custRating: 2.5,
						   serviceProvided: 'Gardener',
							comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }                                                          ]
                        }
						];*/

			this.getUsers = function(){
                    return $resource(baseURL+"users/:id", null,  {
						'update':{method:'PUT' },
						'query':{method: 'GET' , isArray: false}
					});                    
                }; 
                                        
        }])

        .service('BookingRequestFactory',['$resource', 'baseURL',function($resource,baseURL)  {
    	/*	var bookingRequests = [{
//				id: '1',
				custUserid: '1',
				spUserid: '2',
				reqType: 'E',
				reqTime: '2017-04-05T17:57:28.556094Z',
				status: 'P',
				desc: 'work desc',
				referenceRequestId: '',
				reqUpdateTime: '2017-04-05T17:57:28.556094Z',
				feedback: 'good work',
				custRating: '3'
			},
			{
//				id: '2',
				custUserid: '1',
				spUserid: '3',
				reqType: 'E',
				reqTime: '2017-04-05T17:57:28.556094Z',
				status: 'A',
				desc: 'work desc',
				referenceRequestId: '',
				reqUpdateTime: '2017-04-05T17:57:28.556094Z',
				feedback: 'good work',
				custRating: '3'
			},
			{
//				id: '3',
				custUserid: '3',
				spUserid: '1',
				reqType: 'B',
				reqTime: '2017-04-06T17:57:28.556094Z',
				status: 'R',
				desc: 'work desc',
				referenceRequestId: '',
				reqUpdateTime: '2017-04-05T17:57:28.556094Z',
				feedback: 'good work',
				custRating: '3'
			},
			{
//				id: '4',
				custUserid: '3',
				spUserid: '2',
				reqType: 'B',
				reqTime: '2017-04-06T17:57:28.556094Z',
				status: 'C',
				desc: 'work desc',
				referenceRequestId: '',
				reqUpdateTime: '2017-04-05T17:57:28.556094Z',
				feedback: 'good work',
				custRating: '3'
			} ];*/
        this.getBookingRequests = function(){
               return $resource(baseURL+"bookReqests/:id",null,  {'update':{method:'PUT' }});                       
        }; 
//	get booking request made by a customer	
			this.getActiveBookingRequestByCustId = function(){
				  return $resource(baseURL+"bookReqests/:custUserid",null,  {
					  'update':{method:'PUT' },
				  	  'query': {method: 'GET', isArray: true}	
				  });
                            
        }; 
			//	get booking request made to a service provider	
			this.getActiveBookingRequestBySPId = function(){
                    return $resource(baseURL+"bookingRequests/:spUserid",null,  {
						'update':{method:'PUT' },
						'query': {method: 'GET', isArray: true}
					});
                            
        }; 
    
        }])
.factory('$localStorage', ['$window', function ($window) {
    return {
        store: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        remove: function (key) {
            $window.localStorage.removeItem(key);
        },
        storeObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key, defaultValue) {
            return JSON.parse($window.localStorage[key] || defaultValue);
        }
    };
}])

.factory('AuthFactory', ['$resource', '$http', '$localStorage', '$rootScope', '$window', 'baseURL', 'ngDialog', function($resource, $http, $localStorage, $rootScope, $window, baseURL, ngDialog){
    
    var authFac = {};
    var TOKEN_KEY = 'Token';
    var isAuthenticated = false;
    var username = '';
    var authToken = '';
    
  function useCredentials(credentials) {
    isAuthenticated = true;
    username = credentials.username;
    authToken = credentials.token;
 
    // Set the token as header for your requests!
    $http.defaults.headers.common['x-access-token'] = authToken;
  }
	
  function loadUserCredentials() {
    var credentials = $localStorage.getObject(TOKEN_KEY,'{}');
    if (credentials.username !== undefined) {
      useCredentials(credentials);
    }
  }
 
  function storeUserCredentials(credentials) {
    $localStorage.storeObject(TOKEN_KEY, credentials);
    useCredentials(credentials);
  }
 

 
  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['x-access-token'] = authToken;
    $localStorage.remove(TOKEN_KEY);
  }
     
    authFac.login = function(loginData) {
        
        $resource(baseURL + "users/login")
        .save(loginData,
           function(response) {
              storeUserCredentials({username:loginData.username, token: response.token});
              $rootScope.$broadcast('login:Successful');
           },
           function(response){
              isAuthenticated = false;
            
              var message = '\
                <div class="ngdialog-message">\
                <div><h3>Login Unsuccessful</h3></div>' +
                  '<div><p>' +  response.data.err.message + '</p><p>' +
                    response.data.err.name + '</p></div>' +
                '<div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=confirm("OK")>OK</button>\
                </div>';
            
                ngDialog.openConfirm({ template: message, plain: 'true'});
           }
        
        );

    };
    
    authFac.logout = function() {
        $resource(baseURL + "users/logout").get(function(response){
        });
        destroyUserCredentials();
    };
    
    authFac.register = function(registerData) {
        
        $resource(baseURL + "users/register")
        .save(registerData,
           function(response) {
              authFac.login({username:registerData.username, password:registerData.password});
            if (registerData.rememberMe) {
                $localStorage.storeObject('userinfo',
                    {username:registerData.username, password:registerData.password});
            }
           
              $rootScope.$broadcast('registration:Successful');
           },
           function(response){
            
              var message = '\
                <div class="ngdialog-message">\
                <div><h3>Registration Unsuccessful</h3></div>' +
                  '<div><p>' +  response.data.err.message + 
                  '</p><p>' + response.data.err.name + '</p></div>';

                ngDialog.openConfirm({ template: message, plain: 'true'});

           }
        
        );
    };
    
    authFac.isAuthenticated = function() {
        return isAuthenticated;
    };
    
    authFac.getUsername = function() {
        return username;  
    };

    loadUserCredentials();
    
    return authFac;
    
}])
		/*.service('Session', function () {
		  this.create = function (sessionId, userId, userRole) {
			this.id = sessionId;
			this.userId = userId;
			this.userRole = userRole;
		  };
		  this.destroy = function () {
			this.id = null;
			this.userId = null;
			this.userRole = null;
		  };
		})
		.service('AuthService', function ($http, Session) {
		  
		  this.login = function (credentials) {
			return $http
			  .post('/login', credentials)
			  .then(function (res) {
				Session.create(res.data.id, res.data.user.id,
							   res.data.user.role);
				return res.data.user;
			  });
		  };

		  this.isAuthenticated = function () {
			return !!Session.userId;
		  };

		  this.isAuthorized = function (authorizedRoles) {
			if (!angular.isArray(authorizedRoles)) {
			  authorizedRoles = [authorizedRoles];
			}
			return (authService.isAuthenticated() &&
			  authorizedRoles.indexOf(Session.userRole) !== -1);
		  };

		  return authService;
		})*/

/*

        .factory('feedbackFactory',[ function($resource,baseURL)  {
    
        var feedbackfac = {};
    
        feedbackfac.getFeedbacks = function(){
                    
                    return $resource(baseURL+"feedback/:id",null,null);
                    
                };
        
        
        return feedbackfac;
    
        }])
*/




;
