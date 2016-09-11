function bDirective() {
    "ngInject";
    return {
        restrict: 'E',
        template: `<span>{{time|date:'yyyy-MM-dd HH:mm:ss'}}</span>`,
        link: (scope, element, attrs) => {
            attrs.$observe('showValue', (newVal)=>{
                scope.time=newVal;
                console.log(newVal);
            });
        }
    };
}

export default bDirective;
