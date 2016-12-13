var Q = require('q');

describe('ScriptController Tests', function() {

   beforeEach(angular.mock.module('SSOApp'));

   var $controller, ScriptService;

   beforeEach(inject(function(_$controller_, _ScriptService_){
      $controller = _$controller_;
      ScriptService = _ScriptService_;
   }));

   var controller;

   var input = 'input text';

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
});
