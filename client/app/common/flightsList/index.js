import angular from 'angular';
import listComponent from './flightsList.component';

export default angular.module('app.flightsList', [])

.component('flightsList', listComponent)

.name;
