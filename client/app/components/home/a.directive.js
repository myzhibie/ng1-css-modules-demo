function aDirective(homeService) {
    "ngInject";
    return {
        restrict: 'E',
        template: `name:<input type='text' ng-model='showValue'>
  <br><button ng-click="addName()">addName</button>`,
        link: (scope, element, attrs) => {
            scope.addName = () => {
                if (scope.showValue) {
                    homeService.addName(scope.showValue);
                }
            }
        }
    };
}

export default aDirective;
