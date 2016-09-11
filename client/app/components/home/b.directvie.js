function bDirective(homeService) {
    "ngInject";
    return {
        restrict: 'E',
        template: `<ul>
            <li ng-repeat="list in lists">{{list}}</li>
        </ul>`,
        link: (scope, element, attrs) => {
            scope.lists=homeService.names;
        }
    };
}

export default bDirective;
