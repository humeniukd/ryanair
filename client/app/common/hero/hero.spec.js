/* jshint mocha:true */
/* jshint jasmine:true */
/* global inject */
import HeroModule from './';
import HeroController from './hero.controller';
import HeroComponent from './hero.component';
import HeroTemplate from './hero.html';

describe('Hero', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeroModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeroController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a startDateOptions property', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('startDateOptions');
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeroComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HeroTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HeroController);
      });
  });
});
