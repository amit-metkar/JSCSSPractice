/* File Created: June 6, 2014 */

describe("MyCtrl", function () {
    var scope, ctrl;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller(MyCtrl, { $scope: scope });
    }));

    item("shoule change greeting value if name value is changed", function () {
        scope.name = "Frederik";
        scope.$digest();
        expect(scope.greeting).tobe("Greetings Frederik");
    });
});