(function(){ 

   angular
   .module('SSOApp')
   .controller('AdminController', Controller);

   Controller.$inject = ['UserService'];

   function Controller(UserService) {

      var vm = this;

   }
})();
