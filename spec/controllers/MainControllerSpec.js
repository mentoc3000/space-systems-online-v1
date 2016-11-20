describe('MainController Tests', function(){


   beforeEach(angular.mock.module('SSOApp'));

   it('Karma works',function(){
      expect(true).toBe(true);
   });

   var $controller, $rootScope, route;
   var activeTab = 'home';

   beforeEach(inject(function(_$controller_, _$rootScope_, _$route_){
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      route = _$route_;

      // mock the route (http://stackoverflow.com/questions/26042781/angularjs-karma-test-typeerror-route)
      route.current = {
         activeTab: activeTab
      };
   }));

   describe('Verify connection', function() {
      it('Has the correct active tab',function(){
         var scope = $rootScope.$new();
         var controller = $controller('MainController', {
            $scope: scope,
            $route: route
         });

         expect(scope.test).toBe(true);
         expect(scope.activeTab).toBe(activeTab);
      });
   });

});
