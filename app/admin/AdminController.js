(function(){ 

   angular
   .module('SSOApp')
   .controller('AdminController', Controller);

   Controller.$inject = ['UserService'];

   function Controller(UserService) {

      var vm = this;

      vm.users = [];

      initController();

      function initController() {

         UserService.GetAll().then(function(users){
            vm.users = users;
         });
      }


   }
})();
