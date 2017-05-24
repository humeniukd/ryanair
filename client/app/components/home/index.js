import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';

export default angular.module('app.home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;
