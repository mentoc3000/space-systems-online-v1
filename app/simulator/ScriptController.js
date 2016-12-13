(function () {

   angular
   .module('SSOApp')
   .controller('ScriptController', Controller);

   Controller.$inject = ['ScriptService'];

   function Controller(ScriptService) {
      var vm = this;

      vm.submit = submit;

      initController();

      function initController(){
         vm.output = '';
         vm.input = '';
      }

      function submit() {
         ScriptService.Submit(vm.input)
         .then(function(output) {
            vm.output = output;
         });
      }
      

   }
})();
