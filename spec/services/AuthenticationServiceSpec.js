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
   });

   describe('Authentication Test', function() {

      var AuthenticationServce;
      beforeEach(inject(function(_AuthenticationService_){
         AuthenticationService = _AuthenticationService_;
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

   });
});
