import angular from 'angular';
import uiRouter from 'angular-ui-router';
import datepicker from 'angular-ui-bootstrap/src/datepickerPopup';
import Common from './common';
import Components from './components';
import AppComponent from './app.component';
import 'angular-bootstrap-datetimepicker/src/css/datetimepicker.css';
import '../less/bootstrap.less';

angular.module('app', [
    uiRouter,
    datepicker,
    Common,
    Components
  ])
  .config((RestProvider) => {
    'ngInject';
    console.log(RestProvider)
  })

  .component('app', AppComponent);
