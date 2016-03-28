angular.module( 'myApp.BluePiEmployeeServices', [] )

.factory( 'CommonService', ['$rootScope', '$http', function (rootScope, $http) {

return {
    login :function(data, success, error){
        console.log(data);
        var url = 'http://localhost:8080/employee/login';
        $http.post(url, data)
            .success(success)
            .error(error);
    },
    createEmployee :function(data, success, error){
        console.log(data);
        var url = 'http://localhost:8080/CodeBreakers/employee/create';
        $http.post(url, data)
            .success(success)
            .error(error);
    },
    getEmployeeById :function(id, success, error){
            console.log(data);
            var url = 'http://localhost:8080/CodeBreakers/'+id;
            $http.get(url)
                .success(success)
                .error(error);
    }
};
}]);

