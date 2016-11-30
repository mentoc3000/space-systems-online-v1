(function () {
   'use strict';

   angular
      .module('SSOApp')
      .controller('LogInController', Controller);

   Controller.$inject = ['$route', '$rootScope', '$location', 'AuthenticationService', 'FlashService'];

   function Controller($route,$rootScope,$location,AuthenticationService,FlashService) {
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
               FlashService.Error(response.message);
               vm.dataLoading = false;
            }
         });
      }
   }
})();
