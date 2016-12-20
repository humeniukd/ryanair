import angular from 'angular';
import uiRouter from 'angular-ui-router';
import datepicker from 'angular-ui-bootstrap/src/datepickerPopup';
import typeahead from 'angular-ui-bootstrap/src/typeahead';
import Common from './common';
import Components from './components';
import AppComponent from './app.component';

import '../less/bootstrap.less';
import '../less/datepicker.less';

angular.module('app', [
    uiRouter,
    datepicker,
    typeahead,
    Common,
    Components
  ])
  .config((RestProvider) => {
    'ngInject';
    RestProvider.setBaseUrl('https://murmuring-ocean-10826.herokuapp.com/en/api/2/');
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
