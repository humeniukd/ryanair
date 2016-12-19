import angular from 'angular';
import Navbar from './navbar';
import Footer from './footer';
import Hero from './hero';
import User from './rest';

export default angular.module('app.common', [
  Navbar,
  Footer,
  Hero,
  User
])
.name;

