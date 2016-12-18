import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './footer.component';

let footerModule = angular.module('foot',[
  uiRouter
])

.component('foot', footerComponent)

.name;

export default footerModule;
