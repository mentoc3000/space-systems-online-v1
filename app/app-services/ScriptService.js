(function() {
   'use strict';

   angular
   .module('SSOApp')
   .factory('ScriptService', Service);

   Service.$inject = ['$http', '$q'];

   function Service($http, $q) {
      var service = {};

      service.Submit = Submit;

      return service;


      // http routines

      function Submit(input) {
         var body = {
            input: input
         };
         return $http.post('/api/sim/submit',body)
         .then(handleSuccess,handleError);
      }


      // private functions
      
      function handleSuccess(res) {
         return res.data;
      }

      function handleError(res) {
         return $q.reject(res.data);
      }
   }
})();
