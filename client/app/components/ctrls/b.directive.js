function bDirective() {
    "ngInject";
    return {
        restrict: 'E',
        require:'^^aCtrlDirective',
        template: `name:<input type='text' ng-model='showValue'>
  <br><button ng-click="addName()">addName</button>
       `,
        link: (scope, element, attrs,ctrls) => {
            scope.addName=function(){
                if(scope.showValue){
                    ctrls.addName(scope.showValue);
                }       
            }
        }
    };
}

export default bDirective;
