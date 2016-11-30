(function () {
   'use strict';

   angular
      .module('SSOApp')
      .controller('HomeController', Controller);

   function Controller(UserService) {
      var vm = this;

      vm.user = null;

      initController();

      function initController() {
         // get current user
         UserService.GetCurrent().then(function (user) {
            vm.user = user;
         });
      }
   }

})();
