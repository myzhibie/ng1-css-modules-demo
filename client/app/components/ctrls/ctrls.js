import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ctrlsComponent from './ctrls.component';
import aDirective from './a.directive';
import bDirective from './b.directive';


let ctrlsModule = angular.module('ctrls', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('ctrls', {
      url: '/ctrls',
      component: 'ctrls'
    });
})
.component('ctrls', ctrlsComponent)
.directive('aCtrlDirective',aDirective)
.directive('bCtrlDirective',bDirective)
.name;

export default ctrlsModule;
