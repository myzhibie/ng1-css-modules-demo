import angular from 'angular';
import uiRouter from 'angular-ui-router';
import showActionComponent from './showAction.component';

let showActionModule = angular.module('showAction', [
  uiRouter
])

.component('showAction', showActionComponent)

.name;

export default showActionModule;
