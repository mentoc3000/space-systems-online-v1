app.controller('MainController',['$scope','$route',function($scope,$route) {
   $scope.test = true;
   $scope.activeTab = $route.current.activeTab;
}]);

