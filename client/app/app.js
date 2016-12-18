import angular from 'angular';
import uiRouter from 'angular-ui-router';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import collapse from 'angular-ui-bootstrap/src/collapse';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import '../less/bootstrap.less';

angular.module('app', [
    uiRouter,
    datepicker,
    collapse,
    Common,
    Components
  ])
  .config((RestProvider) => {
    'ngInject';
    console.log(RestProvider)
  })

  .component('app', AppComponent);
