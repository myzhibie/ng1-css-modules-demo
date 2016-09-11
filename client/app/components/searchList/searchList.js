import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchListComponent from './searchList.component';

let searchListModule = angular.module('searchList', [
  uiRouter
])

.component('searchList', searchListComponent)

.name;

export default searchListModule;
