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

        scope.roleMap={};
        scope.createEmployee = function(){

            CommonService.createEmployee(scope.user,function(user){
                    if(user){
                        scope.roleMap.employee=user;
                        CommonService.createRoleMap(scope.roleMap, function(roleMap){
                            alert("User successfully created.");
                        },function(error){
                            console.log("roleMap",error);
                        });
                    }

            },function(error){
                console.log('error',error);
            });
        };

        scope.setDesignation= function(id){
          scope.user.designation = rootScope.designations.find(function(des){
                        if(des.id == id){
                            return des;
                        }
          });

          delete scope.user.designation_id;
          console.log('user',scope.user);
        };

        scope.setRole= function(id){
          scope.roleMap.role = rootScope.roles.find(function(role){
                if(role.id == id){
                    return role;
                }
          });

            delete scope.user.role_id;
          console.log('user',scope.user.role);
        };

    }]);
