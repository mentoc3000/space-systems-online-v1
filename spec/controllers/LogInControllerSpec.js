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
      var fakeWindow;

      beforeEach(inject(function(_AuthenticationService_){
         AuthenticationService = _AuthenticationService_;
         spyOn(AuthenticationService,'ClearCredentials');
         spyOn(AuthenticationService,'Login');
         spyOn(AuthenticationService,'SetCredentials');
         fakeWindow = {
            location: {
               href: ''
            }
         };
      }));


      it('Logs in successfully',function() {
         var scope = $rootScope.$new();
         scope.username = 'test';
         scope.password = 'test';
         var controller = $controller('LogInController', {
            $scope: scope,
            $route: route,
            $window: fakeWindow
         });

         expect(AuthenticationService.ClearCredentials).toHaveBeenCalled();

         scope.login();

         expect(scope.dataLoading).toBe(true);
         expect(AuthenticationService.Login).toHaveBeenCalledWith(scope.username,scope.password,jasmine.any(Function));
         // expect(AuthenticationService.SetCredentials).toHaveBeenCalledWith(scope.username,scope.password);
         // expect(fakeWindow.location.href).toBe('/simulator');
      });
   });
});
