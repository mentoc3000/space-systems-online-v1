'use strict';

describe('UserService tests', function() {
   
   beforeEach(angular.mock.module('SSOApp'));

   var UserService, $httpBackend, $q;
   var data = {
      x: 'Information here',
      y: 12345,
      z: {
         a: 'start',
         b: 9876
      }
   };
   var err = {
      code: '401',
      message: 'error'
   };

   beforeEach(inject(function(_$httpBackend_, _$q_, _UserService_){
      $httpBackend = _$httpBackend_;
      $q = _$q_;
      UserService = _UserService_;

      $httpBackend.when('GET','header/header.html').respond(200);
      $httpBackend.when('GET','main/home.html').respond(200);
      $httpBackend.when('GET','main/footer.html').respond(200);
   }));

   afterEach(function(){
      expect($httpBackend.flush).not.toThrow();
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
   });

   function httpTest(method, url, userServicePromise, success) {
      var response = $httpBackend.when(method,url);
      var res;
      if (success) {
         res = data;
         response.respond(200, data);
      } else {
         res = err;
         response.respond(500, err);
      }

      if (method === 'GET') {
         $httpBackend.expectGET(url);
      } else if (method === 'POST') {
         $httpBackend.expectPOST(url);
      } else if (method === 'PUT') {
         $httpBackend.expectPUT(url);
      } else if (method === 'DELETE') {
         $httpBackend.expectDELETE(url);
      }
      userServicePromise.then(function(resData){
         expect(resData).toEqual(res);
      });
   }


   describe('GetCurrent', function() {
      it('should respond with data on success',function(){ 
         var method = 'GET',
            url = '/api/users/current',
            userServicePromise = UserService.GetCurrent(),
            success = true;
         httpTest(method, url, userServicePromise, success);
      });
      it('should respond with err on failure', function(){
         var method = 'GET',
            url = '/api/users/current',
            userServicePromise = UserService.GetCurrent(),
            success = false;
         httpTest(method, url, userServicePromise, success);
      });
   });

   describe('GetAll', function() {
      it('should respond with data on success',function(){ 
         var method = 'GET',
            url = '/api/users',
            userServicePromise = UserService.GetAll(),
            success = true;
         httpTest(method, url, userServicePromise, success);
      });
      it('should respond with err on failure', function(){
         var method = 'GET',
            url = '/api/users',
            userServicePromise = UserService.GetAll(),
            success = false;
         httpTest(method, url, userServicePromise, success);
      });
   });

   describe('GetById', function() {
      it('should respond with data on success',function(){ 
         var method = 'GET',
            id = 1234,
            url = '/api/users/' + id,
            userServicePromise = UserService.GetById(id),
            success = true;
         httpTest(method, url, userServicePromise, success);
      });
      it('should respond with err on failure', function(){
         var method = 'GET',
            id = 1234,
            url = '/api/users/' + id,
            userServicePromise = UserService.GetById(id),
            success = false;
         httpTest(method, url, userServicePromise, success);
      });
   });

   describe('GetByUsername', function() {
      it('should respond with data on success',function(){ 
         var method = 'GET',
            username = 'username',
            url = '/api/users/' + username,
            userServicePromise = UserService.GetByUsername(username),
            success = true;
         httpTest(method, url, userServicePromise, success);
      });
      it('should respond with err on failure', function(){
         var method = 'GET',
            username = 'username',
            url = '/api/users/' + username,
            userServicePromise = UserService.GetByUsername(username),
            success = false;
         httpTest(method, url, userServicePromise, success);
      });
   });

   describe('Create', function() {
      it('should respond with data on success',function(){ 
         var method = 'POST',
            user = 'user',
            url = '/api/users',
            userServicePromise = UserService.Create(user),
            success = true;
         httpTest(method, url, userServicePromise, success);
      });
      it('should respond with err on failure', function(){
         var method = 'POST',
            user = 'user',
            url = '/api/users',
            userServicePromise = UserService.Create(user),
            success = false;
         httpTest(method, url, userServicePromise, success);
      });
   });

   describe('Update', function() {

      var method = 'PUT',
         user = {
            name: 'JP',
            _id: 1234
         },
         url = '/api/users/' + user._id,
         userServicePromise;

      beforeEach(function(){
         userServicePromise = UserService.Update(user);
      });

      it('should respond with data on success', function() {
         var success = true;
         httpTest(method, url, userServicePromise, success);
      });

      it('should respond with err on failure', function() {
         var success = false;
         httpTest(method, url, userServicePromise, success);
      });
   });

   describe('Delete', function() {

      var method = 'DELETE',
         user = {
            name: 'JP',
            _id: 1234
         },
         url = '/api/users/' + user._id,
         userServicePromise;

      beforeEach(function(){
         userServicePromise = UserService.Delete(user._id);
      });

      it('should respond with data on success', function() {
         var success = true;
         httpTest(method, url, userServicePromise, success);
      });

      it('should respond with err on failure', function() {
         var success = false;
         httpTest(method, url, userServicePromise, success);
      });
   });

});
