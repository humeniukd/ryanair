import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import datepicker from 'angular-ui-bootstrap/src/datepickerPopup';
import collapse from 'angular-ui-bootstrap/src/collapse';
import typeahead from 'angular-ui-bootstrap/src/typeahead';
import pager from 'angular-ui-bootstrap/src/pager';
import Common from './common';
import Components from './components';
import AppComponent from './app.component';

import '../bootstrap/bootstrap.less';
import '../bootstrap/datepicker.less';

angular.module('app', [
    uiRouter,
    datepicker,
    collapse,
    pager,
    typeahead,
    Common,
    Components
  ])
  .config(($logProvider) => {
    'ngInject';
    $logProvider.debugEnabled(false);
  })
  .config((RestProvider) => {
    'ngInject';
    RestProvider.setConfig({
      baseUrl: 'https://murmuring-ocean-10826.herokuapp.com/en/api/2/',
      airportsUrl: 'forms/flight-booking-selector',
      flightsUrl: 'flights/from/',
      dateFormat: 'yyyy-MM-dd'
    });
  })
  .config(($provide, uibDatepickerPopupConfig, uibDatepickerConfig) => {
    'ngInject';
    $provide.constant(
      uibDatepickerPopupConfig,
      angular.extend(uibDatepickerPopupConfig, {showButtonBar: false})
    );
    $provide.constant(
      uibDatepickerConfig,
      angular.extend(uibDatepickerConfig, {showWeeks: false})
    );
  })
  .component('app', AppComponent);
