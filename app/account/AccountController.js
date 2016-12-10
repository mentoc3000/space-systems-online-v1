(function () {

   angular
      .module('SSOApp')
      .controller('AccountController', Controller);

   Controller.$inject = ['$window', 'UserService', 'FlashService'];

   function Controller($window, UserService, FlashService) {
      var vm = this;

      vm.user = null;
      vm.saveUser = saveUser;
      vm.deleteUser = deleteUser;

      initController();

      function initController() {
         // get current user
         UserService.GetCurrent().then(function(user) {
            vm.user = user;
         });
      }

      function saveUser() {
         UserService.Update(vm.user)
            .then(function(){
               FlashService.Success('User updated');
            })
            .catch(function(err) {
               FlashService.Error(err);
            });
      }

      function deleteUser() {
         UserService.Delete(vm.user._id)
            .then(function() {
               // log user out
               $window.location = '/login';
            })
            .catch(function(err) {
               FlashService.Error(err);
            });
      }
   }

})();
