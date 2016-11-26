app.controller('HeaderController',['$scope','$route',function($scope,$route) {
   var vm = this;
   this.test = true;
   this.activeTab = $route.current.activeTab;
}]);

