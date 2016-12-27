(function() {
   'use strict';

   angular
   .module('SSOApp')
   .controller('SimulatorController', Controller);

   Controller.$inject = ['ScriptService'];

   function Controller(ScriptService) {
      var vm = this;
   }
})();
