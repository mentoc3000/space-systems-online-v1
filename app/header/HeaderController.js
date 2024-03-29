(function() {
   'use strict';

   angular
      .module('SSOApp')
      .controller('HeaderController', Controller);

   Controller.$inject = ['UserService','$window'];

   function Controller(UserService, $window) {
      var vm = this;

      vm.user = null;
      vm.logOut = logOut;

      initController();

      function initController() {
         // if a token exists
         if ($window.jwtToken){
            // get current user
            UserService.GetCurrent().then(function(user) {
               vm.user = user;
            });
         }
      }

      function logOut(){
         vm.user = null;
      }
   }
})();
