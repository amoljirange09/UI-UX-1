let app = angular.module("MyApp", []);

app.controller("MyCtrl", ($scope) => {
// this is controller
$scope.title = "Stay Home Stay Safe";

$scope.changeValue = () => {
    $scope.title = "This is home time";
};
});