function aDirective(homeService,$rootScope) {
    "ngInject";
    return {
        restrict: 'E',
        template: `name:<input type='text' ng-model='showValue' class='about'>
  <br><button ng-click="addName()" class="index">addName</button>`,
        link: (scope, element, attrs) => {
            scope.addName = () => {
                if(scope.showValue){
                    $rootScope.$broadcast('addName',scope.showValue);
                }        
            }
        }
    };
}

export default aDirective;
