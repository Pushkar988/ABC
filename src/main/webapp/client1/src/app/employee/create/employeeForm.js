angular.module('myApp.employeeForm', [])
    .config(function config( $stateProvider ) {
      $stateProvider.state( 'employeeCreate', {
        url: '/empCreate',
        views: {
          "main": {
            controller: 'EmployeeFormCtrl',
            templateUrl: 'employee/create/templates/employeeForm.tpl.html'
          }
        },
        data:{ pageTitle: 'Create' }
      });
    })
    .controller('EmployeeFormCtrl', ['$rootScope', '$scope','$anchorScroll','$location','$timeout','CommonService',function (rootScope, scope,anchorScroll, location,$timeout,CommonService) {

        scope.createEmployee = function(){
            CommonService.createEmployee(scope.user,function(user){
                    //write logic after success call
            },function(error){
                console.log('error',error);
            });
        };

    }]);
