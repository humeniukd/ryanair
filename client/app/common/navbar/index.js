import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

export default angular.module('app.navbar', [
  uiRouter
])

.component('navbar', navbarComponent)

.name;
