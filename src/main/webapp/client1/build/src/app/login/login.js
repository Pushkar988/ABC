angular.module( 'myApp.login', [
  'ui.router',
  'ui.bootstrap',
  'myApp.BluePiEmployeeServices'

])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
})

.controller('LoginCtrl', function LoginCtrl($scope,CommonService) {
        $scope.login = function(){
            CommonService.login($scope.credentials,function(result){
                    console.log('success',result);
              },function(error){
                    console.log(error);
            });
        };

});
