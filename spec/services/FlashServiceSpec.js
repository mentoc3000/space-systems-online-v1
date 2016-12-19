'use strict';

describe('FlashService Tests', function() {

   beforeEach(angular.mock.module('SSOApp'));

   var FlashService, $rootScope;

   var message = 'message';
   var keepAfterLocationChange = false;

   describe('Flash Success', function(){

   beforeEach(inject(function(_FlashService_, _$rootScope_){
      FlashService = _FlashService_;
      $rootScope = _$rootScope_;
   }));

      beforeEach(function(){
         FlashService.Success(message,keepAfterLocationChange);
      });

      it('Sets message', function() {
         expect($rootScope.flash.message).toEqual(message);
      });

      it('Sets type', function() {
         expect($rootScope.flash.type).toEqual('success');
      });

      it('Sets keepAfterLocationChange', function() {
         expect($rootScope.flash.keepAfterLocationChange).toEqual(keepAfterLocationChange);
      });
   });


   describe('Flash Error', function(){

   beforeEach(inject(function(_FlashService_, _$rootScope_){
      FlashService = _FlashService_;
      $rootScope = _$rootScope_;
   }));

      beforeEach(function(){
         FlashService.Error(message,keepAfterLocationChange);
      });

      it('Sets message', function() {
         expect($rootScope.flash.message).toEqual(message);
      });

      it('Sets type', function() {
         expect($rootScope.flash.type).toEqual('danger');
      });

      it('Sets keepAfterLocationChange', function() {
         expect($rootScope.flash.keepAfterLocationChange).toEqual(keepAfterLocationChange);
      });
   });

   describe('Flash Clear when url changes', function(){

   beforeEach(inject(function(_$rootScope_){
      $rootScope = _$rootScope_;
   }));

      describe('Clears existing flash', function(){

         beforeEach(function(){
            $rootScope.flash = {
               message: 'message',
               type: 'success',
               keepAfterLocationChange: false
            };
         });

         it('clears the flash', inject(function(_FlashService_){
            FlashService = _FlashService_;
            $rootScope.$broadcast('$locationChangeStart');
            expect($rootScope.flash).toBeUndefined();
         }));
      });

      describe('Holds flash for single location change', function(){

         var flash = {
               message: 'message',
               type: 'success',
               keepAfterLocationChange: true
            };

         beforeEach(function(){
            $rootScope.flash = flash;
         });

         it('clears the flash', inject(function(_FlashService_){
            FlashService = _FlashService_;
            $rootScope.$broadcast('$locationChangeStart');
            flash.keepAfterLocationChange = false;
            expect($rootScope.flash).toEqual(flash);
         }));

      });

   });

});



