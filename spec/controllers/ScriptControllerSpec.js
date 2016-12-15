var Q = require('q');

describe('ScriptController Tests', function() {

   beforeEach(angular.mock.module('SSOApp'));

   var $controller, ScriptService;

   beforeEach(inject(function(_$controller_, _ScriptService_){
      $controller = _$controller_;
      ScriptService = _ScriptService_;
   }));

   var controller;

   var data = 'input text';

   describe('Initialization', function() {

      beforeEach(function() {
         controller = $controller('ScriptController', {
            ScriptService: ScriptService
         });
      });

      it('Clears the input', function () {
         expect(controller.input).toEqual('');
      });

      it('Clears the output', function() {
         expect(controller.output).toEqual('');
      });
   });


   describe('Submitting', function() {

      beforeEach(function(done) {
         var promise = new Q.Promise(
            function resolver(resolve, reject){
               var deferred = Q.defer();
               deferred.resolve(data);
               spyOn(ScriptService,'Submit').and.returnValue(deferred.promise);
               controller = $controller('ScriptController', {
                  ScriptService: ScriptService
               });
               controller.input = data;
               controller.submit();
               resolve(controller);
            }
         );
         promise.then(done);
      });

      it('Submits the data', function() {
         expect(ScriptService.Submit).toHaveBeenCalledWith(data);
      });

      it('Returns the data', function() {
         expect(controller.output).toEqual(data);
      });
   });

});
