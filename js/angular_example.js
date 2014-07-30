example1 = (function () {
    var name = "";
    function example1Ctrl($scope) {
        $scope.visible = true;
        $scope.toggle = function () {
            $scope.visible = !$scope.visible;
        }
    }

    return {
        Name: name,
        MyCtrl: example1Ctrl
    }
})();

