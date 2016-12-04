var Q = require('q');

describe('AccountController Tests', function() {

   beforeEach(angular.mock.module('SSOApp'));
   // beforeEach(function($provide){
   //    $provide.service('UserService',UserServiceMock);
   // });

   var $controller, $window, UserService, FlashService;

   beforeEach(inject(function(_$controller_, _$window_, _UserService_, _FlashService_){
      $controller = _$controller_;
      $window = _$window_;
      // UserService = _UserService_;
      UserService = _UserService_;
      FlashService = _FlashService_;
   }));

   it('Gets the current user when loaded', function() {
      var deferred = Q.defer();
      spyOn(UserService,'GetCurrent').and.returnValue(deferred.promise);
      $controller('AccountController',{
         $window: $window,
         UserService: UserService,
         FlashService: FlashService
      });
      expect(UserService.GetCurrent).toHaveBeenCalled();
   });
});
   
