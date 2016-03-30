angular.module( 'myApp.BluePiEmployeeServices', [] )

.factory( 'CommonService', ['$rootScope', '$http', function (rootScope, $http) {
    var baseUrl="http://localhost:8080/CodeBreakers";
return {
    login :function(data, success, error){
        console.log(data);
        var url = baseUrl+'/employee/login';
        $http.post(url, data)
            .success(success)
            .error(error);
    },
    createEmployee :function(data, success, error){
        console.log(data);
        var url = baseUrl+'/employee/create';
        $http.post(url, angular.toJson(data))
            .success(success)
            .error(error);
    },
    getEmployeeById :function(id, success, error){
            console.log(data);
            var url = baseUrl+'/employee/'+id;
            $http.get(url)
                .success(success)
                .error(error);
    },
    getAllDesignation :function(success, error){
            var url = baseUrl+'/allDesignation';
            $http.get(url)
                .success(success)
                .error(error);
    }
};
}]);

