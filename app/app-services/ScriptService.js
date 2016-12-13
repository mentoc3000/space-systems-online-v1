(function() {

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
         console.log(input);
         return $http.post('/api/sim/submit',input)
         .then(handleSuccess, handleError);
      }


      // private functions
      
      function handleSuccess(res) {
         console.log('success');
         console.log(res.data);
         return res.data;
      }

      function handleError(res) {
         console.log('failure');
         console.log(res.data);
         return $q.reject(res.data);
      }
   }
})();
