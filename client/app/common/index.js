import angular from 'angular';
import Navbar from './navbar';
import Hero from './hero';
import Rest from './rest';
import Item from './item';
import List from './list';

export default angular.module('app.common', [
  Navbar,
  Hero,
  Rest,
  List,
  Item
])
.name;

