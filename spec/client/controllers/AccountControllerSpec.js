var Q = require('q');

describe('AccountController Tests', function() {

   beforeEach(angular.mock.module('SSOApp'));

   var $controller, $window, UserService, FlashService;
   var windowStart = {
      locat: '/register'
   };

   beforeEach(inject(function(_$controller_, _$window_, _UserService_, _FlashService_){
      $controller = _$controller_;
      $window = windowStart;
      UserService = _UserService_;
      FlashService = _FlashService_;
   }));

   var controller;

   var user = {
      _id: 12345,
      firstName: 'JP',
      lastName: 'Sheehan',
      email: 'jp.sheehan2@gmail.com',
   };
   var err = {
      message: 'err'
   };

   describe('Initialization', function(){


      beforeEach(function(done) {

         var promise = new Q.Promise(
            function resolver(resolve, reject){
               var deferred = Q.defer();
               deferred.resolve(user);
               spyOn(UserService,'GetCurrent').and.returnValue(deferred.promise);

               controller = $controller('AccountController',{
                  $window: $window,
                  UserService: UserService,
                  FlashService: FlashService
               });

               resolve(controller);
            }
         );

         promise.then(done);
      });


      it('Has a user field', function() {
         expect(controller.user).toBeDefined();
      });


      it('Gets the current user when loaded', function() {
         expect(UserService.GetCurrent).toHaveBeenCalled();
         expect(controller.user).toEqual(user);
      });
   });

   describe('Successfully saves user', function() {

      beforeEach(function(done) {

         Q.Promise(function resolver(resolve, reject){

            var deferredInit = Q.defer();
            deferredInit.resolve(user);
            spyOn(UserService,'GetCurrent').and.returnValue(deferredInit.promise);

            var deferred = Q.defer();
            deferred.resolve();
            spyOn(UserService,'Update').and.returnValue(deferred.promise);

            spyOn(FlashService,'Success');
            spyOn(FlashService,'Error');

            controller = $controller('AccountController',{
               $window: $window,
               UserService: UserService,
               FlashService: FlashService
            });

            resolve(controller);
         })
            .then(function(controller){
               return Q.Promise(
                  function resolver(resolve, reject) {
                     resolve(controller.saveUser());
                  }
               );
            })
            .then(done);
      });

      it('Updates the user', function() {
         expect(UserService.Update).toHaveBeenCalledWith(user);
      });

      it('Triggers flash success message only', function() {
         expect(FlashService.Success).toHaveBeenCalled();
         expect(FlashService.Error).not.toHaveBeenCalled();
      });

   });


   describe('Fails to save user', function() {

      beforeEach(function(done) {

         var deferredInit = Q.defer();
         deferredInit.resolve(user);
         spyOn(UserService,'GetCurrent').and.returnValue(deferredInit.promise);

         var deferred = Q.defer();
         deferred.reject(err);
         spyOn(UserService,'Update').and.returnValue(deferred.promise);

         spyOn(FlashService,'Success');
         spyOn(FlashService,'Error');

         controller = $controller('AccountController',{
            $window: $window,
            UserService: UserService,
            FlashService: FlashService
         });
         controller.saveUser();

         // I'M SURE THIS COULD BE DONE MORE ELEGANTLY
         setTimeout(function(){
            controller.saveUser();
            setTimeout(function(){
               done();
            },100);
         }, 100);
      });

      it('Tries to update the user', function() {
         expect(UserService.Update).toHaveBeenCalled();
      });

      it('Triggers flash error message only', function() {
         expect(FlashService.Success).not.toHaveBeenCalled();
         expect(FlashService.Error).toHaveBeenCalledWith(err);
      });

   });

   describe('Deletes a user', function() {

      beforeEach(function(done) {

         var deferredInit = Q.defer();
         deferredInit.resolve(user);
         spyOn(UserService,'GetCurrent').and.returnValue(deferredInit.promise);

         var deferredDelete = Q.defer();
         deferredDelete.resolve();
         spyOn(UserService,'Delete').and.returnValue(deferredDelete.promise);

         spyOn(FlashService,'Success');
         spyOn(FlashService,'Error');

         controller = $controller('AccountController',{
            $window: $window,
            UserService: UserService,
            FlashService: FlashService
         });

         // I'M SURE THIS COULD BE DONE MORE ELEGANTLY
         setTimeout(function(){
            controller.deleteUser();
            setTimeout(function(){
               done();
            },100);
         }, 100);
      });

      it('Deletes the user', function() {
         expect(UserService.Delete).toHaveBeenCalledWith(user._id);
      });

      it('Triggers no flash message only', function() {
         expect(FlashService.Success).not.toHaveBeenCalled();
         expect(FlashService.Error).not.toHaveBeenCalled();
      });

      it('Redirects to the login page', function() {
         expect($window.location).toEqual('/login');
      });

   });

   describe('Fails to delete a user', function() {

      beforeEach(function(done) {

         var deferredInit = Q.defer();
         deferredInit.resolve(user);
         spyOn(UserService,'GetCurrent').and.returnValue(deferredInit.promise);

         var deferredDelete = Q.defer();
         deferredDelete.reject(err);
         spyOn(UserService,'Delete').and.returnValue(deferredDelete.promise);

         spyOn(FlashService,'Success');
         spyOn(FlashService,'Error');

         controller = $controller('AccountController',{
            $window: $window,
            UserService: UserService,
            FlashService: FlashService
         });

         // I'M SURE THIS COULD BE DONE MORE ELEGANTLY
         setTimeout(function(){
            controller.deleteUser();
            setTimeout(function(){
               done();
            },100);
         }, 100);
      });

      it('Tries to delete the user', function() {
         expect(UserService.Delete).toHaveBeenCalledWith(user._id);
      });

      it('Triggers flash message only', function() {
         expect(FlashService.Success).not.toHaveBeenCalled();
         expect(FlashService.Error).toHaveBeenCalledWith(err);
      });

      it('Does not redirect', function() {
         expect($window).toEqual(windowStart);
      });

   });
});
