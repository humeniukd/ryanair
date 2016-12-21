import angular from 'angular';
import aboutComponent from './item.component';

let itemModule = angular.module('app.item', [])

.component('item', aboutComponent)

.name;

export default itemModule;
