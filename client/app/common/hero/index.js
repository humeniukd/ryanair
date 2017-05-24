import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import heroComponent from './hero.component';

export default angular.module('app.hero', [
  uiRouter
])

.component('hero', heroComponent)

.name;
