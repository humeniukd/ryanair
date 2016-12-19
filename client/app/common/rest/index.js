import angular from 'angular';
import UserFactory from './rest.factory';

let userModule = angular.module('rest', [])

.factory('Rest', UserFactory)

.name;

export default userModule;
