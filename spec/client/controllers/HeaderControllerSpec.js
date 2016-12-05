var Q = require('q');

describe('HeaderController Tests', function(){ 
   
   beforeEach(angular.mock.module('SSOApp'));

   var $controller, UserService;

   beforeEach(inject(function(_$controller_, _UserService_){
      $controller = _$controller_;
      UserService = _UserService_;
   }));

   var controller;

   var user = {
      _id: 12345,
      firstName: 'JP',
      lastName: 'Sheehan',
      email: 'jp.sheehan2@gmail.com',
   };

   describe('Initialization', function(){
      
      beforeEach(function(done){
         var promise = new Q.Promise(
            function resolver(resolve, reject){
               var deferred = Q.defer();
               deferred.resolve(user);
               spyOn(UserService,'GetCurrent').and.returnValue(deferred.promise);

               controller = $controller('HeaderController', {
                  UserService: UserService
               });

               resolve(controller);
            }
         );

         promise.then(done);
      });

      it('Gets the current user', function(){
         expect(UserService.GetCurrent).toHaveBeenCalled();
      });

      it('Stores user', function() {
         expect(controller.user).toEqual(user);
      });

   });
});
