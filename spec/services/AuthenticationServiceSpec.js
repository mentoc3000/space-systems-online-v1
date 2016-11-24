describe('Authentication Service Test',function(){
   describe('Base64 Encoder Test',function(){

      beforeEach(angular.mock.module('SSOApp'));

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
});
