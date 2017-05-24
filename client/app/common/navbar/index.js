import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import navbarComponent from './navbar.component';

export default angular.module('app.navbar', [
  uiRouter
])

.component('navbar', navbarComponent)

.name;
