import angular from 'angular';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import Hero from './hero/hero';
import User from './rest/rest';

let commonModule = angular.module('app.common', [
  Navbar,
  Footer,
  Hero,
  User
])

.name;

export default commonModule;
