describe('LogInController Tests', function(){

   beforeEach(angular.mock.module('SSOApp'));

   var $controller, $rootScope, route, $location;

   beforeEach(inject(function(_$controller_, _$rootScope_, _$route_, _$location_){
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      route = _$route_;
      $location = _$location_;
   }));

   describe('login',function(){

      var AuthenticationService;

      beforeEach(inject(function(_AuthenticationService_){
         AuthenticationService = _AuthenticationService_;
      }));


      describe('Logs in successfully',function() {

         var scope;

         beforeEach(function(){
            scope = $rootScope.$new();
            scope.username = 'test';
            scope.password = 'test';
         });

         it('Clears credentials',function(done){
            spyOn(AuthenticationService,'ClearCredentials').and.callFake(function(){ done(); });
            var controller = $controller('LogInController', {
               $scope: scope,
               $route: route,
            });
            expect(AuthenticationService.ClearCredentials).toHaveBeenCalled();
         });

         it('Logs in',function(done){
            spyOn(AuthenticationService,'Login').and.callFake(function(){ done(); });
            var controller = $controller('LogInController', {
               $scope: scope,
               $route: route,
            });

            controller.login();

            expect(scope.dataLoading).toBe(true);
            expect(AuthenticationService.Login).toHaveBeenCalledWith(scope.username,scope.password,jasmine.any(Function));
            // expect(fakeWindow.location.href).toBe('/simulator');
         });


         /* Implement for http credentials
         it('Sets credentials',function(done){
         spyOn(AuthenticationService,'SetCredentials').and.callFake(function(){ done(); });
            setTimeout(function() {
                       done();
                     }, 9000);
            var controller = $controller('LogInController', {
               $scope: scope,
               $route: route,
               $window: fakeWindow
            });

            scope.login();
            expect(AuthenticationService.SetCredentials).toHaveBeenCalledWith(scope.username,scope.password);
         });
         */

      });
   });
});
