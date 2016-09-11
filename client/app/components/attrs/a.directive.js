function aDirective($interval) {
    "ngInject";
    return {
        restrict: 'A',
        link: (scope, element, attrs) => {
            let deInterval=$interval(()=>{
              attrs.$set('showValue', new Date().getTime());
            },1000);
            scope.$on('$destroy',()=>{
                $interval.cancel(deInterval);
            });
        }
    };
}

export default aDirective;
