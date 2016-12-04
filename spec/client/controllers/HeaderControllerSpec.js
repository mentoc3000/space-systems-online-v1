describe('HeaderController Tests', function(){ 
   
   beforeEach(angular.mock.module('SSOApp'));

   var $controller, UserService;

   beforeEach(inject(function(_$controller_, _UserService_){
      $controller = _$controller_;
      UserService = _UserService_;
   }));

   it('Karma works', function(){
      expect(1).toBe(1);
   });
});
