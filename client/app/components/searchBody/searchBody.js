import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchBodyComponent from './searchBody.component';


let searchBodyModule = angular.module('searchBody', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('search', {
      url: '/search',
      component: 'searchBody'
    });
})
.component('searchBody', searchBodyComponent)

.name;

export default searchBodyModule;
