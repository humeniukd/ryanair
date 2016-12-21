import angular from 'angular';
import listComponent from './list.component';

export default angular.module('app.list', [])

.component('resultsList', listComponent)

.name;
