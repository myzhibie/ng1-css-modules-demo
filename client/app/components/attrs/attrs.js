import angular from 'angular';
import uiRouter from 'angular-ui-router';
import attrsComponent from './attrs.component';

import aAttrsDirective from './a.directive';
import bAttrsDirective from './b.directive';

let attrsModule = angular.module('attrs', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('attrs', {
      url: '/attrs',
      component: 'attrs'
    });
})
.component('attrs', attrsComponent)
.directive('directiveA',aAttrsDirective)
.directive('directiveB',bAttrsDirective)
.name;

export default attrsModule;
