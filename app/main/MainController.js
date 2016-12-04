(function() {

   angular
      .module('SSOApp')
      .controller('MainController', Controller);

   Controller.$inject = ['UserService'];

   function Controller(UserService) {
      var vm = this;

      // vm.user = null;

      initController();

      function initController() {
         // // get current user
         // UserService.GetCurrent().then(function(user) {
         //    vm.user = user;
         // });
      }
   }
})();
