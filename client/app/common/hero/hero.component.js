import template from './hero.html';
import controller from './hero.controller';
import './hero.less';

let heroComponent = {
  bindings: {
    criteria: '=?',
    loading: '='
  },
  template,
  controller
};

export default heroComponent;
