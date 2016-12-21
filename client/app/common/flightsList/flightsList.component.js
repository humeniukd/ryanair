import controller from './flightsList.controller';
import template from './flightsList.html';
export default {
  bindings: {
    criteria: '<',
    currentPage: '=?'
  },
  controller,
  template
};
