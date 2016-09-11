function aDirective() {
    "ngInject";
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        template: `<div><div ng-transclude></div><ul>
            <li ng-repeat="list in lists">{{list}}</li>
        </ul></div>`,
        controller: function($scope) {
            "ngInject";
            $scope.lists  = [];
             this.addName = (item) => {
                    $scope.lists.push(item);
            }
        }
    };
}

export default aDirective;
