import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchFieldComponent from './searchField.component';

let searchFieldModule = angular.module('searchField', [
  uiRouter
])

.component('searchField', searchFieldComponent)

.name;

export default searchFieldModule;
