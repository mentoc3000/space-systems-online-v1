app.controller('MainController',['$scope','$route',function($scope,$route) {
   $scope.activeTab = $route.current.activeTab;
}]);

