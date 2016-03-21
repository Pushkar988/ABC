/**
 * Created by parteek on 9/3/16.
 */


angular.module( 'myApp.loginService', [] )
    .factory( 'AuthenticationService', ['$http', '$rootScope', function (http, rootScope) {

        return {

            login: function(credentials, success, error) {
                http.post('/login', credentials)
                    .success(function(user) {
                        user.isLoggedIn = true;
                        success(user);
                    })
                    .error(function(err) {
                        error(err);
                    });
            }

        };
    }]);
