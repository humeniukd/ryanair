import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

export default angular.module('app.about', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
})

.component('about', aboutComponent)

.name;