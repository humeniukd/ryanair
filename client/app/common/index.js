import angular from 'angular';
import Navbar from './navbar';
import Hero from './hero';
import Rest from './rest';
import Flight from './flight';
import FlightsList from './flightsList';
import './common.less';

export default angular.module('app.common', [
  Navbar,
  Hero,
  Rest,
  FlightsList,
  Flight
])
.name;

