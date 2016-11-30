(function() {
   'use strict';

   angular
      .module('SSOApp')
      .controller('HeaderController', Controller);

   Controller.$inject = ['$rootScope'];

   function Controller($rootScope) {
      var vm = this;
      vm.test = true;
      vm.activeTab = $rootScope.activeTab;
   }
})();
