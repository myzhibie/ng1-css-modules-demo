import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import HomeService from './home.service';
import aDirective from './a.directive';
import bDirective from './b.directvie';
import homestyle from './home.scss';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.service('homeService',HomeService)
.directive('aDirective',aDirective)
.directive('bDirective',bDirective)
.component('home', homeComponent)
.name;

export default homeModule;
