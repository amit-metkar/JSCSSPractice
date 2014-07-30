var app = angular.module("MyApp", []);

app.controller("MyCtrl", function ($scope) {
    $scope.name = "Amit";
    $scope.user = { name: "ametkar" };
});

app.controller("MyNestedCtrl", function ($scope) { });