import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import aDirective from './a.directive';
import bDirective from './b.directvie';
import aboutStyle from './about.scss';
let aboutModule = angular.module('about', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})
.directive('eventAdirective',aDirective)
.directive('eventBdirective',bDirective)
.component('about', aboutComponent)
  
.name;

export default aboutModule;
