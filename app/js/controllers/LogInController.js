app.controller('LogInController',
   ['$scope','$route','$rootScope','$location','AuthenticationService', 'FlashService',
      function($scope,$route,$rootScope,$location,AuthenticationService,FlashService) {
         var vm = this;

         vm.login = login;

         (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
         })();

         function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function(response) {
               if(response.success) {
                  AuthenticationService.SetCredentials(vm.username, vm.password);
                  $location.path('/simulator');
               } else {
                  // $scope.error = response.message;
                  FlashService.Error(resopnse.message);
                  vm.dataLoading = false;
               }
            });
         }
      }
   ]
);

