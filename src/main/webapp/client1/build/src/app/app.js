angular.module( 'myApp', [
  'templates-app',
  'templates-common',
  'myApp.home',
  'myApp.about',
  'ui.router',
  'myApp.login',
  'myApp.BluePiEmployeeServices',
  'myApp.employeeForm'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | BluePi Performance Appraisal' ;



    }
  });
});

