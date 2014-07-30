example3 = (function () {

    function example3Ctrl($scope) {
        $scope.value = 1;
        $scope.increamentValue = function (i) {
            $scope.value += i;
        }
        $scope.getIncreamentValue = function () {
            return $scope.value + 1;
        }
        $scope.name = "";
        $scope.$watch("name", function (newValue, oldValue) {
            if ($scope.name.length > 0) {
                $scope.greeting = "Greetings " + $scope.name;
            }
        });
    }

    return {
        MyCtrl: example3Ctrl
    }
})();