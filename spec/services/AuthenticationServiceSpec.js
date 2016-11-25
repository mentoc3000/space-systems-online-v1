describe('Authentication Service Test',function(){

   beforeEach(angular.mock.module('SSOApp'));

   describe('Base64 Encoder Test',function(){

      var Base64;
      beforeEach(inject(function(_Base64_){
         Base64 = _Base64_;
      }));

      var message = "Happy families are all the same";
      var code;

      it('Encodes a message',function(){
         code = Base64.encode(message);
         expect(code).toMatch(/^[A-Za-z0-9\+\/\=]*$/);
         expect(code).not.toBe(message);
      });

      it('Decodes a message',function(){
         var decoded = Base64.decode(code);
         expect(decoded).toBe(message);
      });

      /*
      it('Fails with special characters', function() {
         var message = 'abcd!';
         var code = Base64.encode(message);
         var decoded = Base64.decode(code);
         expect(decoded).not.toBe(message);
      });
      */
   });

   describe('Authentication Test', function() {

      var AuthenticationServce, $rootScope, $cookieStore, $http;
      beforeEach(inject(function(_AuthenticationService_, _$rootScope_, _$cookieStore_, _$http_){
         AuthenticationService = _AuthenticationService_;
         $rootScope = _$rootScope_;
         $cookieStore = _$cookieStore_;
         $http = _$http_;
      }));

      describe('Login', function() {
         it('Succesfully logs in',function() {
            var username = 'test';
            var password = 'test';

            AuthenticationService.Login(username, password, function(response){
               expect(response.success).toBe(true);
            });
         });

         it('Rejects bad credentials',function() {
            var username = 'criminal';
            var password = '12345';

            AuthenticationService.Login(username, password, function(response) {
               expect(response.success).toBe(false);
               expect(response.message).toBe('Username or password is incorrect');
            });
         });
      });

      describe('SetCredentials',function() {
         var username = 'user1234';
         var password = 'notAgr8PW';

         beforeEach(function(){
            AuthenticationService.SetCredentials(username,password);
         });

         it('Stores the username in rootScope',function() {
            expect($rootScope.globals.currentUser.username).toBe(username);
         });

         it('Stores encoded authorization in rootScope', function() {
            expect($rootScope.globals.currentUser.authdata.indexOf(username)).toBe(-1);
            expect($rootScope.globals.currentUser.authdata.indexOf(password)).toBe(-1);
            expect($rootScope.globals.currentUser.authdata).toBeTruthy();
         });

         it('Stores encoded authorization in header',function() {
            expect($http.defaults.headers.common.Authorization.substr(0,5)).toBe('Basic');
            expect($http.defaults.headers.common.Authorization.substr(5)).toBeTruthy();
         });

         it('Stores globals in cookie', function() {
            expect($rootScope.globals).toEqual($cookieStore.get('globals'));
         });

      });

      describe('ClearCredentials',function() {
         var username = 'user1234';
         var password = 'notAgr8PW';
         var authdata;

         beforeEach(function(){
            AuthenticationService.SetCredentials(username,password);
            AuthenticationService.ClearCredentials(username, password);
         });

         it('Clears $rootScope globals',function(){
            expect($rootScope.globals).toEqual({});
         });

         it('Clears cookie globals',function(){
            expect($cookieStore.get('globals')).not.toBeDefined();
         });

         it('Clears http header', function() {
            expect($http.defaults.headers.common.Authorization).toBe('Basic');
         });
            
      });

   });
});