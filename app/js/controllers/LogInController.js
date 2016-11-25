app.controller('LogInController',
   ['$scope','$route','$rootScope','$location','AuthenticationService',
      function($scope,$route,$rootScope,$location,AuthenticationService) {

         AuthenticationService.ClearCredentials();

         $scope.login = function() {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
               console.log(response);
               if(response.success) {
                  AuthenticationService.SetCredentials($scope.username, $scope.password);
                  $location.path('/simulator');
               } else {
                  $scope.error = response.message;
                  $scope.dataLoading = false;
               }
            });
         };
      }]);

