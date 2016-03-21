angular.module( 'myApp.BluePiEmployeeServices', [] )

.factory( 'CommonService', ['$rootScope', '$http', function (rootScope, $http) {

return {
    login :function(data, success, error){
        console.log(data);
        var url = 'http://localhost:8080/employee/login';
        $http.post(url, data)
            .success(success)
            .error(error);
    }
};
}]);

